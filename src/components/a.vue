<template>
	<div class="vue">
		{{msg}}
		<input v-focus="{'color':'#eee'}" class="form-control" />
		<div v-demo:foo.a.b="msg"></div>
	</div>
</template>

<script>
	export default {
		name: 'vue',
		data() {
			return {
				"msg": "hello"
			}
		},
		methods: {
       	},
    	directives: {
    		"focus":{
    			inserted : function(el,binding){
    				el.style.backgroundColor = binding.value.color;
    				// 聚焦元素
    				el.focus();
    			}
    		},
    		"demo":{
    			update : function(el,binding,vnode){
    				var s = JSON.stringify
				    el.innerHTML =
				      'name: '       + s(binding.name) + '<br>' +
				      'value: '      + s(binding.value) + '<br>' +
				      'expression: ' + s(binding.expression) + '<br>' +
				      'argument: '   + s(binding.arg) + '<br>' +
				      'modifiers: '  + s(binding.modifiers) + '<br>' +
				      'vnode keys: ' + Object.keys(vnode).join(', ')
    			}
    		}
    	},
    	mounted: function(){
    		setTimeout(()=>{
	    		this.msg = "hi";
    		},3000)
    	}
	}
</script>