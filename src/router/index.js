import Vue from 'vue'
import Router from 'vue-router'
import Authorization from '@/components/Authorization'
import Calculate from '@/components/Calculate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Authorization',
      component: Authorization
    },
    {
      path: '/calc',
      name: 'Calculate',
      component: Calculate
    }
  ]
})
