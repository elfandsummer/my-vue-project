import Layout from '@/layout'


const _import = require('./_import_file')

export const constantRouterMap = [
 {
    path: '/basic',
    name: 'basic',
    component: Layout,
    mate: {
      title: 'basic'
    },
    children: [{
      path: 'layout',
      name: 'layout',
      component: _import('basic/layout'),
      mate: {
        title: 'layout/布局'
      }
    }]
  }]
