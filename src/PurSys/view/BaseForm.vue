<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-calendar"></i> 表单
				</el-breadcrumb-item>
				<el-breadcrumb-item>基本表单</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="smallContainer">
				<div class="form-box">
					<el-form ref="form" :model="form" label-width="140px">
						<el-form-item label="项目名称">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="实际采购数量">
							<el-input v-model="form.num"></el-input>
						</el-form-item>
						<el-form-item label="采购项目联系人电话">
							<el-input v-model="form.phone"></el-input>
						</el-form-item>
						<el-form-item label="结束日期">
							<el-col :span="11">
								<el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
									value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
							</el-col>
							<el-col class="line" :span="2">-</el-col>
							<el-col :span="11">
								<el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;">
								</el-time-picker>
							</el-col>
						</el-form-item>
						<el-form-item label="简要技术要求或招标项目性质">
							<el-input type="textarea" rows="5" v-model="form.desc"></el-input>
						</el-form-item>
					</el-form>
				</div>
				<Upload></Upload>
			</div>
			<div style="margin: 0 auto;height: 60px;width: 200px;">
				<el-button type="primary" @click="onSubmit">表单提交</el-button>
				<el-button>取消</el-button>
			</div>

		</div>

	</div>
</template>

<script>
	import Upload from './Upload.vue'
	export default {
		name: 'baseform',
		components: {
			Upload
		},
		data() {
			return {

				form: {
					name: '',
					num: '',
					phone: '',
					region: '',
					date1: '',
					date2: '',
					delivery: true,
					type: ['步步高'],
					resource: '小天才',
					desc: '',
					options: []
				}
			};
		},
		methods: {
			onSubmit() {
				this.$message.success('提交成功！');
			}
		}
	};
</script>
<style type="text/css">
	.smallContainer {
		display: flex;
	}

	.form-box {
		margin-right: auto;
	}
</style>
