import Vue from 'vue';
import App from './Home.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './index.router.js';

import vRegion from 'v-region';
Vue.use(vRegion);

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({  
    render: h => h(App),
	router,
}).$mount('#app');