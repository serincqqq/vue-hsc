import Vue from 'vue';
import Home from './Home.vue';
import router from './router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from '../store/index.js'
import VueI18n from 'vue-i18n';
import {
	messages
} from '../components/common/i18n.js';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import '../assets/css/icon.css'
import '../components/common/directives.js';
import 'babel-polyfill';
// import store from './store';
//Vue.use(ElementUI);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(VueI18n);
Vue.config.productionTip = false;
const i18n = new VueI18n({
	locale: 'zh',
	messages
});
new Vue({
	render: h => h(Home),
	router,
	i18n,
	store,
}).$mount('#PurSys');
