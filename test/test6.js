//算法题，实现一个函数，可以判断 a 字符串是否被包含在 b 字符串中
var a = 'abc';
var b = 'qwaberabczzz';

for(var j=0;j<b.length;j++){
	if(a[0]===b[j]){
		for(var i=0;i<a.length;i++){
			if(a[i]!==b[j+i]){
				console.log(i)
				break;
			}
			if(i===a.length-1){
				console.log('开始'+(j+1)+'结束'+(j+i+1));
			}
		}
	}
}
