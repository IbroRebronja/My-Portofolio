
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
    'index.csr.html': {size: 23815, hash: 'e77c878217f3e70fec3e122c11ddf236dd7fd16b82d971ef0e0552d943809e94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17170, hash: '1a13353ae238c2ad09bc38d1b114d09180c835988423e06abec7fb2ee121d6a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34010, hash: '1201696b154336fe571a3b8257239967069888e14cf1d3bc0d3e7f35f097d4a7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGK6NPXP.css': {size: 8034, hash: 'W+W+I9vX1Pg', text: () => import('./assets-chunks/styles-YGK6NPXP_css.mjs').then(m => m.default)}
  },
};
