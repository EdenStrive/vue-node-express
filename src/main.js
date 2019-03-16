// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './vuex/store'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
import Cookies from 'js-cookie'
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
import 'element-ui/lib/theme-chalk/index.css'
import {
  Input,
  Button,
  Table,
  Loading,
  Message,
 } from 'element-ui';

Vue.use(Input);
Vue.use(Table)
Vue.use(Button);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$Cookies = Cookies;

Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueQuillEditor)

export function delcookie(){
  return Cookies.remove('cookie');
}

if(process.env.NODE_ENV === 'production'){  // 生产环境,线上环境
	Vue.prototype.host = 'http://api.xingwenpeng.club';
}else if(process.env.NODE_ENV === 'test'){  //测试环境
	Vue.prototype.host = '';
}else if(process.env.NODE_ENV === 'development'){ // 开发环境
	Vue.prototype.host = 'http://localhost:3030';
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:store,
  router,
  components: { App },
  template: '<App/>'
})
