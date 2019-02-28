import VueGtm from 'vue-gtm'

export default function (Vue, options, { isServer: disabled, router }) {
  if(process.isClient) {
    const { default: VueGtm } = require('vue-gtm')
    Vue.use(VueGtm, {
      vueRouter: router,
      ...options
    })
  }
}
