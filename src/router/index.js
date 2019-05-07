import Vue from 'vue'
import Router from 'vue-router'
import {constantRouterMap} from './model'

import Hellow from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '',
    name: 'HelloWorld',
    component: Hellow,
  }, ...constantRouterMap]
})
