<template>
  <div class="scss">
  	<header>
  		<span>header</span>
  	</header>
  	<aside>aside</aside>
  	<section class="container">
  		<h1 @click="changeFun()">{{MESSAGE}}{{showLen}}</h1>
			<router-link :to="{ name: 'list'}" tag="button" class="btn-primary" @click.native="changeFun()">goList</router-link>
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
    ])
  },
  mounted: function(){
  }
}
</script>
<style scoped lang="scss">
@import '../../styles/index.scss';
	.router-link-active {
		background-color: $red;
	}
</style>
