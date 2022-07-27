import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Button } from 'ant-design-vue';
Vue.use(Antd);
Vue.use(Button);

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
