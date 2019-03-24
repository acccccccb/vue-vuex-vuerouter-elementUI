import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,n) {
      state.count = n;
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})

