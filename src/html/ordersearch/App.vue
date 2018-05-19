<template>
  <div id="app">

      <orderSearch/>

  </div>
</template>

<script>

import orderSearch from './component/OrderSearch';
process.on('unhandledRejection', error => {
  // Won't execute
  console.log('unhandledRejection', error.test);
});
export default {
  name: 'app',
  template: '<orderSearch/>',
  components: { orderSearch }
}
</script>
<style  scoped src="../../assets/css/normalize.css"></style>
<style>
#app {
  /*color: #999;*/
  font-family: '微软雅黑';
  font-style: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
  margin: 0;
  /*background: linear-gradient(to right, #d79bec -36%, #868de6);*/
  min-height: 600px;
  min-width: 1000px;
  width: 100%;
  height: 100%;
}

body.orderbox{
  background: white;
}
html,#app{
  width: 100%;
  height: 100%;
}
</style>
