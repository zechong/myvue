import Mock from 'mockjs'
  
export default Mock.mock('/mock/list', {  
	"list|3": [
    {
      "id|+1": 1,
      "title": "@ctitle(5,10)",
      "content": "@cparagraph(10,30)"
    }
	]
});