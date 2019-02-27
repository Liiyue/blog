import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import filters from '@/common/filters'
import mixins from '@/common/mixins'
import '@kaola/mobile-ui/lib/utils/rem';
import '@/scss/index.scss'

Vue.config.productionTip = false;
Vue.use(filters)
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
