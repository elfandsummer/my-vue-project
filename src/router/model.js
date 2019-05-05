import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout'

export const constantRouterMap = [{
  path: '/',
  name: 'HelloWorld',
  component: Layout,
  children: [{
    path: 'summer',
    name: 'summer',
    component: HelloWorld,
  }]
}]
