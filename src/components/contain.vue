<template>
  	<div class="contain">
      	<router-view></router-view>
      	<!-- <button @click='storeUser'>获取userID</button> -->
        <h3>Count is {{ userId || 'good' }}</h3>
      	<h3>Count is {{ userName }}</h3>
      	<router-link to="/">Login</router-link>
    </div>
</template>
<script>
// import { getUser } from '../vuex/getters'/
import { mapState } from 'vuex'
module.exports = {
  vuex: {
    getters: {
      userName: state => state.user.name
    }
  },
  data: function () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
  },
  computed: mapState({
    userId: state => state.user.name
  })
}
</script>