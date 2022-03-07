<template>
	<div class="main">
		<div id="login">
			<div class="tabs">
				<!-- 点击时间，点击哪个就取消另一个的样式 -->
				<div :class="t1?'':'border'" class="tab">
					<div @click="t1=false" class="tab-item ">
						账号登录
					</div>
				</div>

				<div :class="t1?'border':''" class="tab">
					<div @click="t1=true" class="tab-item">
						邀请码登录
					</div>
				</div>
			</div>

			<div v-if="!t1" class="wrapper1">
				<div class="item">
					<input v-model="userName" type="text" placeholder="请输入用户名或手机号" />
				</div>
				<div class="item">
					<input v-model="passWord" type="password" placeholder="请输入密码" />
				</div>
				<div class="check">
					<input type="text" id="code" v-model="code" class="code" placeholder="请输入您的验证码" />
					<div class="login-code" @click="refreshCode">
						<Check :identifyCode="identifyCode"></Check>
					</div>
				</div>

				<!-- <div class="item1">
					<label><input type="checkbox" value="0">记住密码</label>
					<a style="float: right;">忘记密码</a>
				</div> -->
				<div class="item1">
					<button @click="login">登录</button>
				</div>
				<div class="item1">
					<a @click="trans()">立即注册</a>
				</div>
			</div>

			<div v-if="t1" class="wrapper1">
				<div class="item">
					<input v-model="phoneNumber" type="text" placeholder="请输入手机号" />
				</div>
				<div class="item">
					<input v-model="InvitationCode" type="text" placeholder="请输入邀请码" />
				</div>
			
				<div class="check">
					<input style="margin-right: 10px;" type="text" placeholder="请输入您的验证码" />
					<el-button class="elbtn" @click="post" :disabled="postshow"  type="info" plain>{{before}}</el-button>
				</div>
				
				
			<!-- 	<div class="item1">
					<label><input type="checkbox" value="0">记住密码</label>
					<a style="float: right;">忘记密码</a>
				</div> -->
				<div class="item1">
					<button @click="login">登录</button>
				</div>
				<div class="item1">
					<a @click="trans()">立即注册</a>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import axios from 'axios'
	import Check from '../components/common/IndexItem/Check.vue'
	export default {
		name: 'PLogin',
		components: {
			Check
		},
		data() {
			return {
				userName: '',
				passWord: '',
				phoneNumber:'',
				InvitationCode:'',
				identifyCodes: "1234567890",
				identifyCode: "",
				code: "", //text框输入的验证码
				t1: false,
				postshow: false,
				nuLL: 60,
				before: '点击发送验证码',
				after: '秒后重新发送',
				before1: '点击发送验证码',
			}
		},
		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
		},
		methods: {
			post() {
				var timer = setInterval(() => {
					this.postshow = true
					this.nuLL -= 1
					this.before = this.nuLL + this.after
					if (this.nuLL < 1) {
						clearInterval(timer)
						this.postshow = false
						this.nuLL = 60
						this.before = this.before1
					}
				}, 1000)
			},
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},

			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
				console.log(this.identifyCode);
			},
			trans() {
				this.$router.replace('/register');
			},
			login() {
				this.$router.push('/home/dashboard')
				/* const self = this;
				axios({
					method: "post",
					url: "http://localhost:8124/supermall/supplier/Supplierlogin",
					data: {
						password: this.passWord,
						phoneNumber: this.userName
					}
				}).then((res) => {
					console.log(res.data);
					if (res.data.success == true) {
						//this.$router.replace('/supplier');
						window.sessionStorage.setItem('logged', 'true')
						this.$router.push('/home/dashboard')
						console.log('登录成功')
					}
				}) */
			}
		}
	}
</script>

<style scoped>
/* 	.elbtn {
		font-size: 16px;
	} */
	.check {
		display: flex;
	}

	.login-code {
		cursor: pointer;
	}

	.main {
		position: relative;
		height: 100vh;
		width: 100vw;
		text-align: center;
		background-color: #3867d6;
	}

	.tabs {
		display: flex;
		width: 100%;
		justify-content: space-around;
	}

	.tab {
		height: 30px;
		line-height: 30px;
		/* background-color: #fff; */
		border-bottom: 1px rgba(7, 17, 27, 0.1);
	}

	.tab-item {
		margin-left: 10px;
		font-size: 14px;
		color: orange;
	}

	#login {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin: 0 auto;
		height: 360px;
		width: 360px;
		border-radius: 5px;
		background-color: white;
		padding: 20px;
	}

	.border {
		border-bottom: solid 2px orange;
		padding-right: 8px;
	}

	.wrapper1 {
		text-align: center;
		justify-items: start;
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-row-gap: 20px;
		padding: 20px;
	}

	.item,
	.item1,
	.check {
		line-height: 30px;
	}

	.check input {
		height: 40px;
		border: 1px solid gainsboro;
		line-height: 30px;
		width: 150px;
		border-radius: 5px;
		outline: none;
		padding-left: 8px;
	}

	.item input {
		height: 40px;
		border: 1px solid gainsboro;
		line-height: 30px;
		width: 280px;
		border-radius: 5px;
		outline: none;
		padding-left: 8px;
	}

	.check input:focus,
	.item input:focus {
		border: 1px solid #ef342a;
		box-shadow: 0px 0px 5px orange;
	}

	.item1 {
		width: 300px;
		text-align: center;
	}

	.item1 label {
		float: left;
		font-size: 14px;
	}

	.item1 a {

		font-size: 14px;
		color: orange
	}

	.item1 button {
		width: 300px;
		height: 40px;
		border-radius: 5px;
		background-color: #ff8b25;
		color: white;
		border: none;
	}
</style>
