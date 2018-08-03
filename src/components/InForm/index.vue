<template>
	<el-form status-icon :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
		<el-form-item label="年龄" prop="age" :rules="[
	      { required: true, message: '年龄不能为空'},
	      { type: 'number', message: '年龄必须为数字值'}
	    ]">
			<el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off" @input.native="updateVal($event.target.value)"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
			<el-button @click="resetForm('numberValidateForm')">重置</el-button>
			<slot name="desc">123</slot>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		props: {
			age: {
				default: 18
			},
		},
		data() {
			return {
				numberValidateForm: {
					age: ''
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
				this.$emit('clearText');
			},
			updateVal(val) {
				this.$emit('input', val);
			}
		},
		mounted: function() {
			this.numberValidateForm.age = this.age;
		}
	}
</script>
<style scoped="">
	.el-form-item:last-child {
		margin-bottom: 5px;
	}
</style>