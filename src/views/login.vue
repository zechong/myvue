<template>
  <div class="login">
  	<el-row :gutter="20">
  		<el-col :md="8" :sm="4" :xs="2">&nbsp;</el-col>
			<el-col :md="8" :sm="16" :xs="20" >
				<el-card class="box-card">
					<el-form :model="login" status-icon :rules="rules" ref="form" v-loading="loading"  element-loading-text="正在登录...">
					  <el-form-item>
					  	<div class="tc">
					  		<img src="../assets/images/logo.png" width="110" />
					  	</div>
						</el-form-item>
					  <el-form-item prop="account">
				   	 	<el-input autofocus placeholder="account" prefix-icon="el-icon-edit" v-model="login.account" clearable @keyup.enter.native="submitForm('form')"></el-input>
					  </el-form-item>
					  <el-form-item prop="password">
				    	<el-input placeholder="password" prefix-icon="el-icon-view" v-model="login.password" type="password" clearable @keyup.enter.native="submitForm('form')"></el-input>
					  </el-form-item>
					  <!--<el-form-item label="记住密码" class="tr">
					    <el-switch v-model="login.auto" @click="this.login.auto == !this.login.auto"></el-switch>
					  </el-form-item>-->
					  <el-form-item class="tc">
				    	<el-button type="primary" style="width: 100%;"  @click="submitForm('form')" class="w100">立即登录</el-button>
					  </el-form-item>
					</el-form>
				</el-card>
			</el-col>
  		<el-col :md="8" :sm="4" :xs="2">&nbsp;</el-col>
		</el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
  	var checkPass = (rule, value, callback) => {
	    if (!value) {
	      return callback(new Error('请输入密码'));
	    }
			if (value == "123" && this.login.account == "admin") {
			  callback();
			} else {
			  callback(new Error('用户名或者密码错误'));
			}
	  };
    return {
      msg: 'Welcome to Your Vue.js App',
    	labelPosition: 'left',
    	loading: false,
	    login: {
	    	account: '',
	    	password: '',
	    	auto: false,
	    },
	    rules: {
	    	account: [
	        { required: true, message: '请输入帐号名称', trigger: 'blur' },
	      ],
	      password: [
	        { validator: checkPass , trigger: 'blur' },
	      ]
	    }
    }
  },
  methods: {
  	submitForm(formName) {
	    this.$refs[formName].validate((valid) => {
	      if (valid) {
  				this.loading = true;
	      	setTimeout(() => {
	      		this.$message({
					 		showClose: true,
				      message: '登录成功！',
				      type: 'success',
				      duration: 2000
			    	});
	  				this.loading = false;
	  				localStorage.setItem('username',this.login.account)
	  				if(this.$route.query.redirect){
		        	this.$router.replace({path: this.$route.query.redirect});
	  				}else{
		        	this.$router.replace({name: 'hello'});
	  				}
	      	},1000)
	      } else {
				 	this.$message({
				 		showClose: true,
			      message: '登录信息错误！',
			      type: 'error',
			      duration: 2000
				  });
					this.login.password = "";
	        return false;
	      }
	    });
	  },
  	onLogin() {
	   	this.$message({
		 		showClose: true,
	      message: '登录成功！',
	      type: 'success',
	      duration: 2000
	    });
	  }
  },
  mounted: function(){
  	if(localStorage.getItem('username')) {
			if(this.$route.query.redirect){
        	this.$router.replace({path: this.$route.query.redirect});
			}else{
        	this.$router.replace({name: 'hello'});
			}
  	}
  }
}
</script>
<style>
	body {
		background: #efefef url(../assets/images/bg.png) no-repeat center bottom;
	}
	.login {
		padding: 183px 20px;
	}
	.tc {
		text-align: center;
	}
	.tr {
		text-align: right;
	}
</style>
