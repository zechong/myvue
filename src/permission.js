import router from './router'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  next();
//	console.log("开始")
})

router.afterEach(() => {
//	console.log("结束")
})
