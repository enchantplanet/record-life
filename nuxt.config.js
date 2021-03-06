let apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://record-life.herokuapp.com/';
export default {
 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'record-life',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/common/common.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/urlManager.js',
    '~/plugins/infoManager.js',
    { src: '~/plugins/vue-datepicker', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:apiUrl
  },
  proxy: {
    
  }
  ,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  serverMiddleware:[
    { path: "/api", handler: "~/api/index.js" }
  ]

}
