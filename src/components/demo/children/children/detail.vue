<template>
	<div class="detail">
		<h1>{{msg}}~~~{{this.$route.params.userId}}</h1>
		<button>
			<router-link to="/hello" replace>back</router-link>
		</button>
	</div>
</template>

<script>
export default {
	name: "detail",
  	data () {
	    return {
	      msg: 'this is details！'
	    }
  	}
}
</script>
<style scoped lang="scss">

</style>
