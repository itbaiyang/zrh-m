<template>
  <div id="app">
    <!-- <Topbar></Topbar> -->
    <router-view name="top"></router-view>
    <router-view name="side"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
// import Topbar from './components/topbar'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
html, body, p, ul, li {
    padding: 0;
    margin: 0;
    font-family: OneNikeCurrency, 'TradeGothicW01-BoldCn20 675334', Helvetica, Arial, 'Heiti SC', 'ST Heiti', 华文黑体, 'Microsoft YaHei', 雅黑体, SimHei, 黑体, sans-serif;
}

html, body {
    height: 100%;
    width: 100%;
    background: #f8f8f8;
    scrollbar-arrow-color: #f8f8f8; /*图6,三角箭头的颜色*/
    scrollbar-face-color: #b1b8e1; /*图5,立体滚动条的颜色*/
    scrollbar-3dlight-color: #f8f8f8; /*图1,立体滚动条亮边的颜色*/
    scrollbar-highlight-color: #f8f8f8; /*图2,滚动条空白部分的颜色*/
    scrollbar-shadow-color: #f8f8f8; /*图3,立体滚动条阴影的颜色*/
    scrollbar-darkshadow-color: #f8f8f8; /*图4,立体滚动条强阴影的颜色*/
    scrollbar-track-color: #f8f8f8; /*图7,立体滚动条背景颜色*/
    scrollbar-base-color: #f8f8f8; /*滚动条的基本颜色*/
    scrollbar-base-width: 6px;
    /*Cursor:url(mouse.cur);  !*自定义个性鼠标*!*/
}

ul, li {
    list-style-type: none;
}

a, input {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

canvas {
    width: 100%;
    border: 1px solid #000000;
}

input[type="range"] {
    /*-webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;*/
    margin-top: 0;
    background-color: #cccccc;
    border-radius: 10px;
    width: 40px;
    -webkit-appearance: none;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: default;
    top: -5px;
    height: 20px;
    width: 20px;
    /*transform: translateY(-4px);*/
    background: none repeat scroll 0 0 #ADB4FF;
    border-radius: 10px;
    /*-webkit-box-shadow: 0 -1px 1px red inset;*/
}

.clear {
    zoom: 1;
}

.clear:after {
    content: '';
    display: block;
    clear: both;
}

.fl {
    float: left;
}

.fr {
    float: right;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
</style>
