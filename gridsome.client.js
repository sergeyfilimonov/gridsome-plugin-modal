import VModal from 'vue-js-modal/dist/ssr.index'

export default function (Vue, options, { isServer: disabled, router }) {
  if(process.isClient) {
    const { default: VModal } = require('vue-js-modal')
    Vue.use(VModal)
  }
}
