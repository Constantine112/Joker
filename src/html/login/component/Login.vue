<template>
  <div class="divlogin">
    <div class="log-contain">
      <h2 class="log-h2">基于智能打印机的并行打印集群应用</h2>
    	<div id="login">
        <input type="text" id="userAccount" name="userAccount" required v-model="userAccount" style="width: 60%; margin: 10px auto;" placeholder="请输入你的用户名" class='change'/>
        <input type="password" id="userPassword" name="userPassword" required v-model="userPassword" style="width: 60%; margin: 10px auto;" placeholder="请输入你的密码" />
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
import axios from 'axios'
	export default {
		name: 'login',
		
		data(){
			return {
				userAccount:'',
				userPassword:'',
				loginSuccess: false,
			}
		},
		computed: {

			// 从这里引入 vueX 的 state 的变量到组件中用
			...mapState('user' ,{
				// 这里用到的是 es6 的函数写法
                'visual': state => {

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
				
				if(this.userPassword.length===0||this.userAccount.length===0){
					return false;
				}

			var that = this;
			var data = {
						userAccount: that.userAccount,
						userPassword:that.userPassword
			}
			// axios.post('http://47.106.74.67:8080/login', JSON.stringify(data))
			// .then(function (response) {
			// 	          	if (res.data.data.success) {
			// 				window.location = '../../orderIndex/orderIndex.html'
			// 			} else {
			// 				alert("登录失败！")
			// 			}
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });
			axios({
        method: 'POST',
        url: 'http://47.106.74.67:8080/login',
        data: JSON.stringify(data),
				headers: {'Content-Type': 'application/json'},
				// withCredentials: true
      }).then(function (res) {
        
          	if (res.data.data.success) {
							window.location = '../../html/orderIndex.html'
						} else {
							alert("登录失败！")
						}
      }).catch(function (err) {
        alert("登录失败！")
      })

			}
		},
		created:function(){
			document.getElementsByTagName('body')[0].className = '';
		}

	}
</script>
<style scoped src="../../../assets/css/login_register.css"></style>
<style>
</style>