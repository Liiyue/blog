import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/404',
      name: '404',
      component: () => import('../views/error/404.vue')
    },
    {
      path: '/app/info/license/:businessId',
      name: 'license',
      component: () => import('../views/info/license/index.vue'),
      meta: {
        title: '店铺营业执照'
      }
    },
    {
      path: '/app/info/foodBusinessLicense/:businessId',
      name: 'foodBusiness',
      component: () => import('../views/info/foodBusiness/index.vue'),
      meta: {
        title: '店铺食品经营许可证'
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router
