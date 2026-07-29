// Vercel serverless entry point. All /api/* requests are rewritten here
// (see vercel.json) and handled by the existing Express app, which already
// owns every /api route. Static assets and SPA routes are served by Vercel's
// CDN from client/dist, so this function only ever runs API logic.
import app from '../server/index.js'

export default app
