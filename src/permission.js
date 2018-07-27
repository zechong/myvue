import router from './router'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
	if(to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
		if(localStorage.getItem('username')) { // 判断是否登录
			next()
		} else { // 没登录则跳转到登录界面
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		next()
	}
})

router.afterEach(() => {
//	console.log("结束")
})
