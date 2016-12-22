import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state = {
  user: {name: 'adfd', pwd: 'df'},
  count: 0
}

const mutations = {
  increment (state, name) {
    state.name = 'baiyang'
    window.localStorage.setItem('name', JSON.stringify(state.name))
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

