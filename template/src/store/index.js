import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

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
    user
  }
})
