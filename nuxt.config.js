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

  css: ['@/scss/main.scss'],

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        onComplete: done
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        x: 500,
        onComplete: done
      })
    }
  },

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
