<template>
	<div id="header">
		<ul class="ulLeft">
			<li><a>首页</a></li>
			<li>
				<v-region type="group" :town="true">
					<template #default="{ region, show }">
						<span v-text="resultText(region)"></span>
					</template>
				</v-region>
			</li>
			<li><a>请登录</a></li>
		</ul>
		<ul class="ulRight">
			<li><a>入驻指南</a></li>
			<li><a>招标指南</a></li>
			<li><a>投标指南</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				/* 	region: '',
					show: false, */
			}
		},
		methods: {
			regionChange(data) {
				console.log(data)
			},
			resultText(region) {
				if (!Object.values(region).some(val => val) || !region) return '福州市'
				return Object.values(region).filter(val => val).map(val => val.value).join(',')
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	.ulLeft li:hover,
	.ulRight li:hover {
		cursor: pointer;
		color: #ffbe76;
	}

	#header {
		padding-left: 50px;
		background: #f1f2f6;
		height: 50px;
		line-height: 50px;
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

	.ulRight {
		float: right;
		padding-right: 50px;
	}

	.ulRight li {
		padding-left: 15px;
		color: gray;
		float: right;
	}
</style>
