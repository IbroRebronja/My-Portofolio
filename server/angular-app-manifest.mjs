
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ibrorebronja.github.io/my-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23815, hash: '63b79e71bab1dc97fbe9159a6c583de9969f771762c4b283372c3bf021af3bef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17170, hash: 'd40f930c0dbb16c911cc990622cc77c906c3f0f8ef16ee58e036cf2478b8c269', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34010, hash: '816313dc061ecc99baba17d96a8d4f92672cef4df2c2456b24c6a4d998cd9bba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGK6NPXP.css': {size: 8034, hash: 'W+W+I9vX1Pg', text: () => import('./assets-chunks/styles-YGK6NPXP_css.mjs').then(m => m.default)}
  },
};
