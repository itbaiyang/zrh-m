<template>
  	<div class="pool">pool</div>
</template>
<script>
  import { rootPath } from '../config.js'
  import $ from 'jquery'
  export default {
    data: function () {
      return {
        user: '',
        password: ''
      }
    },
    ready: {
      printUser: function (pageNo, pageSize) {
        const msg = this.getObject(msg)
        console.log(msg)
        var params = {
          'userId': '',
          'token': '',
          'pageNo': pageNo,
          'pageSize': pageSize,
          'wd': '',
          'status': ''
        }
        console.log(params)
        $.post(rootPath + 'loanApplicationManage/pool', params, function (data) {
          if (data.returnCode === 0) {
            console.log(data)
          }
        })
      },
      getObject: function (key) {
        window.localStorage.getItem(key)
      }
    }
  }
</script>