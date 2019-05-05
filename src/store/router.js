import {constantRouterMap} from '@/router/model.js'

export default {
  state: {
    router: constantRouterMap
  },
  mutations: {
    SET_ROUTER: (state, router) => {
      state.router = router
    }
  },
  actions: {},
  getters: {}
}
