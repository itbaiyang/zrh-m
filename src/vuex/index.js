import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  user: {name: 'adfd', pwd: 'df'}
}

const mutations = {
  INCREMENT (state, name) {
    state.name = name
  }
}

export default new Vuex.Store({
  state,
  mutations
})

