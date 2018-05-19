<template>
  <div id="app">
    <order-index></order-index>
  </div>
</template>

<script>
import OrderIndex from './component/OrderIndex'
process.on('unhandledRejection', error => {
  // Won't execute
  console.log('unhandledRejection', error.test);
});
export default {
    name: 'app',
    components: {
			// 什么要用到的其他组件
		'order-index': OrderIndex
	},
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
