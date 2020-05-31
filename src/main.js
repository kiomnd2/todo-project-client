import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router';
import store from './store';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, {locale});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");