module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_ROUTE_FRONT_ROOT,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // exclude: ['/payment'],
  // alternateRefs: [
  //   {
  //     href: 'https://moscow.mba/en-US',
  //     hreflang: 'en'
  //   }
  // ],
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
