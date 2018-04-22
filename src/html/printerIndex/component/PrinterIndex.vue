<template>
	<div id="container">
		<div id="nav" class="wrapper">
		    <div class="user">
		        <a href="#"></a>
		        <span class="user_name" v-text="userName"></span>
		    </div>
		</div>
		<div class="wrapper mh of">
	        <div class="subwrapper" style="text-align:left; font-size:18px;">

	            	<router-link to="/ordersearch"><button type="button" class="button" >查询订单</button></router-link>

	            <router-link to="/orderindex"><button class="button" type="button" style="float: right;">
	            	返回订单主页
	            </button></router-link>
	           	<div id="order_sum_show">
	           		<h3>打印机编号:{{printer.id}}</h3>
	           		<p>连续打印时长：{{printer.orderNum}}</p>
	               	<p>已打印时长：{{printer.sendedOrderNum}}</p>
	               	<p>已打印订单份数：{{printer.unsendedOrderNum}}</p>
	               	<p>打印机健康状态：{{printer.printSuccessNum}}</p>
	               	<p>总切刀次数：{{printer.printErrorNum}}</p>
	               	<p>切刀错误次数：{{printer.successRate}}</p>
	           	</div>
	        </div>
		</div>
		<div id="ware"></div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				userName:'小明',
				printer:{},
				printerId: this.$route.query.printerId
			}
		},
		methods:{
			getStatus:function(){
				var that = this;
				console.log(this.printerId)
				axios.get('http://47.106.74.67:8080/printer/status/'+this.printerId)
					 .then(function(res){
					 	that.printerStatus = res.data.data;
					 })
					 .catch(function(res){
					 	console.log(res);
					 	alert("获取失败");
					 })
			}
		},
		created:function(){
			this.getStatus();
			//设置背景色
			document.getElementsByTagName('body')[0].className = 'orderbox';
		}
	}
</script>
<style scoped src='../assets/css/order.css'>
</style>
