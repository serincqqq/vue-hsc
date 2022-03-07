<template>
	<div>
		<div class="detail">
			<h2>中山大学孙逸仙纪念医院 - 竞价公告 (CBSYSH2021000277)</h2>
			<h3>基本信息</h3>
			<el-descriptions :column="2">
				<el-descriptions-item label="申购单号">{{id}}</el-descriptions-item>
				<el-descriptions-item label="申购主题">{{theme}}</el-descriptions-item>
				<el-descriptions-item label="采购单位">{{unit}}</el-descriptions-item>
				<el-descriptions-item label="报价要求">{{requirements}}</el-descriptions-item>
				<el-descriptions-item label="签约时间">{{date}}</el-descriptions-item>
				<el-descriptions-item label="付款方式">{{pay}}</el-descriptions-item>
				<el-descriptions-item label="送货时间">{{DeliveryTime}}</el-descriptions-item>
				<el-descriptions-item label="收货地址">{{address}}</el-descriptions-item>			 
				<el-descriptions-item label="备注说明">{{remarks}}</el-descriptions-item>

			</el-descriptions>
			<el-button type="primary" @click="offer">我要报价</el-button>
		</div>
		<el-dialog title="报价" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="请输入价格">
					<el-input v-model="form.price" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="determine">确 定</el-button>
			</div>
		</el-dialog>
		
		<Footer></Footer>
	</div>
</template>

<script>
	import axios from 'axios'
	import Footer from '../../components/common/Footer.vue'
	export default {
		name: 'Detail',
		components: {
			Footer
		},
		data() {
			return {
				form: {
					price: '',
					unit:"制药厂"
				},
				dialogFormVisible: false,
				maintype: this.$route.params.id,
				id: '',
				theme: '',
				unit: '',
				requirements: '',
				date: '',
				pay: '',
				DeliveryTime:'',
				address:'',
				remarks: ''
			}
		},
		//在页面初始的时候携带参数（招标的id）去找相对应的招标信息
		mounted() {
			const self = this;
			console.log( this.maintype)
			axios({
				method: "post",
				url: "https://www.fastmock.site/mock/f5c6f529e21ab44344629c6416263a39/supplier/api/detail",
				data: {
					id: this.maintype,
				}
			}).then((res) => {
				const req = res.data
				this.id = req.id
				this.theme = req.theme
				this.date = req.date
				this.pay = req.pay
				this.remarks = req.remarks
				this.unit = req.unit
				this.DeliveryTime=req.DeliveryTime
				this.address=req.address
				this.requirements = req.requirements
			})
		},
		methods:{
			determine(){
				//把报价的价格发到数据库
				this.dialogFormVisible = false
				axios({
					method: "post",
					url: "https://www.fastmock.site/mock/f5c6f529e21ab44344629c6416263a39/supplier/api/detail",
					data: {
						price: this.form.price,
						unit:this.form.unit
					}
				}).then((res) => {
					console.log(res.data)
				})
				//这里可以加上一个报价成功的提示信息
			},
			offer(){
				//先进行身份验证，没问题了再弹窗
				if(window.sessionStorage.getItem('logged')=="true"){
					this.dialogFormVisible = true
				}
				else{
					alert("请先登录")
					this.$router.push('/index')					
				}	
			}
		}

	}
</script>

<style scoped>
	.el-dialog__body{
		padding: 0;
	}
	.detail {
		padding: 20px 120px 20px 120px;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
	}

	h3 {
		margin: 20px 0 20px 0;
	}

	.el-descriptions__title {
		font-size: 20px;
		border-bottom: 2px solid #007AFF;
	}
</style>
