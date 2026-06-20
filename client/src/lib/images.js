export function reportArticleImageFailure(article, field = 'image', source = '') {
  if (!import.meta.env.DEV) return

  const articleName = article?.name ?? article?.title ?? article?.id ?? 'Unknown article'
  const articleType = article?.collection ?? article?.type ?? 'unknown collection'

  console.warn(`Article image failed to load: ${articleType}/${articleName} ${field}`, source)
}
