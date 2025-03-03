
export default {
  basePath: 'https://ibrorebronja.github.io/my-app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
