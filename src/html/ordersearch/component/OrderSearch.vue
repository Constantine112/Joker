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
			<div class="order_search">
				<div class="search_head">
					<img src="../../../assets/images/icon.png"/>
					<span></span>
					<input type="text" style="height:44px;" id="searchInput" value="searchId" v-model="searchId" placeholder="输入订单的ID">

						
					<button type="button" class="button" value="查询" @click="searhRequest">查询</button>
					<button class="button" type="button" style="" v-on:click="toIndex">返回订单主页</button>
				</div>
				<div class="result">
					<p>查询结果 </p>
					<div class="order-item">
						<div class="item-head">
							<div class="item-number">订单编号</div>
							<div class="item-time">订单时间</div>
							<div class="item-context">订单内容</div>
						</div>
						<div class="item-contain" v-for="result in resultList" v-bind:key="result">
							<div class="item-number">{{result.number}}</div>
							<div class="item-time">{{result.time}}</div>
							<div class="item-context-c" >
								<div class="order-first">
									<div class="order-first-commom">{{result.good}}</div>
									<div class="order-first-second">￥{{result.price}}</div>
									<div class="order-first-commom">{{result.number}}份</div>
								</div>
							</div>
						</div>
						<div class="item-contain" v-if=" resultList.length == 0 ">
							<div>无订单</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="ware"></div>
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		name:'ordersearch',
		data(){
			return {
				userName:"小明",
				userId:1,
				searchId:'',
				resultList:[]
			}
		},
		methods:{
			searhRequest:function(){
				var that  = this;
				axios.post('http://47.106.74.67:8080//show/menu/' + that.searchId).then(function(res){
					if(res.status===200){
					 	that.resultList = res.data.data;
					}else{
					 	alert('无结果');
					}
				}).catch(function(res){
					 	console.log(res);
				})
			},
			toIndex: function () {
				this.toPage("../../html/orderIndex.html")
			},
			toPage: function (e) {
				window.location.href = e;
			}
		},
		created:function(){
			//设置背景色
			document.getElementsByTagName('body')[0].className = 'orderbox';
		}
	}
</script>
<style scoped src="@/assets/css/order.css">
.search_head{
    width: 50%;
	font-size: 20px;
}
</style>
<style>
.table-class tr td{
	border: 1px solid;
} 
#searchInput {
	height: 44px;
	padding: 0 20px;
}
.search_head img {
	position: relative;
	bottom: -14px;
}
.search_head > span {
	width: 6px;
	height: 44px;
	display: inline-block;
	background: #9f88e2;
	position: relative;
	bottom: -16px;
	margin: 0 20px 0 16px;
}
.result {
	text-align: left;
	margin: 50px  0 0 0;
	border-top: 1px solid #dbdbdb;
	padding: 30px 0 0 0;
}
.result P {
	font-size: 24px;
}
.order-item {
	display: flex;
	flex-direction: column;
	width: 732px;
	margin: 50px 0 0 40px;
	padding: 30px;
	border:  1px solid #dbdbdb;
}
.item-head {
	display: flex;
	padding: 0 0 20px 0;
}
.item-number {
	width: 18%;
}
.item-time {
	width: 30%;
}
.item-context {
	flex-grow: 1;

}
.item-head > div:before {
	content: '';
    border-radius: 50%;
	height: 14px;
	width: 14px;
	background: #dbdbdb;
	display: inline-block;
	margin: 0 10px 0 0;
} 
.item-head > div {
	align-items: center;
	display: flex;
}
.item-contain {
	display: flex;
	padding: 20px 0 20px 0 ;
	border-top: 1px solid #dbdbdb;
}
.item-context-c {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
.order-first {
	display:flex;
	flex-direction: row;
}
.order-first-second {
    width: 57%;
}
.order-first-commom {
	flex-grow: 1;
}
</style>

