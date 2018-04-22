<template>
  <div class="divlogin">
    <div class="log-contain">
      <h2 class="log-h2">基于智能打印机的并行打印集群应用</h2>
    	<div id="login">
        <input type="text" id="userAccount" name="userAccount" required v-model="userAccount" placeholder="请输入你的用户名">
        <input type="password" id="userPassword" name="userPassword" required v-model="userPassword" placeholder="请输入你的密码">
    		<router-link to="/register" class="register-contain">
    			<div class="register12">注册新用户</div>
    		</router-link>
        <button type="submit" @click="loginQuest">登录</button>
    	</div>
    </div>
  </div>
</template>
<script>
	
import {mapState, mapActions} from 'vuex';

	export default {
		name: 'login',
		
		data(){
			return {
				userAccount:'',
				userPassword:''
			}
		},
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('user' ,{
				// 这里用到的是 es6 的函数写法
                'visual': state => {
                    console.log("ggg" ,state);
                    return state
				},
			}),
      // 'visual': this.$store
		},
		methods:{
			...mapActions('user', [
        'login',
      ]),
			loginQuest(){
				let that = this;
				if(this.userPassword.length===0||this.userAccount.length===0){
					return false;
				}
				this.login({
						userAccount: that.userAccount,
						userPassword:that.userPassword
					}).then((data)=>{
						// console.log(data);
						console.log(1)
					}).catch(err => {
						console.log(err)
					})
        // that.$router.push('/orderindex');
				// axios.get('http://47.106.74.67:8080/login',{
				// 	'data': JSON.stringify({
				// 		userAccount: that.userAccount,
				// 		userPassword:that.userPassword
				// 	})})
				// 	.then(function(res){
				// 		/*if(res.status===200){*/
				// 			that.$router.push('/orderindex');
				// 		/*}*/
				// 	})
				// 	.catch(function(res){
				// 		alert("登录失败！")
				// 	})
        // axios.post('/login',{
        //   'data': JSON.stringify({
        //     userAccount: that.userAccount,
        //     userPassword:that.userPassword
        //   })})
        //   .then(function(res){
        //     /*if(res.status===200){*/
        //       that.$router.push('/orderindex');
        //     /*}*/
        //   })
        //   .catch(function(res){
        //     alert("登录失败！")
        //   })
			}
		},
		created:function(){
			document.getElementsByTagName('body')[0].className = '';
		}

	}
</script>
<style scoped src="../../../assets/css/login_register.css"></style>
