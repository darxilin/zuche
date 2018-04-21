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
import city from '@/components/common/city'

import mysz from "@/components/mysz"

import md from '@/components/common/md'
import rentDate from '@/components/common/rentDate'
import rentTime from '@/components/common/rentTime'
import car_list from '@/components/common/car_list'
import service from '@/components/common/service'
import order_confirm from '@/components/common/order_confirm'

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
	    		path:"mysz",
	    		name:"mysz",
	    		component:mysz
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
					children:[
					
					]
				},
				{
						path:"city",
						name:"city",
						component:city
				},
				{
						path:"md",
						name:"md",
						component:md
				},
				{
						path:"rentDate",
						name:"rentDate",
						component:rentDate
				},
				{
						path:"rentTime",
						name:"rentTime",
						component:rentTime
				},
				{
						path:"car_list",
						name:"car_list",
						component:car_list
				},
				{
						path:"srvice",
						name:"service",
						component:service
				},
				{
						path:"order_confirm",
						name:"order_confirm",
						component:order_confirm
				},
				
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
