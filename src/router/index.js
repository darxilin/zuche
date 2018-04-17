import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
<<<<<<< HEAD
import login from '@/components/login'
import zuche from '@/components/common/zuche'
import inter from '@/components/inter'
import sfc from '@/components/sfc'
=======

>>>>>>> 77ac25b48af065d62dc0463b5fcbed6a5a6dd6cb
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
    	path:"/login",
    	name:"login",
    	component:login
    },
    {
    	path:"/zuche",
    	name:"zuche",
    	component:zuche,
    	children:[
				{
					path:"sm",
					name:"sm",
				},
				{
					path:"dd",
					name:"dd",
				},
				{
					path:"tj",
					name:"tj",
				}
    	]
    },
    {
    	path:"/inter",
    	name:"inter",
    	component:inter
    },
    {
    	path:"/sfc",
    	name:"sfc",
    	component:sfc
    },
    {
      path: '*',
      redirect: "/index"
    }
  ]
})
