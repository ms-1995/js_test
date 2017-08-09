var parseToMoney = function(num){
	var strs = num.toString().split('.');
	if(strs[1]){
		strs[1] = '.'+strs[1];
	}
	var arr = [],n=0;
	strs[0].split('').reverse().forEach((i)=>{
		if(n>2){
			n = 0;
			arr.unshift(',');
		}
		arr.unshift(i);
		n++;
	});
	return arr.join('')+(strs[1]||"");
}
parseToMoney(1234.56);
// '1234567891'.replace(/(\d+?)(?=(\d{3})+$)/g,'$1,');//(\d{3})匹配3位数字
// //+? 重复1次或更多次，但尽可能少重复 ?=向前匹配