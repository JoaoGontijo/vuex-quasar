import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import operacoes from './module-operacoes'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      operacoes
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
