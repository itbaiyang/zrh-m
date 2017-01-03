<template>
  <div class="contain fl">
    <router-view></router-view>
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
<style>
  .contain {
    width: calc(100% - 180px);
    height:calc(100% - 50px);
  }
</style>