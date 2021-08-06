export default {
  target: "static",
  ssr: false,
  head: {
    title: 'Gabriel Caiana',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bem vindos ao meu site!' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },

  css: ['@/assets/scss/main.scss'],

  plugins: [],

  components: true,

  buildModules: [
    'nuxt-gsap-module'
  ],

  styleResources: {
    scss: []
   },

  modules: ['@nuxtjs/style-resources'],

  build: {
    extractCSS: true,
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
