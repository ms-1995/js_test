// 模拟鼠标事件
var event = document.createEvent('MouseEvents');
event.initMouseEvent("click",true,true,document.defaultView,0,436,506,470,396,false,false,false,false,0,null);
document.body.onclick(event){
	console.log(event.target);
}
document.body.dispatchEvent(event);
