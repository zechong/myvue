<template>
	<div class="list">
		<h1>{{msg}}</h1>
		<ul>
			<template v-for="item in list">
				<li v-show="item.id != 1">
					<router-link :to="{ name: 'detail', params: { userId: item[1]||item.id }}">
						<img :src="item.src" />
						<span>{{item[0] || item.title}} >></span>
					</router-link>
				</li>
			</template>
		</ul>
		<h1 style="padding: 10px 0;">A routerView</h1>
		<transition name="fade">
			<router-view class="animated" />
		</transition>
		<h1 style="padding: 10px 0;">B routerView</h1>
		<transition name="fade">
			<router-view class="animated" name="a" />
		</transition>
	</div>
</template>

<script>
import { Message } from 'element-ui';
export default {
	name: "list",
  	data () {
	    return {
	      msg: 'this is lits！',
	      list:[],
	      sendData: {
	      	'code':'utf-8',
	      	'q':"耳机 耳塞式 蓝牙"
	      }
	    }
  	},
  	created: function(){
  		var _this = this;
//		this.$fetch( process.env.API_HOST +'sug',this.sendData)
		this.$post('/mock/list')
		.then((response)=>{
			console.log(response)
			Message({
	          	showClose: true,
	          	message: '获取数据成功',
	          	type: 'success'
	        })
			this.list = response.result || response.list;
		})
		.catch((error)=>{
		    console.log(error);
	  	});
  	}
}
</script>
<style scoped lang="scss">

</style>
