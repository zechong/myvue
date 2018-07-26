<template>
	<div class="Vuecheck">
		<div class="chekbox">
			<div>
				<input type="checkbox" name='checkboxinput' id="ck01" value="check" />
				<label for="ck01">check</label>
				<input type="checkbox" name='checkboxinput' id="ck02" value="check" />
				<label for="ck02">check</label>
			</div>
			<template v-for='(checkA,$index) in checkList'>
				<input :id="$index" type='checkbox' class='input-checkbox' v-model='checkA.checked' @click="checkedAll($index)">
				<label :for="$index">全选</label>
				<template v-for='checkB in checkA.checkboxData'>
					<input :id="$index + checkB.id" type='checkbox' name='checkboxinput' class='input-checkbox' v-model='checkA.checkboxModel' :value='checkB.id' @click="checkFunc($index)">
					<label :for="$index + checkB.id">{{checkB.value}}</label>
				</template>
				<br />
			</template>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Vuecheck',
		data() {
			return {
				checkList: [{
						checkboxData: [{
							id: '1',
							value: '苹果'
						}, {
							id: '2',
							value: '荔枝'
						}, {
							id: '3',
							value: '香蕉'
						}, {
							id: '4',
							value: '火龙果'
						}],
						checkboxModel: ['1', '3', '4'],
						checked: false
					},
					{
						checkboxData: [{
							id: '1',
							value: '苹果'
						}, {
							id: '2',
							value: '荔枝'
						}, {
							id: '3',
							value: '香蕉'
						}, {
							id: '4',
							value: '火龙果'
						}],
						checkboxModel: ['1', '2', '3', '4'],
						checked: true
					}
				]
			}
		},
		methods: {
			checkedAll: function($index) {
				var _this = this.checkList[$index];
				if(!_this.checked) { //实现反选
					_this.checkboxModel = [];
				} else { //实现全选
					_this.checkboxModel = [];
					_this.checkboxData.forEach(function(item) {
						_this.checkboxModel.push(item.id);
					});
				}
			},
			checkFunc: function($index) {
				var _this = this.checkList[$index];
				if(_this.checkboxModel.length == _this.checkboxData.length) {
					_this.checked = true;
				} else {
					_this.checked = false;
				}
			}
		}
	}
</script>
<style>
	.Vuecheck {
		margin: 20px;
	}
	
	.Vuecheck .chekbox {
		margin-bottom: 10px;
	}
	
	.Vuecheck .chekbox .parentBox {
		margin-left: 8px;
	}
	
	label {
		font-weight: normal;
		margin-right: 10px;
		vertical-align: top;
		vertical-align: text-bottom \9;
		cursor: pointer;
	}
</style>