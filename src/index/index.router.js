import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue'
import Detail from './views/Detail.vue'

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/detail/:id',
		name: 'detail',
		component: Detail
	}, {
		path: '/',
		redirect: '/index'
	}, {
		path: '/index',
		component: Index
	},],
});
