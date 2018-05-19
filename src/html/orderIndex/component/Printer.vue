<template>
	<li>
		<span></span>
        <p>
            <div @click=toPrinter(printer.printerId)>
            	{{printer.printerId}}号主控板<br><!-- ({{printer.trust}}) -->
				主板状态：{{printer.printerStatus}}
              <br>打印机数量：{{printer.unitsSum}}
            </div>
        </p>
        <!-- <p class="printer_status" :class="statusClass">
            {{statusText}}
        </p> -->
	</li>
</template>
<script>
	export default {
		name:'printer',
		props:['printer'],
		data(){
			return {
				 ptst: [
				     '切刀错误',
				     '机盒打开',
				     '纸将用尽',
				     '正在进纸',
				     '机芯高温',
				     '正常状态',
				     '待定',
				     '待定',
				     '待定',
				     '待定',
				     '待定',
				     '普通缓冲区满',
				     '紧急缓冲区满',
				     '健康状态',
				     '亚健康状态',
				     '异常状态'
				],

			}
		},
		computed:{
			statusText: function(){
				var that = this;
				return this.ptst.filter(function(n,index){
					if((index+1) == parseInt(that.printer.printerStatus)) {
						return n;
					}
				})[0]
			},
			statusClass: function(){
				var format = 'printer_healthy';
				switch (parseInt(this.printer.printerStatus)) {
				    case 6:
				    case 7:
				    case 8:
				    case 9:
				    case 10:
				    case 11:
				    case 14:
				        format = ' printer_healthy';
				        break;
				    case 1:
				    case 2:
				    case 5:
				        format = ' printer_abnormal';
				        break;
				    case 3:
				    case 4:
				    case 12:
				    case 13:
				    case 15:
				        format = ' printer_subhealthy';
				        break;
				    default:
				        console.info('other status');
				        break;
				}
				return format;
			}
		},
		methods: {
			toPrinter: function (e) {
				window.open('../../html/printerIndex.html?printerId=' + e);
			}
		}
	}
</script>
<style scoped>
	.sidebar li p {
	    margin: 0;
	    padding: 8px 0 15px 15px;
		border-radius: 0 0 1px 1px;
		    text-decoration:#fff;
	}
	.sidebar li p a{
			text-decoration:none;
			color: #000;
			text-align: left;
	}
	.sidebar span{
	    /* margin-bottom: 4px; */
	    display: block;
	    width: 50px;
	    margin: 10px auto 4px auto;
	    height: 54px;
		background-image: url(../style/icon.png);
		background-repeat: no-repeat;
		background-position: center;
	}

	.sidebar li {
	    margin-bottom: 15px;
	    width: 10em;
	    border-radius: 3px;
	    border: 2px solid #e5e5e5;
	    background: white;
	    text-align: center;
	}

	.sidebar .printer_status {
	    padding: 10px 0;
	}

	.printer_healthy {
	    background: #58e580;
	    color: white;
	}

	.printer_subhealthy {
	    background: #f1a451;
	    color: white;
	}

	.printer_abnormal {
	    background: #f33434;
	    color: white;
	}
</style>
