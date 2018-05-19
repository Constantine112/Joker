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
						<li>主控板编号：{{printerId}}</li>
						<li>主控板状态：{{printerStatus}}</li>
						<li>连接打印机数量：{{units}}</li>
					</ul>
					<ul class="print_detail">
						<li>连续打印时长：{{hasTypedTime}}</li>
						<li>已打印时长：{{sendedOrderNum}}</li>
						<li>已打印订单份数：{{orderSum}}</li>
						<li>打印机健康状态：{{printSuccessNum}}</li>
						<li>总切刀次数：{{cutSum}}</li>
						<li>切刀错误次数：{{cunErrorSum}}</li>
					</ul>
	           	</div>
				<button class="button" onclick="window.open('../../html/orderIndex.html">返回订单主页</button>
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
				printerId: null,
				printerStatus: 'is printing',
				hasTypedTime: "910978ms",
				cunErrorSum: 100,
				orderSum: 0,
				cutSum: 1,
				printSuccessNum: 1,
				sendedOrderNum: 1,
				units: 1,
			}
		},
		computed: {

		},
		methods:{
			// 解析url
			reversedMessage: function () {
			// `this` 指向 vm 实例
			var url =  window.location.href;
			    var str = url.split("?")[1],    //通过?得到一个数组,取?后面的参数
			        items = str.split("&");    //分割成数组
			     var arr,name,value;
			 
			         arr = items[0].split("=");    //["key0", "0"]
			         name = arr[0];
			         value = arr[1];
				this.printerId = parseInt(arr[1]);
			},
			getStatus:function(){
				var that = this;
				console.log(this.printerId)
				axios.post('http://47.106.74.67:8080/system/printerdetail/'+this.printerId)
					 .then(function(res){
						that.printerStatus = res.data.data.printerStatus
						that.hasTypedTime = res.data.data.hasTypedTime
						that.cunErrorSum = res.data.data.cunErrorSum
						that.orderSum = res.data.data.orderSum
						that.cutSum = res.data.data.cutSum
						that.printSuccessNum = res.data.data.orderSum
						that.sendedOrderNum = res.data.data.hasTypedTime
						that.units = res.data.data.unitsSum
					 })
					 .catch(function(res){
					 	console.log(res);
					 	alert("获取失败");
					 })
			}
		},
		created:function(){
			this.reversedMessage()
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

