<template>
	<div class="test">
		<nav class="navbar navbar-default" role="navigation">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">  
	          <span class="sr-only">Toggle navigation</span>  
	          <span class="icon-bar"></span>  
	          <span class="icon-bar"></span>  
	          <span class="icon-bar"></span>  
	        </button>
					<a class="navbar-brand" href="#">{{ msg }}</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active">
							<a href="#">Link</a>
						</li>
						<li>
							<a href="#">Link</a>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li>
									<a href="#">Action</a>
								</li>
								<li>
									<a href="#">Another action</a>
								</li>
								<li>
									<a href="#">Something else here</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="#">Separated link</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="#">One more separated link</a>
								</li>
							</ul>
						</li>
					</ul>
					<form class="navbar-form navbar-left" role="search">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Search">
						</div>
						<button type="submit" class="btn btn-default">Submit</button>
					</form>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#">Link</a>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
							<ul class="dropdown-menu" role="menu">
								<li>
									<a href="#">Action</a>
								</li>
								<li>
									<a href="#">Another action</a>
								</li>
								<li>
									<a href="#">Something else here</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="#">Separated link</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
		<div class="panel-group" id="accordion">
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseOne">
					点击我进行展开，再次点击我进行折叠。第 1 部分
				</a>
			</h4>
				</div>
				<div id="collapseOne" class="panel-collapse collapse in">
					<div class="panel-body">
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseTwo">
					点击我进行展开，再次点击我进行折叠。第 2 部分
				</a>
			</h4>
				</div>
				<div id="collapseTwo" class="panel-collapse collapse">
					<div class="panel-body">
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseThree">
					点击我进行展开，再次点击我进行折叠。第 3 部分
				</a>
			</h4>
				</div>
				<div id="collapseThree" class="panel-collapse collapse">
					<div class="panel-body">
						Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
					</div>
				</div>
			</div>
		</div>
		<input type="button" class="btn blue" value="点击我，呼唤弹窗，再来一遍" v-if="isShow" @click="isShow=!isShow">
		<ys-modal-component v-if="!isShow" style="display: block;" modal-title="温馨提示" ok-btn="确认购买" cancel-btn="去意已决" @on-ok="ok" @on-cancel="cancel">
			<div slot="modal-content">
				尊敬的用户，您购买的商品将于支付成功后3-7个工作日内发货，敬请周知。祝您购物愉快！
			</div>
		</ys-modal-component>
	</div>
</template>

<script>
	export default {
		name: 'test',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				isShow: true
			}
		},
		components: {
			'ys-modal-component': {
				props: {
					modalTitle: {
						type: String,
						default: '标题区域'
					},
					okBtn: {
						type: String,
						default: '确认'
					},
					cancelBtn: {
						type: String,
						default: '取消'
					}
				},
				template: `<div class="modal">
				        <div class="modal-header">
				            <h4>{{ modalTitle }}</h4>
				        </div>
				        <div class="modal-content">
				        	<div>
				            	<slot name="modal-content">内容区域</slot>
				            </div>
				        </div>
				        <div class="modal-footer">
				              <input class="btn blue" type="button" v-model="okBtn" @click="okHandle" />
				              <input class="btn" type="button" v-model="cancelBtn" @click="cancelHandle" />
				        </div>
			        </div>`,
				methods: {
					okHandle() {
						console.log("点击确定");
						this.$emit("on-ok");
					},
					cancelHandle() {
						console.log("点击取消");
						this.$emit("on-cancel");
					}
				}
			}
		},
		methods: {
	        ok: function () {
	          alert("欢迎您购买本产品");
	          this.isShow = !this.isShow;
	        },
	        cancel: function ()  {
	          this.isShow = !this.isShow;
	        }
      	}
	}
</script>
<style>
	
	.modal {
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, .3);
		border-radius: 6px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
		margin: 50px;
		height: 250px;
	}
	
	.modal-header {
		color: #fff;
		background: cadetblue;
		border-radius: 6px 6px 0 0;
		padding: 15px;
		border-bottom: 1px solid #5e9fa1;
	}
	
	.modal-content div {
		padding: 15px 10px;
	}
	
	.modal-footer {
		padding: 15px;
		text-align: right;
		border-top: 1px solid #e5e5e5;
	}
	
</style>