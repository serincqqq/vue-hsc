<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>加盟单位</span>
		</div>
		<div class="scrollbar" id="enlarge">
			<ul v-for="o in imgDatas" :key="o.id">
				<li><img :src="o.src" />
					<p>{{o.schoolName}}</p>
				</li>
			</ul>
			<!-- <img src="../../../assets/img/enterprise/大润发.jpg" /> -->
		</div>
	</el-card>

</template>

<script>
	export default {
		name: 'IndexCard',
		data() {
			return {
				imgDatas: [{
						id: '1',
						src: require('../../../assets/img/enterprise/大润发.jpg'),
						schoolName: '大润发'
					},
					{
						id: '2',
						src: require('../../../assets/img/enterprise/家乐福.jpg'),
						schoolName: '东南大学'
					},
					{
						id: '3',
						src: require('../../../assets/img/enterprise/麦德龙.jpg'),
						schoolName: '中南大学'
					},
					{
						id: '4',
						src: require('../../../assets/img/enterprise/沃尔玛.jpg'),
						schoolName: '沃尔玛'
					},
					{
						id: '5',
						src: require('../../../assets/img/enterprise/永辉彩食鲜.jpg'),
						schoolName: '永辉彩食鲜'
					},
					{
						id: '6',
						src: require('../../../assets/img/enterprise/永辉超市.jpg'),
						schoolName: '永辉超市'
					},
					{
						id: '7',
						src: require('../../../assets/img/enterprise/永辉超市.jpg'),
						schoolName: '永辉超市'
					},
					{
						id: '8',
						src: require('../../../assets/img/enterprise/永辉超市.jpg'),
						schoolName: '永辉超市'
					},
					{
						id: '9',
						src: require('../../../assets/img/school/10286.jpg'),
						schoolName: '中南大学'
					},

				]
			}
		}
	}
</script>


<style scoped>
	img{
		border-radius: 5px;
	}
	/* 设置滚动条的样式 */
	::-webkit-scrollbar {
		width: 12px;
		height: 6px;
	}

	/* 滚动槽 */
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		/* height: 5px; */
	}

	/* 滚动条滑块 */
	::-webkit-scrollbar-thumb {
		height: 10px;
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.1);
		-webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
	}

	#enlarge {
		overflow-x: scroll;
		overflow-y: hidden;
		/* width: 500px; */
		display: flex;
		white-space: nowrap;
	}

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
		width: 95%;
		margin: 20px;
	}

	#enlarge li {
		text-align: center;
		margin-bottom: 10px;
		width: 120px;
		transform: scale(1);
		transition: all 1s ease 0s;
	}

	#enlarge li>p {
		font-size: 12px;
		color: gainsboro;
	}

	#enlarge li:hover {
		transform: scale(1.1);
		transition: all 1s ease 0s;
	}

	ul {
		list-style: none;

	}

	li {
		float: left;
	}
</style>
