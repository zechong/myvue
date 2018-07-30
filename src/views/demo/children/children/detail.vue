<template>
	<div class="detail">
		<h1>{{msg}}~~~{{this.$route.params.userId}}</h1>
		<router-link to="/hello">
			<el-button type="danger">
				back
			</el-button>
		</router-link>
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
