import Vue from 'vue'
import VueRouter from 'vue-router'
import SLogin from './SLogin.vue'
import Sreg from './Sreg.vue'
Vue.use(VueRouter)

import Home from '../components/common/Sup/Home.vue'
import Dashboard from './view/Dashboard.vue'
import BaseCharts from './view/BaseCharts.vue'
import BaseTable from './view/BaseTable.vue'
import BaseTableBid from './view/BaseTableBid.vue'
import Tabs from './view/Tabs.vue'
import Icon from './view/Icon.vue'
import I18n from './view/I18n.vue'
import Publicity from './view/Publicity.vue'

const routes = [{
		path: '/',
		//name: 'home', 
		component: SLogin,
		meta: {
			title: '首页'
		}
	},
	{
		path: '/sreg',
		component: Sreg,
	},
	{
		path: '/slogin',
		component: SLogin,
	},
	{
		path: '/home',
		component: Home,

		children: [{

				path: 'dashboard',
				component:Dashboard,
				meta: {
					title: '系统首页'
				}
			},
			{
				path: '/',
				redirect: 'dashboard'
			},
			{
				path: 'icon',
				component:Icon,
				meta: {
					title: '自定义图标'
				}
			},
			{
				path: 'table',
				component:BaseTable,
				meta: {
					title: '招标信息'
				}
			},
			{
				path: 'tabs',
				component:Tabs,
				meta: {
					title: '消息中心'
				}
			},
			{
				path: 'publicity',
				component: Publicity,
				meta: {
					title: '中标公示信息'
				}
			},

			{
				// vue-schart组件
				path: 'charts',
				component:BaseCharts,
				meta: {
					title: '投标项目分析'
				}
			},
			{
				// 国际化组件
				path: 'i18n',
				component:I18n,
				meta: {
					title: '国际化'
				}
			},
			{
				path: 'tablebid',
				component:BaseTableBid,
				meta: {
					title: '我的投标项目'
				}
			},

		]
	},
]

export default new VueRouter({
	routes: routes
})
