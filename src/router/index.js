import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import zuche from '@/components/common/zuche'
import inter from '@/components/inter'
import sfc from '@/components/sfc'
import sm from '@/components/sm'
import dd from '@/components/dd'
import tj from '@/components/tj'
import my from '@/components/my'
import register from '@/components/register'
import my_info from '@/components/my_info'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
    	path:"/my",
    	name:"my",
    	component:my,
    	children:[
	    	{
	    		path:"login",
	    		name:"login",
	    		component:login
	    	},
	    	{
	    		path:"register",
	    		name:"register",
	    		component:register
	    	},
	    	{
	    		path:"my_info",
	    		name:"my_info",
	    		component:my_info
	    	},
	    	{
	    		path:"order",
	    		name:"order",
	    		component:order
	    	},
	    	{
	    		path:"/",
	    		redirect:"/my/my_info"
	    	},
    	]
    },
    {
    	path:"/zuche",
    	name:"zuche",
    	component:zuche,
    	children:[
				{
					path:"sm",
					name:"sm",
					component:sm,
				},
				{
					path:"dd",
					name:"dd",
					component:dd,
				},
				{
					path:"tj",
					name:"tj",
					component:tj,
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
