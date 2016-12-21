import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'

import router from './router'
import store from './vuex'

Vue.use(VueResource)
router.beforeEach((to, from, next) => {
  console.log(to.path)
  console.log(from.path)
  next()
})
router.afterEach(route => {
  console.log('good')
})

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
