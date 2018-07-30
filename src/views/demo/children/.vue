<template>
	<div class="list">
		<h1>{{msg}}</h1>
		<ul>
			<li v-for="item in list"><router-link :to="{path:'/hello/list/detail',query:{id:item.id}}">{{item.text}}</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'list',
  	data () {
	    return {
	      	msg: 'this is list！',
     		list:[{
	      		id: 1,
	      		"text":"text1"
	      	},{
	      		id: 2,
	      		"text":"text2"
	      	},{
	      		id: 3,
	      		"text":"text3"
	      	}]
	    }
  	}
}
</script>
<style scoped lang="scss">

</style>
