import Vue from 'vue'
import Router from 'vue-router'
import Authorization from '@/components/Authorization'
import Calculate from '@/components/Calculate'
import JsonCalculate from '@/components/JsonCalculate'
import Price from '@/components/Price'

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
    },
    {
      path: '/jsonCalc',
      name: 'JsonCalculate',
      component: JsonCalculate
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    }
  ]
})
