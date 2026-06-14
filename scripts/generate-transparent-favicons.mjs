import { readFileSync, writeFileSync } from 'node:fs'
import { deflateSync, inflateSync } from 'node:zlib'

const sourcePath = 'client/public/android-chrome-512x512.png'
const outputSizes = [
  ['favicon-16x16.png', 16, true],
  ['favicon-32x32.png', 32, true],
  ['favicon-48x48.png', 48, false],
  ['favicon-64x64.png', 64, false],
  ['apple-touch-icon.png', 180, false],
  ['android-chrome-192x192.png', 192, false],
  ['android-chrome-512x512.png', 512, false]
]

const transparentMaster = removeLightBackground(readPng(sourcePath))
const generatedPngs = new Map()

for (const [fileName, size, thicken] of outputSizes) {
  const resized = resizeContain(transparentMaster, size, thicken)
  const png = writePng(resized)
  generatedPngs.set(size, png)
  writeFileSync(`client/public/${fileName}`, png)
}

writeFileSync(
  'client/public/favicon.ico',
  writeIco([
    { size: 16, png: generatedPngs.get(16) },
    { size: 32, png: generatedPngs.get(32) },
    { size: 48, png: generatedPngs.get(48) },
    { size: 64, png: generatedPngs.get(64) }
  ])
)

function removeLightBackground(image) {
  const out = Buffer.from(image.data)

  for (let index = 0; index < out.length; index += 4) {
    const red = out[index]
    const green = out[index + 1]
    const blue = out[index + 2]
    const max = Math.max(red, green, blue)
    const min = Math.min(red, green, blue)

    if (min >= 235 && max - min <= 18) {
      out[index + 3] = 0
    }
  }

  return cropToContent({ ...image, data: out }, 24)
}

function cropToContent(image, padding) {
  let minX = image.width
  let minY = image.height
  let maxX = 0
  let maxY = 0

  for (let y = 0; y < image.height; y += 1) {
    for (let x = 0; x < image.width; x += 1) {
      if (image.data[pixelIndex(image.width, x, y) + 3] > 0) {
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x)
        maxY = Math.max(maxY, y)
      }
    }
  }

  minX = Math.max(0, minX - padding)
  minY = Math.max(0, minY - padding)
  maxX = Math.min(image.width - 1, maxX + padding)
  maxY = Math.min(image.height - 1, maxY + padding)

  const width = maxX - minX + 1
  const height = maxY - minY + 1
  const data = Buffer.alloc(width * height * 4)

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      image.data.copy(
        data,
        pixelIndex(width, x, y),
        pixelIndex(image.width, minX + x, minY + y),
        pixelIndex(image.width, minX + x, minY + y) + 4
      )
    }
  }

  return { width, height, data }
}

function resizeContain(source, size, thicken) {
  const data = Buffer.alloc(size * size * 4)
  const scale = Math.min((size - 2) / source.width, (size - 2) / source.height)
  const widthBoost = thicken ? 1.7 : 1
  const scaledWidth = Math.max(1, Math.round(source.width * scale * widthBoost))
  const scaledHeight = Math.max(1, Math.round(source.height * scale))
  const offsetX = Math.floor((size - scaledWidth) / 2)
  const offsetY = Math.floor((size - scaledHeight) / 2)

  for (let y = 0; y < scaledHeight; y += 1) {
    for (let x = 0; x < scaledWidth; x += 1) {
      const sourceX = (x + 0.5) / (scale * widthBoost) - 0.5
      const sourceY = (y + 0.5) / scale - 0.5
      const color = sampleBilinear(source, sourceX, sourceY)
      data.set(color, pixelIndex(size, offsetX + x, offsetY + y))
    }
  }

  const resized = { width: size, height: size, data }
  return thicken ? thickenOpaquePixels(resized) : resized
}

function sampleBilinear(image, x, y) {
  const x0 = clamp(Math.floor(x), 0, image.width - 1)
  const y0 = clamp(Math.floor(y), 0, image.height - 1)
  const x1 = clamp(x0 + 1, 0, image.width - 1)
  const y1 = clamp(y0 + 1, 0, image.height - 1)
  const tx = x - x0
  const ty = y - y0
  const c00 = premultipliedPixel(image, x0, y0)
  const c10 = premultipliedPixel(image, x1, y0)
  const c01 = premultipliedPixel(image, x0, y1)
  const c11 = premultipliedPixel(image, x1, y1)
  const color = [0, 0, 0, 0]

  for (let channel = 0; channel < 4; channel += 1) {
    const top = c00[channel] * (1 - tx) + c10[channel] * tx
    const bottom = c01[channel] * (1 - tx) + c11[channel] * tx
    color[channel] = top * (1 - ty) + bottom * ty
  }

  if (color[3] <= 0) return [0, 0, 0, 0]

  return [
    Math.round(clamp(color[0] / color[3], 0, 255)),
    Math.round(clamp(color[1] / color[3], 0, 255)),
    Math.round(clamp(color[2] / color[3], 0, 255)),
    Math.round(clamp(color[3], 0, 255))
  ]
}

function premultipliedPixel(image, x, y) {
  const index = pixelIndex(image.width, x, y)
  const alpha = image.data[index + 3] / 255
  return [
    image.data[index] * alpha,
    image.data[index + 1] * alpha,
    image.data[index + 2] * alpha,
    image.data[index + 3]
  ]
}

function thickenOpaquePixels(image) {
  const data = Buffer.from(image.data)
  const source = image.data

  for (let y = 0; y < image.height; y += 1) {
    for (let x = 0; x < image.width; x += 1) {
      const index = pixelIndex(image.width, x, y)
      if (source[index + 3] > 0) continue

      const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ].filter(([nx, ny]) => nx >= 0 && nx < image.width && ny >= 0 && ny < image.height)

      const neighbor = neighbors
        .map(([nx, ny]) => pixelIndex(image.width, nx, ny))
        .find((neighborIndex) => source[neighborIndex + 3] > 160)

      if (neighbor !== undefined) {
        data[index] = source[neighbor]
        data[index + 1] = source[neighbor + 1]
        data[index + 2] = source[neighbor + 2]
        data[index + 3] = Math.min(150, source[neighbor + 3])
      }
    }
  }

  return { ...image, data }
}

function readPng(filePath) {
  const file = readFileSync(filePath)

  if (file.readUInt32BE(0) !== 0x89504e47) {
    throw new Error(`${filePath} is not a PNG`)
  }

  let offset = 8
  let width = 0
  let height = 0
  const idat = []

  while (offset < file.length) {
    const length = file.readUInt32BE(offset)
    const type = file.toString('ascii', offset + 4, offset + 8)
    const chunk = file.subarray(offset + 8, offset + 8 + length)

    if (type === 'IHDR') {
      width = chunk.readUInt32BE(0)
      height = chunk.readUInt32BE(4)

      if (chunk[8] !== 8 || chunk[9] !== 6) {
        throw new Error(`${filePath} must be an 8-bit RGBA PNG`)
      }
    }

    if (type === 'IDAT') idat.push(chunk)
    if (type === 'IEND') break
    offset += length + 12
  }

  const inflated = inflateSync(Buffer.concat(idat))
  const stride = width * 4
  const data = Buffer.alloc(width * height * 4)
  let previous = Buffer.alloc(stride)
  let readOffset = 0

  for (let y = 0; y < height; y += 1) {
    const filter = inflated[readOffset]
    readOffset += 1
    const row = Buffer.from(inflated.subarray(readOffset, readOffset + stride))
    readOffset += stride

    unfilter(row, previous, filter)
    row.copy(data, y * stride)
    previous = row
  }

  return { width, height, data }
}

function unfilter(row, previous, filter) {
  const bytesPerPixel = 4

  for (let index = 0; index < row.length; index += 1) {
    const left = index >= bytesPerPixel ? row[index - bytesPerPixel] : 0
    const up = previous[index]
    const upLeft = index >= bytesPerPixel ? previous[index - bytesPerPixel] : 0

    if (filter === 1) row[index] = (row[index] + left) & 255
    if (filter === 2) row[index] = (row[index] + up) & 255
    if (filter === 3) row[index] = (row[index] + Math.floor((left + up) / 2)) & 255
    if (filter === 4) row[index] = (row[index] + paeth(left, up, upLeft)) & 255
  }
}

function writePng(image) {
  const chunks = []
  const header = Buffer.alloc(13)
  header.writeUInt32BE(image.width, 0)
  header.writeUInt32BE(image.height, 4)
  header[8] = 8
  header[9] = 6
  chunks.push(chunk('IHDR', header))

  const stride = image.width * 4
  const raw = Buffer.alloc((stride + 1) * image.height)

  for (let y = 0; y < image.height; y += 1) {
    raw[y * (stride + 1)] = 0
    image.data.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }

  chunks.push(chunk('IDAT', deflateSync(raw, { level: 9 })))
  chunks.push(chunk('IEND', Buffer.alloc(0)))
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), ...chunks])
}

function writeIco(images) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  const directory = Buffer.alloc(images.length * 16)
  let imageOffset = 6 + directory.length

  images.forEach((image, index) => {
    const offset = index * 16
    directory[offset] = image.size === 256 ? 0 : image.size
    directory[offset + 1] = image.size === 256 ? 0 : image.size
    directory[offset + 2] = 0
    directory[offset + 3] = 0
    directory.writeUInt16LE(1, offset + 4)
    directory.writeUInt16LE(32, offset + 6)
    directory.writeUInt32LE(image.png.length, offset + 8)
    directory.writeUInt32LE(imageOffset, offset + 12)
    imageOffset += image.png.length
  })

  return Buffer.concat([header, directory, ...images.map((image) => image.png)])
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const name = Buffer.from(type)
  const checksum = Buffer.alloc(4)
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])))
  return Buffer.concat([length, name, data, checksum])
}

function crc32(buffer) {
  let crc = 0xffffffff

  for (const byte of buffer) {
    crc ^= byte

    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1
    }
  }

  return (crc ^ 0xffffffff) >>> 0
}

function paeth(left, up, upLeft) {
  const estimate = left + up - upLeft
  const leftDistance = Math.abs(estimate - left)
  const upDistance = Math.abs(estimate - up)
  const upLeftDistance = Math.abs(estimate - upLeft)

  if (leftDistance <= upDistance && leftDistance <= upLeftDistance) return left
  return upDistance <= upLeftDistance ? up : upLeft
}

function pixelIndex(width, x, y) {
  return (y * width + x) * 4
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}
