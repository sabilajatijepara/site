import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  const res = await $fetch('https://api.sabilajati.com/products')
  const products = res?.data || []

  return products.flatMap((product: any) => {
    const lastmod = product.createdAt?._seconds
      ? new Date(product.createdAt._seconds * 1000).toISOString()
      : undefined

    return [
      // English (DEFAULT, TANPA PREFIX)
      {
        loc: `/products/${product.slug_en}`,
        lastmod,
        _sitemap: 'en-US',
        alternatives: [
          {
            hreflang: 'id-ID',
            href: `https://sabilajati.com/id/products/${product.slug}`
          }
        ]
      },

      // 🇮🇩 Indonesia (PAKAI /id)
      {
        loc: `/id/products/${product.slug}`,
        lastmod,
        _sitemap: 'id-ID',
        alternatives: [
          {
            hreflang: 'en-US',
            href: `https://sabilajati.com/products/${product.slug_en}`
          }
        ]
      }
    ]
  })
})