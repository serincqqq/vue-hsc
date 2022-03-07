<template>
	<div>
		<Header></Header>
		<div id="right" class="column">
			<img id="tx" src="../../assets/img/tx.jpg" />
			<h5 style="line-height: 30px;color: white;">欢迎来到好食采</h5>
			<a target="_blank" href="purchaser.html"><button>采购方登录</button></a>
			<a target="_blank" href="Supplier.html"><button style="color: #f7b731;">供应商入驻</button></a>
		</div>
		<div style="display: flex;flex-direction: column;">
			<IndexChart></IndexChart>
			<IndexCard></IndexCard>
			<BiddingColumn></BiddingColumn>
			<Footer></Footer>
		</div>
	</div>
</template>

<script>
	import IndexChart from '../../components/common/IndexItem/IndexChart.vue'
	import IndexCard from '../../components/common/IndexItem/IndexCard.vue'
	import BiddingColumn from '../../components/common/IndexItem/BiddingColumn.vue'
	import Footer from '../../components/common/Footer.vue'
	import Header from '../../components/common/IndexItem/Header.vue'
	export default {
		//name:'Index',
		components: {
			IndexChart,
			IndexCard,
			BiddingColumn,
			Footer,
			Header
		},
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.banner-img {
		height: 400px;
		width: 100%;
		position: relative;
	}

	* {
		margin: 0;
		padding: 0;
	}

	#right {
		width: 220px;
		z-index: 999;
		background: #e67e22;
		opacity: 0.8;
		margin: 20px;
		display: flex;
		height: 350px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 60px;
		right: 60px;
	}

	#right button {
		height: 30px;
		width: 120px;
		margin-top: 10px;
		border-radius: 5px;
		border: none;
		/* 	padding: 20px; */
	}

	#right button:hover {
		cursor: pointer;
	}

	#tx {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: white;
	}
</style>
