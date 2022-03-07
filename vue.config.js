module.exports = {
	pages: { //配置多页面入口
		index: {
			entry: 'src/index/main.js',
			template: './src/index/index.html',
		},
		purchaser: {
			entry: 'src/PurSys/purchaser.main.js',
			template: './src/PurSys/purchaser.html',
			filename:'purchaser.html'
		},
		Supplier:{
			entry: 'src/SupSys/Supplier.main.js',
			template: './src/SupSys/Supplier.html',
			filename:'Supplier.html'
		}

	},
}
