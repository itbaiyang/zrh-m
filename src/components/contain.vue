<template>
  	<div class="contain">
      	<router-view></router-view>
      	<button @click='change'>获取userID</button>
        <h3>Count is {{ getUser || 'good' }}</h3>
      	<router-link to="/">Login</router-link>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapActions(['change'])
  }
}
</script>