import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout'

export const constantRouterMap = [{
  path: '',
  name: 'HelloWorld',
  component: Layout,
  mate:{
    title:'hellow'
  },
  children: [{
    path: 'summer',
    name: 'summer',
    component: HelloWorld,
    mate:{
      title:'summer'
    }
  }]
}]
