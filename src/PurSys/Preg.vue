<template>
	<div>
		<Header></Header>
		<!-- 封装出去 -->
		<el-steps style="width: 500px;margin:0 auto" :active="active" finish-status="success">
			<el-step title="注册账号"></el-step>
			<el-step title="完善资料"></el-step>
			<el-step title="提交审批"></el-step>
		</el-steps>

		<div v-if="show==1" class="wrapper1">
			<div class="item">
				<i>*</i>
				<span>单位名称:</span>
				<input v-model="regData.organName" type="text" placeholder="单位名称" />
			</div>
			<div class="item">
				<i>*</i>
				<span>办公电话:</span>
				<input v-model="regData.OfficeTelephone" type="text" placeholder="办公电话" />
			</div>
			<div class="item">
				<i>*</i>
				<span>验证码:</span>
				<input style="margin-left:10px;width: 180px;padding: 3px;margin-right: 10px;" type="text"
					placeholder="验证码" />
				<el-button class="elbtn" @click="post" :disabled="postshow" type="info" plain>{{before}}</el-button>
			</div>
			<div class="item1">
				<button @click="next()">下一步</button>
			</div>
		</div>

		<div v-if="show==2" class="wrapper1">
			<div class="item">
				<i>*</i>
				<span>负责人:</span>
				<input v-model="regData.director" type="text" placeholder="负责人" />
			</div>
			<div class="item">
				<i>*</i>
				<span>联系方式:</span>
				<input v-model="regData.directorNumber" type="text" placeholder="负责人手机号" />
			</div>
			<div class="item">
				<i>*</i>
				<span>密码:</span>
				<input v-model="regData.passWord" style="margin-left: 20px;" type="password" placeholder="请输入密码" />
			</div>
			<el-upload style="margin-top: 20px;" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
			<div class="item1">
				<button @click="next()">下一步</button>
			</div>
		</div>

		<div class="final" v-if="show==3">
			<div class="table">
				<el-descriptions :column="1" title="注册信息">
					<el-descriptions-item label="单位名称">{{regData.organName}}</el-descriptions-item>
					<el-descriptions-item label="办公电话">{{regData.OfficeTelephone}}</el-descriptions-item>
					<el-descriptions-item label="负责人">{{regData.director}}</el-descriptions-item>
					<el-descriptions-item label="负责人手机号">{{regData.directorNumber}}</el-descriptions-item>
					<!-- 附件和密码在此处不显示 -->

				</el-descriptions>
			</div>
			<button class="btn" @click="reg()">提交</button>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import axios from 'axios'
	import Footer from '../components/common/Footer.vue'
	import Header from '../components/common/IndexItem/Header.vue'
	export default {
		name: 'Preg',
		components: {
			Footer,
			Header
		},
		data() {
			return {
				regData: {
					organName: '',
					OfficeTelephone: '',
					director: '',
					directorNumber: '',
					passWord: '',
				},
				active: 0,
				postshow: false,
				show: 1,
				before: '点击发送验证码',
				after: '秒后重新发送',
				before1: '点击发送验证码',
				nuLL: 60,
				vr: false,
			}
		},
		methods: {
			handlePreview(file) {
				console.log(file);
			},
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
			next() {
				let reg = /^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{1,12}$/;
				if (reg.test(this.organName)) {
					console.log("格式正确");
					if (this.show < 3) this.show++
					if (this.active++ > 2) this.active = 0;
				} else {
					alert("用户名格式错误，限12个字符，支持中英文、数字、减号或下划线")
				}
			},
			reg() {
				if (this.active++ > 2) this.active = 0;
				
				const empty = (obj) => {
					let isEmpty = true
					for (var key in obj) {
						if (!obj[key]) {
							isEmpty = false
						}
					}
					return isEmpty
				}

				const self = this;
				if (empty(this.regData)){
					axios({
						method: "post",
						url: "https://www.fastmock.site/mock/6607a5b7a1e24e2a775b59844e6d0574/reg/api/reg",
						data: {
							organName: this.organName,
							password: this.passWord,
							BusinessScope: this.BusinessScope,
							phoneNumber: this.phoneNumber,
							registeredCapital: this.registeredCapital,
							establishmentDate: this.establishmentDate,
						}
					}).then((res) => {
						alert("注册申请已经提交，注册结果将会以短信方式告知")
						alert('将在一秒后跳转登录界面')
						setTimeout(() => {
							this.$router.push('/login')
						}, 1000)
					})
				}else{
					alert("必填内容不能为空")
				}
					
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.btn {
		margin: 20px auto;
		width: 300px;
		height: 40px;
		font-size: 16px;
		letter-spacing: 20px;
		border-radius: 5px;
		background-color: #ff8b25;
		color: white;
		border: none;
		cursor: pointer;
	}

	.elbtn {
		height: 35px;
		padding: 6px;

	}

	.upload-demo {
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.wrapper1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 30px;
	}

	.item,
	.item1 {
		line-height: 40px;
		margin-top: 20px;
	}

	.item input {
		padding: 3px;
		border: 1px solid gainsboro;
		line-height: 30px;
		width: 300px;
		border-radius: 5px;
		outline: none;
	}

	.item span {
		margin-right: 10px;
	}

	.item input:focus {
		border: 1px solid #ef342a;
		box-shadow: 0px 0px 5px orange;
	}

	.item1 button {
		width: 300px;
		height: 40px;
		font-size: 16px;
		letter-spacing: 20px;
		margin-left: 20px;
		border-radius: 5px;
		background-color: #ff8b25;
		color: white;
		border: none;
		cursor: pointer;
	}

	.item i {
		color: #ff7f50;
		margin-right: 3px;
	}

	.table {
		padding: 20px;
		height: 200px;
		width: 400px;
		/* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
		margin: 30px auto;
		text-align: center;
	}

	.final {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	#header {
		padding-left: 50px;
		margin-bottom: 20px;
		height: 50px;
		line-height: 50px;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.ulLeft,
	.ulRight {
		display: inline-block;
		list-style: none;
	}

	.ulLeft li {
		padding-left: 15px;
		color: #f0932b;
		float: left;
	}

	.ulLeft li:hover,
	.ulRight li:hover {
		cursor: pointer;
		color: coral;
	}

	.ulRight {
		float: right;
		padding-right: 50px;
	}

	.ulRight li {
		padding-left: 15px;
		color: gray;
		float: right;
	}

	.ulLeft li:hover {
		color: #ffbe76;
		cursor: pointer;
	}

	#right {
		width: 220px;

		background: rgb(231, 105, 2);
		margin: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#right button {
		height: 30px;
		width: 120px;
		margin-top: 10px;
		border-radius: 5px;
		border: none;
		/* 	padding: 20px; */
	}


	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>
