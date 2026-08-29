import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://jean-lucas-eletricista.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },

    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
