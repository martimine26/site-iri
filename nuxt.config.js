
export default {
  generate: {
    fallback: "404.html"
  },
  target: 'static',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Федерация Тхэквондо ГТФ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'yandex-verification', content: '4d78135e19b7ee94'},
      { name: 'google-site-verification', content: 'SgWCbIWC9G1RnVJQQpuLgdFQnVSdH0zomragqF9t86U'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logotip.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#bb86fc' },
  /*
  ** Global CSS
  */
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
     ['@nuxtjs/google-fonts', {
       families: {
    Roboto:[500,600],
    Rubik: true,
    'Josefin+Sans': true,
    Lato: [100, 300],
    Raleway: {
      wght: [100, 400],
      ital: [100]
    },
   }
 }],
 ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
