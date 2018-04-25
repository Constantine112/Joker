<template>
	<li>
        <!-- <p>
            <router-link :to="{ path: 'printerindex', query: { printerId: printer.id }}" >
            	{{printer.id}}号主控板(trust:10%)
              <br>打印机数量：2
            </router-link>
        </p>
    	<span></span>
        <p class="printer_status" :class="statusClass">
            {{statusText}}
        </p> -->
		<img src="../../../assets/images/icon.png" alt="icon">
    	<p class="control_board_number">主控板{{ printer.id }}号</p>
    	<p class="board_status">主板状态&ensp;&ensp;&ensp;&ensp;3</p>
    	<p class="printer_amount">打印机数量&ensp;&ensp;3</p>
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
		}
	}
</script>
<style scoped>
	/* .sidebar li p {
	    margin: 0;
	    padding: 15px;
	    border-radius: 0 0 1px 1px;
	} */

	.sidebar li p {
	    margin: 4px 0;

	    border-radius: 0 0 1px 1px;
	    font-size: 15px;
	}

	.sidebar span{
	    margin-bottom: 15px;
	    display: block;
	    width: 50px;
	    margin: 0 auto 15px;
	    height: 54px;
	    
	}

	.sidebar li {
	    margin-bottom: 15px;
	    padding:8px 15px;
	    width: 8em;
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
	.control_board_number {
		/*margin-bottom: 5px;*/
		border-bottom: 1px solid rgb(200, 200, 200);
		padding-bottom: 10px;
	}
</style>
