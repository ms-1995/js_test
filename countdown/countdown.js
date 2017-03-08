var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var RADIUS;
var MARGIN_LEFT;
var MARGIN_TOP;

const endTime=new Date(2016,7,1,0,0,0);
/*
 var endTime=new Date();
endTime.setTime(endTime.getTime()+3600*1000);
*/
var curShowTimeSeconds = 0;

var balls=[];
const colors=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];
window.onload=function(){

	WINDOW_WIDTH=document.body.clientWidth;
	WINDOW_HEIGHT=document.body.clientHeight;
	MARGIN_LEFT=Math.round(WINDOW_WIDTH/10);
	RADIUS=Math.round(WINDOW_WIDTH*4/5/147)-1;
	MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);

	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");

	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;

	curShowTimeSeconds=getCurrentShowTimeSeconds();
	setInterval(
		function(){
			render(context);
			update();
		}
		, 50);
	//render(context);
}
function getCurrentShowTimeSeconds(){
	var curTime=new Date();
	var ret=endTime.getTime()-curTime.getTime();
	ret=Math.round(ret/1000);
	return ret >=0? ret:0;
}
function update(){
	var nextShowTimeSeconds=getCurrentShowTimeSeconds();
	var nextDays=parseInt(nextShowTimeSeconds/86400);
	var nextHours=parseInt((nextShowTimeSeconds-nextDays*86400)/3600);
	var nextMinutes=parseInt((nextShowTimeSeconds-nextHours*3600-nextDays*86400)/60);
	var nextSeconds=nextShowTimeSeconds%60;

	var curDays=parseInt(curShowTimeSeconds/86400);
	var curHours=parseInt((curShowTimeSeconds-curDays*86400)/3600);
	var curMinutes=parseInt((curShowTimeSeconds-curHours*3600-curDays*86400)/60);
	var curSeconds=curShowTimeSeconds%60;

	if(nextSeconds!=curSeconds){
	/*	*/
		if(parseInt(curDays/10)!=parseInt(nextDays/10)){
			addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(curDays/10));
		}
		if(parseInt(curDays%10)!=parseInt(nextDays%10)){
			addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curDays%10));
		}
		if(parseInt(curHours/10)!=parseInt(nextHours/10)){
			addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(curHours/10));
		}
		if(parseInt(curHours%10)!=parseInt(nextHours%10)){
			addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(curHours%10));
		}
		if(parseInt(curMinutes/10)!=parseInt(nextMinutes/10)){
			addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(curMinutes/10));
		}
		if(parseInt(curMinutes%10)!=parseInt(nextMinutes%10)){
			addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(curMinutes%10));
		}
		if(parseInt(curSeconds/10)!=parseInt(nextSeconds/10)){
			addBalls(MARGIN_LEFT+117*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(curSeconds/10));
		}
		if(parseInt(curSeconds%10)!=parseInt(nextSeconds%10)){
			addBalls(MARGIN_LEFT+132*(RADIUS+1),MARGIN_TOP+25*(RADIUS+1),parseInt(curSeconds%10));
		}
		curShowTimeSeconds=nextShowTimeSeconds;
	}
	updateBalls();
}
function updateBalls(){
	for(var i=0;i<balls.length;i++){
		balls[i].x+=balls[i].vx;
		balls[i].y+=balls[i].vy;
		balls[i].vy+=balls[i].g;

		if(balls[i].y>=WINDOW_HEIGHT-RADIUS){
			balls[i].y=WINDOW_HEIGHT-RADIUS;
			balls[i].vy=-balls[i].vy*0.75;
		}
	}
	var cnt=0;//当前画面中的小球
	for(var i=0;i<balls.length;i++){
		if(balls[i].x+RADIUS>0&&balls[i].x-RADIUS<WINDOW_WIDTH){
			balls[cnt++]=balls[i];
		}
	}	
	while(balls.length>cnt){
			balls.pop();//删除数组中最后一个元素
		}
	
}
function addBalls(x,y,num){
	for(var i=0;i<digit[num].length;i++)
		for(var j=0;j<digit[num][i].length;j++)
			if(digit[num][i][j]==1){
				var aBall={
					x:x+(2*j+1)*(RADIUS+1),
					y:y+(2*i+1)*(RADIUS+1),
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall);
			}
			
}
function render(cxt){
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);//刷新指定区域
	var days=parseInt(curShowTimeSeconds/86400);
	var hours=parseInt((curShowTimeSeconds-days*86400)/3600);
	var minutes=parseInt((curShowTimeSeconds-hours*3600-days*86400)/60);
	var seconds=curShowTimeSeconds%60;
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
/**/
	for(var i=0;i<balls.length;i++){

		cxt.fillStyle=balls[i].color;
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,2*Math.PI,true);
		cxt.closePath();
		cxt.fill();
	}
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