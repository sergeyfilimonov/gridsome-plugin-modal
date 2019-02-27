import VueGtm from 'vue-gtm'

export default function (Vue, options, { isServer: disabled, router }) {
  Vue.use(VueYandexMetrika, {
    router: router,
    env: process.env.NODE_ENV,
    ...options
  })
  Vue.use(VueGtm, {
    vueRouter: router,
    ...options
  })
}
