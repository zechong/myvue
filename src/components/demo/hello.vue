<template>
  <div class="scss">
  	<header>
  		<span>header</span>
  	</header>
  	<aside>
  		<el-button type="success" @click="logout()">exit</el-button>
  	</aside>
  	<section class="container">
  		<el-input style="margin-bottom: 5px;"></el-input>
  		<router-link :to="{ name: 'Demo'}"><el-button type="primary">godemo</el-button></router-link>
  		<h1 @click="changeFun()">{{MESSAGE}}{{showLen}}</h1>
			<router-link :to="{ name: 'list'}" tag="el-button" class="btn-primary" @click.native="changeFun()">goList</router-link>
			<transition name="fade">
				<router-view class="animated"/>
			</transition>
  	</section>
  	<footer>
  		<span>footer</span>
  	</footer>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'scss',
  data () {
    return {
      msg: 'Welcome to use scss！'
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
    }
  },
  mounted: function(){
  }
}
</script>
<style scoped lang="scss">
@import '../../styles/index.scss';
	.router-link-active {
		/*background-color: $red;*/
	}
</style>
