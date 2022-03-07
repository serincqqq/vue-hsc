<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-cascades"></i> 投标审核
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<template slot="header" slot-scope="{}">
				<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
			</template>
			<div class="handle-box">
				
				<!-- v-model="query.name" @click="handleSearch" -->
				<!-- <el-input placeholder="项目编号/项目名称" class="handle-input mr10"></el-input>
				<el-button type="primary" icon="el-icon-search">搜索</el-button> -->
			</div>
			<el-table :data="$store.state.SupplierAbout.supliers" header-cell-class-name="table-header" border
				class="table" ref="multipleTable">
				<!-- -->
				<el-table-column prop="id" label="项目编号"></el-table-column>
				<el-table-column prop="project" label="项目名称"></el-table-column>
				<el-table-column prop="unit" label="投标机构"></el-table-column>
				<el-table-column prop="money" label="投标价格" align="center"></el-table-column>
				<el-table-column prop="ddl" label="截止时间"></el-table-column>

				<el-table-column label="操作" width="150" align="center">
					<template slot-scope="scope">
						<el-button type="success" size="mini" @click="success(scope.row)">通过
						</el-button>
						<!-- <el-button size="mini" type="danger" @click="fail(scope.$index, scope.row)">不通过
						</el-button> -->
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex"
					:page-size="query.pageSize" :total="count"></el-pagination>
			</div>
		</div>

	</div>
</template>

<script>
	import {
		fetchData
	} from '../../api/index.js';
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'
	import axios from 'axios'

	export default {
		name: 'basetable',
		data() {
			return {
				query: {
					address: '',
					name: '',
					pageIndex: 1,
					pageSize: 10
				},
				tableData: [],
				multipleSelection: [],
				delList: [],
				editVisible: false,
				pageTotal: 0,
				form: {},
				idx: -1,
				id: -1,
				time: ''
			};
		},
		mounted() {
			this.$store.dispatch('SupplierAbout/nocheckedSu');
		},
		computed: {
			count() {
				return this.$store.state.SupplierAbout.supliers.length
			}
		},
		methods: {
			getCurrentTime() {
				//获取当前时间并打印
				var _this = this;
				let yy = new Date().getFullYear();
				let mm = new Date().getMonth() + 1;
				let dd = new Date().getDate();
				let hh = new Date().getHours();
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
				this.time = yy + '/' + mm + '/' + dd + ' ' + hh + ':' + mf + ':' + ss;
				console.log(this.time)
			},
			// 触发搜索按钮
			handleSearch() {
				this.$set(this.query, 'pageIndex', 1);
				this.getData();
			},

			// 编辑操作
			success(row) {
				new Promise(resolve => {
					setTimeout(() => {
						this.$options.methods.getCurrentTime()
						resolve(1);
					}, 1000);
				}).then((val) => {
					//在这里发送中标 通过的时间（获取当前时间），项目编号，中标的用户名
					
					axios({
						method: "post",
						url: "https://www.fastmock.site/mock/6607a5b7a1e24e2a775b59844e6d0574/reg/api/reg",
						data: {
							ProjexcId: row.id,
							PassingTime: this.time,
							WinAgency: row.unit
						}
					}).then((res) => {
						console.log(res.data.data);
					})

				})
			},
		},
	}
</script>

<style scoped>
	.handle-box {
		margin-bottom: 20px;
	}

	.handle-select {
		width: 120px;
	}

	.handle-input {
		width: 300px;
		display: inline-block;
	}

	.table {
		width: 100%;
		font-size: 14px;
	}

	.red {
		color: #ff0000;
	}

	.mr10 {
		margin-right: 10px;
	}

	.table-td-thumb {
		display: block;
		margin: auto;
		width: 40px;
		height: 40px;
	}
</style>
