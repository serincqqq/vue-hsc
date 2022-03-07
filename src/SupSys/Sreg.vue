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
				<span>机构名称:</span>
				<input v-model="organName" type="text" placeholder="公司名称" />
			</div>

			<div class="item">
				<i>*</i>
				<span>办公电话:</span>
				<input v-model="phoneNumber" style="margin-left: 10px;" type="text" placeholder="手机号" />
			</div>

			<div class="item">
				<i>*</i>
				<span>验证码:</span>
				<input style="margin-left:10px;width: 180px;padding: 3px;margin-right: 10px;" type="text"
					placeholder="验证码" />
				<el-button class="elbtn" @click="post" :disabled="postshow" type="info" plain>{{before}}</el-button>
			</div>

			<div class="item">
				<i>*</i>
				<span>密码:</span>
				<input v-model="passWord" style="margin-left: 20px;" type="password" placeholder="请输入密码" />
			</div>

			<div class="item1">
				<button @click="next()">下一步</button>
			</div>
		</div>

		<div v-if="show==2" class="wrapper1">
			<div class="item">
				<i>*</i>
				<span>注册资本:</span>
				<input v-model="registeredCapital" type="text" placeholder="注册资本" />
			</div>

			<div class="item">
				<i>*</i>
				<span>成立日期:</span>
				<input v-model="establishmentDate" type="text" placeholder="成立日期" />
			</div>

			<div class="item">
				<i>*</i>
				<span>经营范围:</span>
				<input v-model="BusinessScope" type="text" placeholder="经营范围" />
			</div>
			<el-upload :on-preview="handlePreview" class="upload-demo" drag
				action="https://jsonplaceholder.typicode.com/posts/" multiple>

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
					<el-descriptions-item label="机构名称">{{organName}}</el-descriptions-item>
					<el-descriptions-item label="办公电话">{{phoneNumber}}</el-descriptions-item>
					<el-descriptions-item label="注册资本">{{registeredCapital}}</el-descriptions-item>
					<el-descriptions-item label="成立日期">{{establishmentDate}}</el-descriptions-item>
					<el-descriptions-item label="经营范围">{{BusinessScope}}</el-descriptions-item>
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
		name: 'Sreg',
		components: {
			Footer,
			Header
		},
		data() {
			return {
				active: 0,
				postshow: false,
				show: 1,
				before: '点击发送验证码',
				after: '秒后重新发送',
				before1:'点击发送验证码',
				nuLL:60,
				vr: false,
				organName: '',
				BusinessScope: '',
				phoneNumber: '',
				registeredCapital: '',
				establishmentDate: '',
				passWord: '',
				st: "false" //false为不保存登录
			}
		},
		methods: {
			handlePreview(file) {
				console.log(file);
			},
			post(){
				var timer=setInterval(()=>{
					this.postshow=true
					this.nuLL-=1
					this.before=this.nuLL+this.after
					if(this.nuLL<1){
						clearInterval(timer)
						this.postshow=false
						this.nuLL=60
						this.before=this.before1
					}
				},1000)
				
				
			},
			next() {
				//this.first = false
				if (this.show < 3) this.show++

				if (this.active++ > 2) this.active = 0;
				//if(this.active==1) console.log('xxx')
			},
			reg() {
				alert("注册申请已经提交，注册结果将会以短信方式告知")
				if (this.active++ > 2) this.active = 0;
				const self = this;
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
					alert('将在三秒后跳转登录界面')
					setTimeout(() => {
						this.$router.push('/login')
					}, 3000)
				})
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
		height: 30px;
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
	.item1
	{
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
