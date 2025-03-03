
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ibrorebronja.github.io/My-Portofolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/My-Portofolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23822, hash: '9dec2e43412a8f822c29a73f2b4072fd7495cd9106bc17646d1f6431e64865ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17177, hash: '38344e59796d6dc849e437ee2dde1666da09142e49eef0435e9477a375da4073', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34017, hash: 'aec9115d08df30734ff58c0ff418caec11de11603de5aa10b0a262eee132391d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGK6NPXP.css': {size: 8034, hash: 'W+W+I9vX1Pg', text: () => import('./assets-chunks/styles-YGK6NPXP_css.mjs').then(m => m.default)}
  },
};
