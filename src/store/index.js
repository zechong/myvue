import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	MIN_NUM : 0,
	MESSAGE: "Hello,world !"
}
const getters = {
	showLen: state => {
		return state.MESSAGE.length;
	}
}
const mutations = {
	changeHi (state){
		state.MESSAGE = "Hi,how are you ?"
	},
	changeMinNum (state){
		state.MIN_NUM = 1
	}
}
const actions = {
	changeFun ({ commit }) {
	    commit('changeHi')
	    commit('changeMinNum')
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: true
})
