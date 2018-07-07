<template>
  <div class="register-container">
    <div class="register-all">
      <h2 class="log-h2">基于智能打印机的并行打印集群应用</h2>
    	<div id="register">
    		<!-- <h2>注册</h2> -->
    		<!-- <label>店主名字</label> -->
    		<input type="text" name="userName" id="userName" required v-model="userName" placeholder="店主名字">
    		<!-- <label>账户</label> -->
    		<input type="text" name="userAccount" id="userAccount" required v-model="userAccount" placeholder="账户">
    		<!-- <label>密码</label> -->
    		<input type="password" name="userPassword" id="userPassword" required v-model="userPassword" placeholder="密码">
    		<!-- <label>商店名</label> -->
    		<input type="text" name="userStore" id="userStore" required v-model="userStore" placeholder="商店名">
    		<!-- <label>商家地址</label> -->
    		<input type="text" name="userAddress" id="userAddress" required v-model="userAddress" placeholder="商家地址">
    		<!-- <label>商家电话</label> -->
    		<input type="text" name="userPhone" id="userPhone" required v-model="userPhone" placeholder="商家电话">
    		<div id="printer">
    			<!-- <label>打印机编号</label> -->
    			<input type="text" name="id" id="id" required v-model="id" placeholder="打印机编号">
    		</div>
    		<router-link to="login">
    					<button type="button" class="register-button">返回</button>
    		</router-link>
    		<button type="submit" @click="registerQuest" class="register-button submit">注册</button>
    	</div>
    </div>
  </div>
</template>
<script>
	// import axios from 'axios';
	import {mapState, mapActions} from 'vuex';
	import axios from 'axios'
	export default {
		name: 'register',
		data(){
			return {
				userName: '',
				userAccount:'',
				userPassword: '',
				userStore: '',
				userAddress: '',
				userPhone: '',
				id: ''
			}
		},
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('visual' ,{
				// 这里用到的是 es6 的函数写法
                'visual': state => {

                    return state
				},
			}),
      		// 'visual': this.$store
		},
		methods:{
			...mapActions('visual', [
				'register',
			]),
			registerQuest(){
				let that = this;
			axios.post('http://47.106.74.67:8080/register',{
          'data': JSON.stringify({
            userName:that.userName,
            userAccount: that.userAccount,
            userPassword:that.userPassword,
            userPhone:that.userPhone,
            userStore:that.userStore,
            id:that.id,
            userAddress:that.userAddress
          })})
          .then(function(res){
            if(res.status===200){
              that.$router.push('/login');
            }
          })
          .catch(function(res){
            console.log(res);
            alert("注册失败!");
		  		})
				// this.register({
				// 	userName: that.userName,
				// 	userAccount:that.userAccount,
				// 	userPassword: that.userPassword,
				// 	userStore: that.userStore,
				// 	userAddress: that.userAddress,
				// 	userPhone: that.userPhone,
				// 	id: that.id
				// }).then((data)=>{
				// 		// console.log(data);
				// 	console.log(1)
				// }).catch(err => {
				// 	console.log(err)
				// })
			}
		},
		created:function(){
			document.getElementsByTagName('body')[0].className = '';
		}
	}
</script>
<style scoped src="../../../assets/css/login_register.css"></style>
