var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var RADIUS=5;
var MARGIN_LEFT=40;
var MARGIN_TOP=100;

var myDate=new Date();

window.onload=function(){
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");

	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	setInterval(
		function(){
			render(context);
			update();
		}
		, 50);
	//render(context);
}
function update(){
	myDate=new Date();
}
function render(cxt){
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	var days=myDate.getDate();
	var hours=myDate.getHours();
	var minutes=myDate.getMinutes();
	var seconds=myDate.getSeconds();
	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(days/10),cxt);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(days%10),cxt);

	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(hours/10),cxt);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(hours%10),cxt);
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),10,cxt);
	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(minutes/10),cxt);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(minutes%10),cxt);
	renderDigit(MARGIN_LEFT+108*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),10,cxt);
	renderDigit(MARGIN_LEFT+117*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(seconds/10),cxt);
	renderDigit(MARGIN_LEFT+132*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(seconds%10),cxt);
}
function renderDigit(x,y,num,cxt){
	cxt.fillStyle = "rgb(0,102,153)";
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+(2*j+1)*(RADIUS+1),y+(2*i+1)*(RADIUS+1),RADIUS,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}