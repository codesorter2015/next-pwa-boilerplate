const fs = require('fs')
const path = require('path')

const manifest = {
  name: 'NextApp',
  short_name: 'NextApp',
  lang: 'en-US',
  start_url: '/',
  display: 'standalone',
  background_color: '#FAFAFA',
  theme_color: '#512DA8',
  display: 'standalone',
  orientation: 'portrait',
  icons: [
    {
      src: '/static/icons/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png'
    },
    {
      src: '/static/icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
}

fs.writeFileSync(
  path.join(__dirname, '../src/client/out/manifest.json'),
  JSON.stringify(manifest)
)

console.log('> generate manifest')