// 简单的模板引擎
var render = function(template,data){
	return template.replace(/\{\{(.+?)\}\}/g,function(m,m1){//第二个参数为函数时
		return data[m1];
	});
}
var sentence = render('我是{{name}}，年龄{{age}}，性别{{sex}}',{
	name:'姓名',
	age:18
});
console.log(sentence);
