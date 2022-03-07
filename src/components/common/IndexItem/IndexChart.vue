<template>
	<el-carousel style="margin:0 20px 0 20px" height="420px" :interval="5000" arrow="always">
		<el-carousel-item v-for="item in pic" :key="item.id">
		 <img style="width:100%;" :src="item.url">
		</el-carousel-item>
	</el-carousel>
	
	<!-- <div data-v-112012fc="" class="banner-img"
		style="background: url(&quot;http://oss.easyjcx.com/soft-img/2019/11/07/920a45a3f38a486aa90c5f2b8d8300526135999844830709787.png?Expires=316901572041&amp;OSSAccessKeyId=LTAIbOsi2W8XJVoJ&amp;Signature=hDGAVSd4WUslDeuDqDCE6aqRtZc%3D&quot;) 50% center no-repeat;">
	</div> -->
</template>

<script>
	export default {
		name: 'IndexChart',
		data() {
			return {
				pic: [{
					id:'1',
					//url:require('../../../assets/img/bg3.png')
					url:require('../../../assets/img/bg/背景3.jpg')
					
				},{
					id:'2',
					//url:require('../../../assets/img/bg1.jpg')
					url:require('../../../assets/img/bg/背景.jpg')
				},{
					id:'3',
					url:require('../../../assets/img/bg/背景2.jpg')
				}]
			}
		},
	}
</script>

<style scoped>
</style>
