<template>
	<div>
		<h2>公示结果</h2>
		<el-descriptions class="margin-top" :column="1" :size="size" border>
			
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-collection-tag"></i>
					标段编号
				</template>
				{{msg.id}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-shopping-cart-2"></i>
					工程名称
				</template>
				{{msg.project}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-office-building"></i>
					中标单位
				</template>
				{{msg.unit}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-s-ticket"></i>
					中标价
				</template>
				{{msg.price}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-school"></i>
					联系方式
				</template>
				{{msg.contact}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-date"></i>
					中标时间
				</template>
				{{msg.start}}
			</el-descriptions-item>
		</el-descriptions>
	</div>


</template>

<script>
	export default {
		name: 'Publicity',
		data() {
			return {
				size: '',
				msg:{
					id:'210101TPO01012662001001',
					start:"2021年10月28",
					unit:'建宁医疗器械制造厂',
					project:"采购医疗器械",
					contact:"2082842@163.com",
					price:"100,100,100"
				}
			};
		}

	}
</script>

<style>
</style>
