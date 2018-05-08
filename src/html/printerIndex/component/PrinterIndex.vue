<template>
	<div id="container">
		<div id="nav" class="wrapper">
		    <div class="user">
				<span class="userTitle">
					基于合同网协议的集群打印系统
				</span>
		        <a href="#"></a>
		        <span class="user_name" v-text="userName"></span>
		    </div>
		</div>
		<div class="wrapper mh of">
	        <div class="subwrapper" style="text-align:left; font-size:18px;">
				<p class="page_title"><img src="../../../assets/images/zhukong.png"><span>主控板详情</span></p>
	            	<!-- <router-link to="/ordersearch"><button type="button" class="button" >查询订单</button></router-link> -->

	            <!-- <router-link to="/orderindex"><button class="button" type="button" style="float: right;">
	            	返回订单主页
	            </button></router-link> -->
	           	<div id="zhukong">
	           		<!-- <h3>主控板详细参数:{{printer.id}}</h3> -->
					<ul class="board_character">
						<li>主控板编号：</li>
						<li>主控板状态：</li>
						<li>连接打印机数量：</li>
					</ul>
					<ul class="print_detail">
						<li>连续打印时长：{{printer.orderNum}}</li>
						<li>已打印时长：{{printer.sendedOrderNum}}</li>
						<li>已打印订单份数：{{printer.unsendedOrderNum}}</li>
						<li>打印机健康状态：{{printer.printSuccessNum}}</li>
						<li>总切刀次数：{{printer.printErrorNum}}</li>
						<li>切刀错误次数：{{printer.successRate}}</li>
					</ul>
	           	</div>
				<button class="button" onclick="window.open('http://localhost:8080/html/orderIndex.html#/">返回订单主页</button>
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
<style scoped src='@/assets/css/order.css'>
</style>
<style>
	.button {
		width: 150px;
		margin-left: 54%;
		margin-bottom: 100px;
	}
</style>

