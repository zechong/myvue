// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import {post,fetch,patch,put} from './utils/http'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import $ from 'jquery'
import './assets/css/layui.css'  
import './assets/css/jk-common.css'  
//import './assets/js/bootstrap.min'
import '@/styles/index.scss'
//require('./assets/css/jk-common.css')
import '@/permission' // permission control
import mock from './mock'

Vue.config.productionTip = false;

Vue.use(Vuex);
//Vue.prototype.$http = axios;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,  
  template: '<App/>',
  components: { App }
})
