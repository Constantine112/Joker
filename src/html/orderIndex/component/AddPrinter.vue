<template>
	<div>
		<h2>新打印机</h2>
		<input type="text" placeholder="新增打印机编号" v-bind:value="value" @input="update($event.target.value)"><br/>
		<button type="submit" @click="addprinter">确定</button>
		<slot></slot>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'addprinter',
		props:['value','userid'],
		data(){
			return {
			}
		},
		methods:{
			addprinter:function(){
				var that  = this;

				axios.post('http://10.21.48.11:8686/printer/add/'+this.userid+'/'+this.value)
					 .then(function(res){
					 	if(res.status==200){
							that.$emit("add");
					 	}
					 }).catch(function(res){
					 	alert('增加打印机失败!');
					 })
			},
			quit:function(){
				this.display  = 'none';
			},
			update:function(val){
				this.$emit('input', Number(val));
			}
		}
	}
</script>
<style scoped>
	div{
		width: 300px;
		height: 160px;
		position: fixed;
		top: 40%;
		left: 39%;
		text-align: center;
		background: #eeeeee;
	}
	input{
		height: 25px;
		width: 200px;
	}
	button{
		height: 30px;
		width: 75px;
		margin-top: 7px;
	}
</style>