<template>
	<div id="parent">
		<el-card class="box-card ">
			<div slot="header" class="clearfix">
				<span>特别推荐 -- 抗击疫情物资采购</span>
			</div>
			<el-table :show-header="false" @row-click="clickData" :data="tableData" height="230" style="width: 100%">>
				<el-table-column prop="name" width="120">
				</el-table-column>
				<el-table-column prop="address">
				</el-table-column>
				<el-table-column prop="date" width="100" hei>
				</el-table-column>
			</el-table>
		</el-card>

		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>特别推荐 -- 大额重要科教物资采购</span>
			</div>
			<el-table @row-click="clickData" :show-header="false" :data="tableData"
			   height="230"	style="width: 100%;">

				<el-table-column prop="name" width="120">
				</el-table-column>
				<el-table-column prop="address">
				</el-table-column>
				<el-table-column prop="date" width="100" hei>
				</el-table-column>
			</el-table>
		</el-card>

		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>特别推荐 -- 试剂耗材物资采购</span>
			</div>
			<el-table @row-click="clickData" height="230" :show-header="false" :data="tableData"
				style="width: 100%;font-size: 10px;">

				<el-table-column prop="name" width="120">
				</el-table-column>
				<el-table-column prop="address">
				</el-table-column>
				<el-table-column prop="date" width="100" hei>
				</el-table-column>
			</el-table>
		</el-card>
	</div>

</template>

<script>
	import axios from 'axios'
	export default {
		name: "BiddingColumn",
		mounted() {
			axios({
				method: "get",
				url: "https://www.fastmock.site/mock/f5c6f529e21ab44344629c6416263a39/supplier/api/show",
			}).then((res) => {
				//console.log(res.data.data[0].id);
				/* const req = res.data.data
				for (let i = 0; i < this.tableData.length; i++) {
					this.tableData[i].name = req[i].name
					this.tableData[i].address = req[i].address
					this.tableData[i].date = req[i].date
				} */
			})
			/* axios({
				method: "get",
				url: "https://www.fastmock.site/mock/f5c6f529e21ab44344629c6416263a39/supplier/api/show",
			}).then((res) => {
				console.log(res.data);
			}) */
		},
		data() {
			return {
				tableData: [{
						id: '0001',
						date: 'fe',
						name: 'efs',
						address: 'efs'
					}, {
						id: '0002',
						date: 'fef',
						name: 'efs',
						address: 'fef'
					}, {
						id: '0003',
						date: 'fe',
						name: 'ef',
						address: 'efaw'
					}, {
						id: '0004',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					},
					{
						id: '0005',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					},{
						id: '0006',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					},
					{
						id: '0006',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					},
					{
						id: '0006',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					},{
						id: '0006',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					},{
						id: '0006',
						date: 'fef',
						name: 'fef',
						address: 'feawd'
					}
				]
			}
		},
		methods: {
			clickData(row) {
				console.log(row.id)
				this.$router.push({
					name: 'detail',
					params: {
						id: row.id
					}
				})
				//this.$router.push('/detail')
			}
		}
	}
</script>

<style scoped>
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix {
		color: orange;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 90%;
		margin: 10px;
		/* height: 200px; */
	}


	#parent {
		justify-items: center;
		display: grid;
		margin-bottom: 20px;
		grid-template-columns: 1fr 1fr 1fr;
		grid-row-gap: 20px;
		padding: 10px;
	}

	.el-card__body {
		padding: 0px;
	}

	.el-table .cell {
		line-height: 15px;
	}
</style>
