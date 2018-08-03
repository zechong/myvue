<template>
  <div class="scss">
  	<header>
  		<span>header</span>
  	</header>
  	<aside>
  		<el-button type="success" @click="logout()">exit</el-button>
  	</aside>
  	<section class="container">
  		<in-form :age="ageNum" @clearText="num=''" @input="onInput">
  			<span slot="desc">Here might be a page title</span>
  		</in-form>
  		<p style="margin-bottom: 5px;">您选择的年龄是：{{num}}</p>
  		<el-input v-model="inputText" placeholder="请输入内容" style="margin-bottom: 5px;"></el-input>
  		<router-link :to="{ name: 'Demo'}"><el-button type="primary">godemo</el-button></router-link>
  		<h1 @click="changeFun()">{{MESSAGE}}{{showLen}}</h1>
			<router-link :to="{ name: 'list'}" tag="el-button" class="btn-primary" @click.native="changeFun()">goList</router-link>
			<transition name="fade">
				<router-view class="animated"/>
			</transition>
  	</section>
  	<footer>
  		<span>
  			vue+vue-router+vuex+scss+axios+mock+element-ui
  		</span>
  	</footer>
  </div>
</template>

<script>
import InForm from '@/components/InForm'
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
	
export default {
  name: 'scss',
	components: { InForm },
  data () {
    return {
      msg: 'Welcome to use scss！',
      inputText: 'keep-live',
      ageNum: 20,
      num: 0
    }
  },
  computed: {
  	...mapState([
  	 	'MESSAGE'
	  ]),
  	...mapGetters([
      'showLen'
    ]),
  },
  methods: {
  	...mapMutations([
    	'changeHi'
    ]),
    ...mapActions([
    	'changeFun'
    ]),
    logout(){
    	localStorage.removeItem("username");
    	this.$message({
    		type:"success",
    		showClose: true,
    		message:"已成功退出"
    	})
			this.$router.replace({
				path: '/login',
				query: {
					redirect: this.$route.fullPath
				}}
			);
    },
    onInput (val) {
    	this.num = val;
   	}
  },
  mounted (){
  	this.num = this.ageNum;
  }
}
</script>
<style scoped lang="scss">
@import '../../styles/index.scss';
	.router-link-active {
		/*background-color: $red;*/
	}
</style>
