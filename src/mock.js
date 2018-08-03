import Mock from 'mockjs'
  
export default Mock.mock('/mock/list', {  
	"list|3": [
    {
      "id|+1": 1,
      "title": "@ctitle(5,10)",
      "content": "@cparagraph(10,30)",
      "src": Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
    }
	]
});