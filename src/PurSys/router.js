import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './PLogin.vue'
import Register from './Preg.vue'
Vue.use(VueRouter)

import Home from '../components/common/Home.vue'
import Dashboard from './view/Dashboard.vue'
import BaseCharts from './view/BaseCharts.vue'
import BaseTable from './view/BaseTable.vue'
import BaseForm from './view/BaseForm.vue'
//import Tabs from './view/Tabs.vue'
import Projectreview from './view/Projectreview.vue'
import Icon from './view/Icon.vue'
import Upload from './view/Upload.vue'
import I18n from './view/I18n.vue'


const routes = [{
		path: '/',
		redirect: '/login',
		meta: {
			title: '供应商登录'
		}
	},
	{
		path: '/login',
		//name: 'home', 
		component: Login,
		/* meta: {
			title: '供应商登录'
		} */
	},
	{
		path: '/register',
		//name: 'home', 
		component: Register,
		meta: {
			title: '供应商注册'
		}
	},
	{
		path: '/home',
		component: Home,

		children: [{
				path: 'dashboard',
				component: Dashboard,
				meta: {
					title: '系统首页'
				}
			},
			{
				path: '/',
				redirect: 'dashboard'
			},
			{
				// 国际化组件
				path: 'i18n',
				component: I18n,
				meta: {
					title: '国际化'
				}
			},
			{
				path: 'icon',
				component: Icon,
				meta: {
					title: '自定义图标'
				}
			},
			{
				path: 'table',
				component: BaseTable,
				meta: {
					title: '基础表格'
				}
			},
			/* {
				path: 'tabs',
				component: Tabs,
				meta: {
					title: 'tab选项卡'
				}
			}, */
			{
				path: 'form',
				component: BaseForm,
				meta: {
					title: '基本表单'
				}
			},
			{
				// 图片上传组件
				path: 'upload',
				component: Upload,
				meta: {
					title: '文件上传'
				}
			},
			{
				// vue-schart组件
				path: 'charts',
				component: BaseCharts,
				meta: {
					title: 'schart图表'
				}
			},

			{
				path: 'Project-review',
				component: Projectreview,
				meta: {
					title: '审核项目'
				}
			},
		]
	},
]

export default new VueRouter({
	routes: routes
})
