
export default {
  basePath: 'https://ibrorebronja.github.io/My-Portofolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
