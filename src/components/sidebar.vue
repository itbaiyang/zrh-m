<template>
  <div class="sidebar fl">
  	<p class="side-switch">|||</p>
    <p class="side-title">产品与服务</p>
    <ul class="side-items">
      <router-link to="/contain/pool">Go to Pool</router-link>
      <router-link to="/contain/project">Go to project</router-link>
      <router-link to="/contain/manage">Go to manage</router-link>  
      <router-link to="/contain/channel">Go to channel</router-link>
      <router-link to="/contain/share">Go to share</router-link>
    </ul>
  </div>
</template>
<style scoped>
.sidebar {
  width: 180px;
  height:calc(100% - 50px);
  background: #394556;
}
.side-switch {
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  font-size: 12px;
  letter-spacing: 3px;
  cursor: pointer;
}
.side-title {
  height: 40px;
  line-height: 40px;
  background: #22282e;
  color: #ffffff;
  font-size: 12px;
  padding-left: 50px;
  overflow: hidden;
}
.side-items>a {
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  overflow: hidden;
  padding: 0 15px;
  position: relative;
  text-decoration: none
}
.side-items>a:hover {
  background: #373C50;
}
.router-link-active {
  background: #6b7acb;
}
</style>