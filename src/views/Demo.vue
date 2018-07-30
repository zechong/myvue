<template>
  <div class="Demo">
  	{{ msg }}
		<input type="text"  v-focus />
  	<my-component>Hello world!</my-component>
  	<button @click="toshow()">点击让子组件显示</button>  
	  <children>  
  	  <span slot="first">12345</span>  
	  </children> 
  </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'Demo',
  data () {
    return {
      msg: 'This is a Vue Demo',
      abc: 0
    }
  },
  computed: {
  	fun : function (){
  		this._data.msg = "hello,world"
  	}
  },
  methods: {  
    toshow: function () {
    	this.$children[1].tohidden = true;
    }  
	}, 
	directives: {
	  focus: {
	  	inserted: function (el) {
		    // 聚焦元素
		    el.focus()
		  }
	  }
	},
	components: {
		"myComponent" : {
		  render: function (createElement) {
		 		 	return createElement('div', this.$slots.default)
		 		 	
		 		 	
//	  	 	if (this.items.length) {
//			    return createElement('ul', this.items.map(function (item) {
//			      return createElement('li', item.name)
//			    }))
//			  } else {
//			    return createElement('p', 'No items found.')
//			  }

//				var self = this
//			  return createElement('input', {
//			    domProps: {
//			      value: self.value,
//			      class: "input-form",
//			      id: "name",
//			      name: "name",
//			      type: "text"
//			    },
//			    on: {
//			      input: function (event) {
//			        self.value = event.target.value
//			        self.$emit('input', event.target.value)
//			      },
//			      focus: function () {
//			      	console.log(1)
//			      },
//			      keyup: function (event) {
//					    // 如果触发事件的元素不是事件绑定的元素
//					    // 则返回
//					    if (event.target !== event.currentTarget) return
//					    // 如果按下去的不是 enter 键或者
//					    // 没有同时按下 shift 键
//					    // 则返回
//					    
//					    if (!event.shiftKey || event.keyCode !== 13) return
//			      	console.log(333)
//			      	
//					    // 阻止 事件冒泡
//					    event.stopPropagation()
//					    // 阻止该元素默认的 keyup 事件
//					    event.preventDefault()
//					    
//					    // ...
//					  }
//			    }
//			  })
			},
		  props: {
		    level: {
		      type: Number,
		    }
		  },
		  data:function(){
		  	return {
		  		value: 13,
			  	items: [
		  			{name:1},
		  			{name:2},
		  			{name:3}
			  	]
		  	}
		  }
		},
		"children": {
			template: "<div v-if='tohidden' @click='tohide()'><slot name='first'></slot>这里是子组件</div>",  
			methods: {  
        tohide: function () {
            this.tohidden = !this.tohidden;
        }  
	    },
	    data: function(){
				return {
					tohidden: false  
				}
			}
		}
	}
}
</script>
