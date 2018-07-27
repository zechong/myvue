import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
import Test from '@/components/Test'
import Cart from '@/components/Cart'
import a from '@/components/a'
import Vueform from '@/components/Vueform'
import Vuecheck from '@/components/Vuecheck'

const home = r => require.ensure( [], () => r (require('@/components/demo/hello')))

Vue.use(Router)

export default new Router({
  routes: [
  	{
			path: '/',
			redirect: '/hello'
		},
		{
			path: '/login',
			name: 'login',
			component: (resolve) => {
		  	require(['@/components/login'], resolve)
		  }
		},
    {
      path: '/hello',
      name: 'hello',
      component: home,
      meta: {
		  	requireAuth: true,
		  	keepAlive: true
		  },
      children:[
	      {
	      	path: 'list',
	      	name: "list",
      		component: () => import('@/components/demo/children/list'),
      		children:[
			      {
			      	path: 'detail/:userId',
			      	name: "detail",
			      	components: {
				       	default: () => import('@/components/demo/children/children/detail'),
				        a:  {template: '<div>User {{ this.$route.params.userId }}</div>'}
				      },
				      beforeEnter: (to, from, next) => {
				      	next()
//				      	console.log("this is a " + to.name )
				      }
//		      		component: () => import('@/components/demo/children/children/detail')
//							component: {template: '<div>User {{ this.$route.params.userId }}</div>'}
			      }
			    ]
	      }
	    ]
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
   		meta: {
		  	keepAlive: false
		  },
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/a',
      name: 'A',
      component: a
    },
    {
      path: '/vueform',
      name: 'Vueform',
      component: Vueform
    },
     {
      path: '/vuecheck',
      name: 'Vuecheck',
      component: Vuecheck
    },{
			path: '/error',
			name: "error",
			component: () => import('@/components/error'),
		},{
			path: '*',
			redirect: '/error'
		}
  ],
  scrollBehavior (to, from, savedPosition) {
//	console.log(to)
  	if (to.hash) {
	    return {
	      selector: to.hash
	    }
	  }
  }
})


