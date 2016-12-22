<template>
  <div id="login">
    <h2>login</h2>
    <input type="text" v-model="user" placeholder="edit me"><br />
    <input type="password" v-model="password" name=""><br />
    <button v-on:click="printUser(user, password)">Login</button>
    <router-link to="/contain">Login</router-link>
  </div>
</template>
<script>
  import 'assert'
  import 'crypto'
  // import { rootPath } from '../config.js'
  // import $ from 'jquery'
  var Vue = require('vue')
  var VueResource = require('vue-resource')

  Vue.use(VueResource)
  import CryptoJS from 'crypto-js'
  // import { mapActions } from 'vuex'
  export default {
    data: function () {
      return {
        user: '',
        password: ''
      }
    },
    methods: {
      encrypt_pd: function (message) {
        var keyHex = CryptoJS.enc.Utf8.parse('abc123.*abc123.*abc123.*abc123.*')
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        })
        return encrypted.toString()
      },
      printUser: function (user, pd) {
        var router = this.$router
        let getTimestampTemp = new Date().getTime()
        let timestamp = String(getTimestampTemp).substring(0, 10)
        let getTimestamp = parseInt(timestamp)
        let sign = this.encrypt_pd(pd + getTimestamp)
        var params = {
          'account': user,
          'password': pd,
          'timestamp': getTimestamp,
          'signature': sign
        }
        console.log(params)
        Vue.http.post('/api/p/user/login', params).then((data) => {
          if (data.returnCode === 0) {
            let loginUser = {
              'userId': data.result.split('_')[0],
              'token': data.result.split('_')[1]
            }
            this.putObject('msg', loginUser)
          } else {
            console.log(data)
          }
          router.push('/contain')
        })
        //   type: 'POST',
        //   url: '/api/p/user/login',
        //   data: params,
        //   traditional: true,
        //   success: function (data, textStatus, jqXHR) {
        //     if (data.returnCode === 0) {
        //       let loginUser = {
        //         'userId': data.result.split('_')[0],
        //         'token': data.result.split('_')[1]
        //       }
        //       this.putObject('msg', loginUser)
        //     } else {
        //       console.log(data)
        //     }
        //     router.push('/contain')
        //   },
        //   dataType: 'json'
        // })
        // $.post('/api/p/user/login', params, function (data) {
        //   if (data.returnCode === 0) {
        //     let loginUser = {
        //       'userId': data.result.split('_')[0],
        //       'token': data.result.split('_')[1]
        //     }
        //     this.putObject('msg', loginUser)
        //   } else {
        //     console.log(data)
        //   }
        //   router.push('/contain')
        // })
      },
      putObject: function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    }
  }
</script>