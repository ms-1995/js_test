// 解析url中所有参数
var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';
var parseParam = function(url){
	url = decodeURI(url);//对url进行解码
	let start = /[?]/.exec(url).index+1;//正则获得参数开始位置
	let end = url.length;
	if(/[#]/.exec(url)){//判断是否存在锚
		end = /[#]/.exec(url).index;
	}
	let param = url.substring(start,end);//截取字符串
	let params = param.split('&');//分割为字符数组
	let set = {},title,value;
	params.forEach((i)=>{
		title = i.split('=')[0];
		value = i.split('=')[1] || true;
		if(!isNaN(parseInt(value,10))){//判断是否为数字
			value = parseInt(value);
		}
		if(!set[title]){//一个值时直接赋值
			set[title] = value;
		}else if(typeof set[title] !== 'object'){
			set[title] = [set[title],value];//转换为数组并插入新值
		}else {
			(set[title]).push(value);
		}
	});
	return set;
}
console.log(parseParam(url));
