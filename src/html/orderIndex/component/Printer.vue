<template>
	<li>
        <p>
            <router-link :to="{ path: 'printerindex', query: { printerId: printer.id }}" >
            	{{printer.id}}号主控板(trust:10%)<!-- ({{printer.trust}}) -->
              <br>打印机数量：2
            </router-link>
        </p>
    	<span></span>
        <p class="printer_status" :class="statusClass">
            {{statusText}}
        </p>
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
	.sidebar li p {
	    margin: 0;
	    padding: 15px;
	    border-radius: 0 0 1px 1px;
	}

	.sidebar span{
	    margin-bottom: 15px;
	    display: block;
	    width: 50px;
	    margin: 0 auto 15px;
	    height: 54px;
	    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA2CAMAAACycDqVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0N2U0OGE4ZS0zY2M4LTRkNGItOWM1OS00OWM3Y2YxZWJmYWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUNCMjAxN0E1MjExMTFFNkIwMTBGODM3RjRFOEEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUNCMjAxNzk1MjExMTFFNkIwMTBGODM3RjRFOEEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDg2MTJhNjAtNDcyMS1lNjQyLWIwMGItZDZhMTUwYzk1NWM1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ3ZTQ4YThlLTNjYzgtNGQ0Yi05YzU5LTQ5YzdjZjFlYmZhYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PodVyJsAAACWUExURVhk/////8fL/+nq/+Lk/5CY/7C2/6et/3mD/9LW/7zB//T1/97g/1tn/8nN/4aP/2Fs/6yy/8bK/660/2t2/73C//X2/8/T/7S5/9jb/3eB/6ux/2x2/9PW/62z/2Jt/87R//Lz/8vP//P0/2dy/32H//f4/8DF/5GZ/9TX/3qE//X1/32G/8LG/7i9/2Ju/7e8/3J8/1l2LnUAAADjSURBVHja7NZpC4JAEIDhWbXDyvtO7b7v/v+fC/HLLu6YExIGvd8EH2QFZwTG591B0twTbgL+4ghIOUr6GJnRyeBPWiNnFWmNkmYBU02FkKkyUAwgZSiQATEfvtn0RBUPxq408Sxe94VErIIcSMReMrbbEE+/WmzhHzWrV5MlJVrdp6i1R/ZDpBtKaobSb5JAFwoaEE3ydt8QdyLkVklGPYvPDdhmxHC5MR6WJBbndlySkBvjlZUkP37tFovEbRR1Zr2mI6G0Afng+MlYKOn034WDkhwjOv534djS9SM8hL0EGACqCw/K/qoIbQAAAABJRU5ErkJggg==);
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
