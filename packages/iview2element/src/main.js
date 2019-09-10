import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import ('./element.variables.scss');
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './iview.variables.less';
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
