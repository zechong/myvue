import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/views/Demo'
import Test from '@/views/Test'
import Cart from '@/views/Cart'
import a from '@/views/a'
import Vueform from '@/views/Vueform'
import Vuecheck from '@/views/Vuecheck'

const home = r => require.ensure( [], () => r (require('@/views/demo/hello')))
const list = r => require.ensure( [], () => r (require('@/views/demo/children/list')),'list')

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
		  	require(['@/views/login'], resolve)
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
      		component: list,
      		meta: {
				  	keepAlive: true
				  },
      		children:[
			      {
			      	path: 'detail/:userId',
			      	name: "detail",
			      	components: {
				       	default: () => import('@/views/demo/children/children/detail'),
				        a:  {template: '<div>User {{ this.$route.params.userId }}</div>'}
				      },
				      beforeEnter: (to, from, next) => {
				      	next()
//				      	console.log("this is a " + to.name )
				      }
//		      		component: () => import('@/views/demo/children/children/detail')
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
			component: () => import('@/views/error'),
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


