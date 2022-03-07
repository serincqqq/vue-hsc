<template>
	<footer>
		<div class="foot">
			<div class="item">
				<img src="../../assets/img/ewm.png" />
				<span>好食采公众号</span>
			</div>
			<div class="item">
				<img src="../../assets/img/ewm.png"/>
				<span>好食采公众号</span>
			</div>
			<div class="item">
				<h4>服务中心</h4>
				<ul>
					<li><a href="javascript;">入驻指南</a></li>
					<li><a href="javascript;">招标指南</a></li>
					<li><a href="javascript;">投标指南</a></li>
					<li><a href="javascript;">评标指南</a></li>

				</ul>
			</div>
			<div class="item">
				<ul>
					<h4>联系我们</h4>
					<li><a href="javascript;">全国服务热线<span> 400-999-2350</span></a></li>
					<li><a href="javascript;">企业邮箱<span> chenhao@acuit.net</span></a></li>
				</ul>
			</div>
		</div>
	
		<div class="bottom">
			<ul class="horizontal">
				<li><a href="javascript;">关于我们</a></li>
				<li><a href="javascript;">联系我们</a></li>
				<li><a href="javascript;">法律声明</a></li>
				<li><a href="javascript;">隐私政策</a></li>
			</ul>
			<ul style="margin-top:20px;">
				<li>好食采信息技术（福州）有限公司</li>
				<li>Copyright©2021.ALL Rights Reserved FJUT版权所有</li>
				<li class="symbol">增值电信业务经营许可证：闽A2-20201240</li>
				<li class="symbol"><a href="https://beian.miit.gov.cn" target="_blank">闽ICP备17015749号</a></li>
			</ul>
		</div>
	</footer>
</template>

<script>
	export default{
		name:'Footer',
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	footer {
		margin-top: -10px;
		/* position:fixed;
		bottom: 0; */
		width: 100%;
	}
	
	h4 {
		color: #000000;
	}
	
	.item {
		display: flex;
		flex-direction: column;
	
		text-align: center;
	}
	
	.item:nth-child(1),
	.item:nth-child(2) {
		padding: 30px;
	}
	
	.item:nth-child(3),
	.item:nth-child(4) {
		padding: 10px 60px;
	}
	
	.foot {
		display: flex;
		/* padding: 20px; */
		background-color: #F1F2F6;
		text-align: center;
	}
	
	.bottom {
		padding: 10px;
		background-color: darkblue;
		text-align: center;
		color: white;
	}
	
	.item img {
		width: 80px;
		height: 80px;
	}
	
	.item span {
		font-size: 10px;
	}
	
	.item ul,
	.bottom ul {
		list-style: none;
	}
	
	.horizontal li {
		display: inline;
		list-style: none;
		width: 30px;
		padding-right: 6px;
	}
	
	.horizontal {
		width: 100%;
		text-align: center;
	}
	
	.item ul>li {
		padding: 4px;
		font-size: 14px;
		display: block;
	}
	
	.item a {
		color: gray;
		text-decoration: none;
	}
	
	.bottom a {
		text-decoration: none;
		color: white;
	}
	
	a:hover {
		color: #F0932B;
	}
</style>
