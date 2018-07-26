<template>
	<div class="container" id="box">
		<blockquote class="site-text layui-elem-quote">
	      	我的Form表单 
	    </blockquote>
        <form class="layui-form">
        	<div class="layui-form-item">
		   		<label class="layui-form-label">用户名</label>
			    <div class="layui-input-block">
			      <input type="text" id="username"  v-model="username" name="title"  lay-verify="required" placeholder="输入用户名" autocomplete="off" class="layui-input">
			    </div>
		    </div>
		    <div class="layui-form-item">
		   		<label class="layui-form-label">年龄</label>
			    <div class="layui-input-block">
			      <input type="text" id="age"  v-model="age" name="title"  lay-verify="required" placeholder="输入年龄" autocomplete="off" class="layui-input">
			    </div>
		    </div>
		    <div class="layui-form-item">
			    <div class="layui-input-block">
			      	<button type="button" class="layui-btn" lay-submit lay-filter="formDemo" v-on:click="add()">添加</button>
			      	<button type="reset" class="layui-btn layui-btn-primary">重置</button>
			    </div>
			</div>
        </form>
        <hr>
        <div class="jk-table">
	        <table class="table">
	            <caption class="text-info">用户信息表</caption>
	            <tr class="text-danger">
	                <th class="text-center">序号</th>
	                <th class="text-center">名字</th>
	                <th class="text-center">年龄</th>
	                <th class="text-center">操作</th>
	            </tr>
	            <tr class="text-center" v-for="(item,key) in myData">
	                <td>{{key+1}}</td>
	                <td>{{item.name}}</td>
	                <td>{{item.age}}</td>
	                <td>
	                    <button class="layui-btn" data-toggle="modal" data-target="#layer" v-on:click="nowIndex=key">删除</button>
	                </td>
	            </tr>
	            <tr v-if="myData.length!=0">
	                <td colspan="4" class="text-right">
	                    <button class="layui-btn layui-btn-danger layui-btn-radius" v-on:click="nowIndex=-2" data-toggle="modal" data-target="#layer" >删除全部</button>
	                </td>
	            </tr>
	            <tr v-else>
	                <td colspan="4" class="text-center text-muted">
	                    <p>暂无数据....</p>
	                </td>
	            </tr>
	        </table>
		</div>
		<div id="contentDOM">{{ dom }}</div>
        <!--模态框 弹出框-->
        <div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">确认删除么?</h4>
                    </div>
                    <div class="modal-body text-right">
                        <button data-dismiss="modal" class="btn btn-primary btn-sm">取消</button>
                        <button data-dismiss="modal" class="btn btn-danger btn-sm" v-on:click="deleteMsg(nowIndex)">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'box',
		data() {
			return {
				myData:[],
                username:'',
                age:'',
                nowIndex:-100,
                dom: 'not updated'
			}
		},
		methods: {
			add:function(){
            	if(!this.username){
            		alert("用户名不能为空！")
            		return false;
            	}
            	if(!this.age){
            		alert("年龄不能为空！")
            		return false;
            	}
            	this.updateMessage();
                this.myData.push({
                    name:this.username,
                    age:this.age
                });
                this.username='';
                this.age='';
            },
            deleteMsg:function(n){
                if(n==-2){
                    this.myData=[];
                }else{
                    this.myData.splice(n,1);
                }
            },
            updateMessage:function(){
            	this.dom = "updated";
        		console.log(this.$el.children[4].innerText)
				this.$nextTick(function() {
	        		console.log(this.$el.children[4].innerText)
					$("[data-toggle='tooltip']").tooltip();
				})
            }
        },
        mounted: function(){
			this.$nextTick(function () {
				$("[data-toggle='tooltip']").tooltip();
			})
		}
	}
</script>

<style>
	.text-center {
		border: 1px solid #ccc;
	}
	.text-center td {
		padding: 10px;
		border: 1px solid #ccc;
	}
</style>