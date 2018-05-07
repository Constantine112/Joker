<template>
	<div id="container">
		<div id="nav" class="wrapper">
		    <div class="user">
		        <a href="#"></a>
		        <span class="user_name" v-text="userName"></span>
		    </div>
		</div>
		<div class="wrapper mh of">
			<div class="order_search">
				<div class="search_head">
					<router-link to="/orderindex">
						<button class="button" type="button"style="float: right; margin-top: -1%;">返回订单主页</button>
					</router-link>
					<label for="searchInput">
						>输入批次的ID:
					<input type="text" id="searchInput" value="searchId" v-model="searchId">
					</label>
					<input type="submit" id="serachBtn" value="查询" @click="searhRequest">
					<p>>查询结果 : </p>
				</div>
				<table>
					<tr>
						<th>总订单数</th>
						<th>已完成订单数</th>
						<th>未完成订单数</th>

					</tr>
					<tr v-if="!resultList.length">
						<td colspan="13">订单号不存在...</td>
					</tr>
					<tr v-for="order in resultList">
						<td>{{order.id}} </td>
						<td>{{order.orderType === 0?"非加急":'加急'}} </td>
						<td>{{order.bulkId}}</td>
						<td>{{order.bulkIndex}}</td>
						<td> {{order.sendTime}} </td>
						<td>{{order.acceptTime}}</td>
						<td>{{order.enterQueueTime}}</td>
						<td>{{order.startPrintTime}} </td>
						<td>{{order.execSendTime}}</td>
						<td>{{order.execAcceptTime}} </td>
						<td>{{order.execEnterQueueTime}}</td>
						<td>{{order.execStartPrintTime}}</td>
						<td>{{order.execPrintResultTime}}</td>
					</tr>

				</table>
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
				resultList:[
					/*{
						id:1,
						orderType: 0,
						bulkId: '2015-10-11 10:20:11',
						bulkIndex:'2015-10-11 10:20:11',
						sendTime:'2015-10-11 10:20:11',
						acceptTime:'2015-10-11 10:20:11',
						sendTime:'2015-10-11 10:20:11',
						enterQueueTime:'2015-10-11 10:20:11',
						startPrintTime:'2015-10-11 10:20:11',
						execSendTime:'2015-10-11 10:20:11',
						execAcceptTime:'2015-10-11 10:20:11',
						execEnterQueueTime:'2015-10-11 10:20:11',
						execStartPrintTime:'2015-10-11 10:20:11',
						execPrintResultTime:'2015-10-11 10:20:11'
					},
					{
						id:1,
						orderType: 0,
						bulkId: 1,
						bulkIndex:1,
						sendTime:1,
						acceptTime:1,
						sendTime:1,
						enterQueueTime:1,
						startPrintTime:1,
						execAcceptTime:1,
						execEnterQueueTime:1,
						execSendTime:'2015-10-11 10:20:11',
						execStartPrintTime:1,
						execPrintResultTime:1
					}*/
				]
			}
		},
		methods:{
			searhRequest:function(){
				var that  = this;
				axios.get('http://47.106.74.67:8080/order/'+this.userId+'/'+this.searchId)
					 .then(function(res){
					 	if(res.status===200){
					 		that.resultList = res.data.data;
					 	}else{
					 		alert('无结果');
					 	}
					 }).catch(function(res){
					 	console.log(res);
					 })
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
