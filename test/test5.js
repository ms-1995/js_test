// 将数字转换成中文大写的表示，处理到万级别，例如 12345 -> 一万二千三百四十五
var number = ['零','一','二','三','四','五','六','七','八','九'];
var unit = ['十','百','千','万'];
function toLowerNum(num){
	var arr = [],a = [],str;
	arr = num.toString().split('');
	arr.forEach(x=>{
		a.push(number[x]);
	});
	a.reverse();
	for(var i in a){
		if(unit[i-1]&&a[i]!==number[0]){
			a[i] = a[i].concat(unit[i-1]);
		}
	}
	a.reverse();
	for(var i in a){
		if(a[i]===number[0]&&a[i-1]===number[0]){
			a[i-1]="";
		}
	}
	if(a[a.length-1]===number[0]){
		a[a.length-1]="";
	}
	str = a.join('');
	return str;
}
console.log(toLowerNum(10000)); // 输出 一万二千三百四十五
console.log(toLowerNum(10001)); // 输出 一万零一
console.log(toLowerNum(10011)); // 输出 一万零十一
console.log(toLowerNum(10000)); // 输出 一万