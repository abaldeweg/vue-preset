import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showOffCanvas: false,
  },
  mutations: {
    showOffCanvas(state, status) {
      state.showOffCanvas = status
    },
  },
  actions: {},
  modules: {
  }
})
