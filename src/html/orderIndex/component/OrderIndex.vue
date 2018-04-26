<template>
	<div id="container">
		<div id="nav" class="wrapper">
		    <div class="user">
		        <a href="#"></a>
		        <span class="user_name" v-text="userName"></span>
		    </div>
		</div>
		<div class="wrapper mh of">
		    <div class="subwrapper of">
		        <div class="sidebar">
		            <!-- 打印机列表（显示状态） -->
					<p v-if="printerList.length==0">当前没有打印机</p>
		            <ul class="sb_printer" v-for="printer in printerList" :key="printer">
						<printer :printer="printer"></printer>
		            </ul>
					<a href="#" id="add_printer" @click="isAddShow=true">
					</a>
		        </div>
            <div class="section system_parameter">
              <p class="index_title">系统状态提醒</p>
			  <div class="parameter_list">
				<ul>
					<li>当前吞吐量: <span v-text="tuntu"></span> bt/s</li>
					<li>主控板连接数量: 6</li>
					<li>打印失误率: 1%</li>
					<li>是否在打印：是</li>
					<li>当前打印数量： <span v-text="number"></span>份</li>
					<li>打印机连接总数量：12</li>
				</ul>
			  </div>
            </div>
		        <div class="section">
					<p class="index_title">打印状态</p>
		            <ul class="sb_order">
		                <li id="ab_od_typing" @click="showTyping" :class="{cur:isShow}">正在打印订单</li>
		                <li id="ab_od_typed" @click="showTyped" :class="{cur:!isShow}">打印完成订单</li>
		                <li id="ab_od_search">
		                	<a href="orderBuy.html">
		                		自助下单
		                	</a>
		                </li>
		                <li id="ab_od_search">
		                	<a href="batchSearch.html">
		                		批次查询
		                	</a>
		                </li>
		                <li id="ab_od_search">
		                	<a href="orderSearch.html">
		                		查询订单
		                	</a>
		                </li>

		            </ul>
		            <div class="typing_up">
		                <div class="typing_up_main">
		                    <div class="order head">
		                        <p class="order_number">订单编号</p>
		                        <p class="order_status">订单状态</p>
		                    </div>
		                    <div class="order" v-if="curList.length==0">
		                        <p class='ct'> 当前没有订单</p>
		                    </div>
		                    <div class="order_box" v-for="order in curList" :key="order">
			                    <div class="order">
	                                <p class="order_number">
	                    				{{order.id}}
	                                </p>
	                                <p class="order_status">
										{{showOrderText(order.orderStatus)}}
	                                </p>
			                    </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		   <add-printer v-model="newPrinterId" v-bind:userid="userId" @add="addPrinterDom" v-if="isAddShow">
		   	<button  @click="quit">取消</button>
		   </add-printer>
		</div>
		<!-- <div id="ware"></div> -->
	</div>
</template>
<script>
	import Printer from './Printer';
	import AddPrinter from './AddPrinter.vue'
	import axios from 'axios'

	export default {
		name: 'orderindex',
		components:{Printer,AddPrinter},
		data(){
			return {
				isShow:true,
				isAddShow:false,
				userName:'小明',
				userId:1,
				newPrinterId:'',
        tuntu: 300,
        number: 300,
        add: 1,
        time: false,
				printerList:[

				],
				typingList:[
					/*{id: 1, orderStatus: "10"},
					{id: 2, orderStatus: "10"},
					{id: 3, orderStatus: "10"},*/
				],
				typedList:[
					/*{id: 4, orderStatus: "4"},
					{id: 5, orderStatus: "5"},
					{id: 6, orderStatus: "6"},*/
				],
				curList:[],
			}
		},
    // beforeMount() {
    //      //设置定时器，每3秒刷新一次
    //      var that = this;
    //     setInterval( function() {
    //       that.tuntu = that.tuntu + that.add;
    //       that.add++;
    //       if(that.add == 6) {
    //         that.add = -that.add;
    //       }
    //     }, 500);
    // },
		methods:{
      inv: function () {
        var that = this;
        setInterval(()=>{
          that.tuntu = that.tuntu + that.add;
          that.add++;
          if(that.add == 6) {
            that.add = -5;
          }
          // console.log(1);
        }, 500);

      },
			showTyped:function(){
				var that = this;
				// axios.get('http://47.106.74.67:8080/order/typed/'+this.userId)
				// 	 .then(function(res){
				// 	 	that.curList = res.data.data;
				// 	 }).catch(function(res){
				// 	 	alert("获取正在打印订单失败!")
				// 	 });
        clearInterval(that.time);
        // that.time=setInterval(()=>{
        //   axios.get('http://47.106.74.67:8080/order/typed/'+this.userId)
        //    .then(function(res){
        //     that.curList = res.data.data;
        //    }).catch(function(res){
        //     alert("获取正在打印订单失败!")
        //    });
        //   axios.get('http://47.106.74.67:8080/order/typing/'+this.userId)
        //    .then(function(res){
        //     that.curList = res.data.data;
        //    }).catch(function(res){
        //     alert("获取打印完成订单失败!")
        //    });
        // }, 2000);
				this.isShow = false;

			},
			showTyping:function(){
				var that = this;
				// axios.get('http://47.106.74.67:8080/order/typing/'+this.userId)
				// 	 .then(function(res){
				// 	 	that.curList = res.data.data;
				// 	 }).catch(function(res){
				// 	 	alert("获取打印完成订单失败!")
				// 	 });
        clearInterval(that.time);
        // that.time=setInterval(()=>{
        //   axios.get('http://47.106.74.67:8080/order/typed/'+this.userId)
        //    .then(function(res){
        //     that.curList = res.data.data;
        //    }).catch(function(res){
        //     alert("获取正在打印订单失败!")
        //    });
        //   axios.get('http://47.106.74.67:8080/order/typing/'+this.userId)
        //    .then(function(res){
        //     that.curList = res.data.data;
        //    }).catch(function(res){
        //     alert("获取打印完成订单失败!")
        //    });
        // }, 2000);
				this.isShow = true;
        // this.inv();
			},
			showOrderText:function(o){
				var odst =  [
				     '打印成功',
				     '打印失败',
				     '进入打印队列',
				     '开始打印',
				     '数据错误',
				     '打印成功-之前的异常订单',
				     '异常单打印出错',
				     '异常单进入打印队列',
				     '异常单开始打印',
				     '异常单数据错误',
				     '订单准备发送到打印机',
				     '订单已发放到打印机'
				];
				return odst.filter(function(n,index){
					if((index) == parseInt(o)) {
						return n;
					}
				})[0];
			},
			showPrinters:function(){
				var that = this;
				// axios.get('http://47.106.74.67:8080/printer/'+this.userId)
				// 	 .then(function(res){
				// 	 	that.printerList = res.data.data;

    //        }
				// 	 }).catch(function(res){
				// 	 	alert("获取打印机列表失败!")
				// 	 });
           // {
           //  connected: false,
           //  cre: 5,
           //  id: 2,
           //  ordersNum: 0,
           //  price: 10,
           //  printErrorNum: 0,
           //  printSuccessNum: 0,
           //  printerStatus: '14',
           //  sendedOrdersNum: 0,
           //  speed: 2,
           //  successRate: 0,
           //  unsendedOrdersNum: 0,
           // }
           for (let i = 1; i <= 5; i++) {
              let data = {
                connected: false,
                cre: 5,
                id: i,
                ordersNum: 0,
                price: 10,
                printErrorNum: 0,
                printSuccessNum: 0,
                printerStatus: '14',
                sendedOrdersNum: 0,
                speed: 2,
                successRate: 0,
                unsendedOrdersNum: 0,
              }
              if ( i >= 4 ) {
                data.printerStatus= '15'
              }
              that.printerList.push(data);
           }

			},
			addPrinterDom:function(){
				var that =this;
				this.isAddShow = false;
				this.printerList.unshift({
						id: that.newPrinterId,
						printerStatus: 14
				})
			},
			quit:function(){
				this.isAddShow = false;
			}
		},
		created: function(){
			//获取正在打印订单
			this.showTyping();
			//获取打印机列表
			this.showPrinters();
			//设置背景色
			document.getElementsByTagName('body')[0].className = 'orderbox';
      this.inv();
		}
	}
</script>
<style scoped src='@/assets/css/order.css'></style>
