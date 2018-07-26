<template>
	<div class="Cart">
		<template v-if="data.length">
			<blockquote class="site-text layui-elem-quote">
	      	我的购物车 
		    </blockquote>
			<div class="product jk-table">
				<table>
					<thead>
						<tr>
							<th>商品名称</th>
							<th>商品单价</th>
							<th>商品数量</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,$index) in data">
							<td>{{item.name}}</td>
							<td>{{item.price}}</td>
							<td>
								<em class="layui-btn layui-btn-primary reduce" v-on:click="reduce($index)" :class="{'layui-btn-disabled':item.count==1}">-</em>
								<span style="padding: 0 6px;">{{item.count}}</span>
								<em class="layui-btn layui-btn-primary add" v-on:click="add($index)" :class="{'layui-btn-disabled':item.count==11}">+</em>
							</td>
							<td>
								<span class="layui-btn layui-btn-danger left" v-on:click="remove($index)" data-toggle="tooltip"
        data-placement="left" title="点击删除">移除</span>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr bgcolor="powderblue">
							<td colspan="4">商品总价：{{price}}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</template>
		<template v-else>
			<div class="jumbotron">
				<h1>您的购物车空了</h1>
				<p>是否去重新挑选</p>
				<p>
					<a class="layui-btn layui-btn-primary layui-btn-lg" href="javascript:location.reload();"  role="button">重新挑选</a>
				</p>
			</div>
		</template>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default {
		name: 'Cart',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				data: [{
						name: 'IPhone 6',
						price: 1,
						id: 1,
						count: 1
					},
					{
						name: 'IMac',
						price: 2,
						id: 2,
						count: 1
					},
					{
						name: 'iPad',
						price: 3,
						id: 3,
						count: 1
					}
				]
			}
		},
		computed: {
			price: function() {
				var _this = this;
				var price = 0;
				_this.data.forEach(function(item,index) {
					price += item.count * item.price;
				});
				return price;
			}
		},
		//挂载结束
		mounted: function(){
			this.$nextTick(function () {
				$("[data-toggle='tooltip']").tooltip();
			})
		},
		methods: {
			add: function($index) {
				var self = this.data[$index];
				if(self.count > 10) {
					return false;
				}
				self.count++;
			},
			reduce: function($index) {
				var self = this.data[$index];
				if(self.count <= 1) {
					return false
				}
				self.count--;
			},
			remove: function($index) {
				this.data.splice($index,1);
			}
		}
	}
</script>
<style>

</style>