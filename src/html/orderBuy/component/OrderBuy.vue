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
		<div class="wrapper" id="send_main">
		    <div class="subwrapper" id="model_all" style="text-align:left;">
		        <p class="page_title"><img src="../../../assets/images/orders.png"><span>下单</span></p>
		        <button class="button" type="button" onclick="window.open('http://localhost:8080/html/orderIndex.html#/')">返回订单主页</button>

		        <ul class="menu">
		            <li class="menu_head">
		                <p class="dish_name">菜名</p>
		                <p class="dish_price">价格</p>
		                <p class="count">数量</p>
		            </li>
		            <li v-for="dish,$index in dishes">
		                <p class="dish_name">{{dish.name}} </p>
		                <p class="dish_price dollar">{{dish.price}}</p>
		                <p class="dish_status" v-if="dish.count === 0">
		                    <span class="add_dish" v-on:click='changeDishStatus($index)'>+</span>
		                </p>
		                <p class="dish_status" v-else>
		                    <span class="change_dish nml" v-on:click='reduceDishCount($index)'>-</span>
		                    <span class="dish_count">{{dish.count}} </span>
		                    <span class="change_dish" v-on:click='addDishCount($index)'>+</span>
		                </p>
		            </li>
		        </ul>
		        <div id="shoppong_cart">
		            <div id="sc_area">
		                <div class="sc_head">
		                    <h2>购物车</h2>
		                    <!-- <span>></span> -->
		                </div>
		                <ul>

		                    <li v-for="dish,$index  in dishes" >
		                        <p class="dish_name">{{dish.name}} <span class="dollar">{{dish.price}}</span></p>
		                        <p class="dish_status">
		                            <span class="change_dish nml" v-on:click='reduceDishCount($index)' v-if="false">-</span>
		                            <span class="dish_count coooo">{{dish.count}} 份</span>
		                            <span class="change_dish" v-on:click='addDishCount($index)' v-if="false">+</span>
		                        </p>
		                    </li>
		                </ul>
						<p class="sum">
							<span>共<span id="dish_cou">{{counter}}</span>份</span>
							<!-- 这里添加一个触发状态的东西，一旦数目发生改变，这里的单价发生改变 -->
							<span class="dollar " id="sum">{{ sum }}</span>
							<input type="text" placeholder="打印机ID..." style="width:70px; height:20px" v-bind="printerid">
							<button type="button" id="send_order" @cpck="sendOrder">确定</button>
						</p>
		            </div>
		            <div class="shooping_button">
		                <button id="toggle_card" type="button" @click="toggle"></button>
		                <div id="counter_num" v-text="counter"></div>
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
		name: 'orderBuy',
		data(){
			return {
				dishes: [
					{
						name: '腐竹肉片',
						price: 10,
						count: 0
					},{
						name: '土豆排骨',
						price: 9,
						count: 0
					},{
						name: '牛肉盖饭',
						price: 15,
						count: 0
					},{
						name: '赤焰三文鱼盖饭',
						price: 29,
						count: 0
					},{
						name: '柳州螺蛳粉',
						price: 10,
						count: 0
					}
				],
				userId:1,
				printerid:0,
        counter: 0,
			}
		},
		computed:{
			sum: function(){
				var len = this.dishes.length,
					dishes = this.dishes,
					sum = 0;
					this.counter = 0;
				// 计算总值+计算数量 v
				for(var i = 0; i < len; i++){
					sum += dishes[i].price * dishes[i].count;
					this.counter += dishes[i].count;
				}
				return sum;
				//document.getElementById('dish_cou').innerHTML = counter;
			},
			counter: function(){
				var len = this.dishes.length,
					dishes = this.dishes,
					counter = 0;
				// 计算总值+计算数量 v
				for(var i = 0; i < len; i++){
					counter += dishes[i].count;
				}
				return counter;
			}
		},
		methods: {
			changeDishStatus: function(index){
				console.log(this.dishes[index].count)
				return ++this.dishes[index].count;
			},
			reduceDishCount: function(index){
				if(this.dishes[index].count <= 0){
					return 0;
				}else
				return --this.dishes[index].count;
			},
			addDishCount: function(index){
				return ++this.dishes[index].count;
			},
			toggle:function(){
				// var ele = document.getElementById('sc_area');
				// if(ele.className.indexOf('show') === -1){
				// 	ele.className += ' show';
				// }else{
				// 	ele.className = ele.className.replace(' show', '');
				// }
			},
			sendOrder:function(){
				var temp = new Date();
				var str = ""+ temp.getFullYear() + '-'
						+ (temp.getMonth() + 1) + '-'
						+ temp.getDate() + ' '
						+ temp.getHours() + ':'
						+ temp.getMinutes() + ':'
						+ temp.getSeconds();

				var dishes = this.dishes;
				var data = {
					"company"       : '嘻唰唰火锅店',
					"orderTime"     : str,
					"expectTime"    : "" + (temp.getHours()+1) + temp.getMinutes(),
					"items"			: [ ],
					"orderRemark"   : '',
					"orderMealFee"  : 0,
					"orderDisFee"   : 0,
					"orderPreAmount": 0,
					"orderPayStatus": '已付款',
					"userName"      : '广州唯一凉朝伟',
					"userAddress"   : '爱心大道',
					"userTelephone" : '15521190833'
				}
				for(var i = 0,len = dishes.length; i < len; i++){
					if(dishes[i].count > 0){
						data.items.push(dishes[i]);
					}
				}
				if(data.items.length === 0){
					alert('禁止空订单');
					return ;
				}
				var hh = JSON.stringify(data);
				console.log(data);http://10.21.48.11:8888/printer/sendBulk/1/0/20/6/2
				axios.get("http://47.106.74.67:8080/printer/choicePrinter/"+ '2/'  + data.items.length + '/1/2').then(function(res){
					alert('下单成功')
				}).catch(function(res){
					alert('下单失败')
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
</style>
