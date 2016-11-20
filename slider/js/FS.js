function slider(id,width,height,time){
	const SLIDER_WIDTH = width;
	const SLIDER_HEIGHT = height;
	const SLIDER_TIME = time || 2000;
	const SLIDER_X = 100;
	const SLIDER_ID = id;
	let slider = document.querySelector(SLIDER_ID);
	let slider_list = slider.querySelector('ul');
	let slider_li = slider_list.querySelectorAll('li');
	let nextpage = document.querySelector(SLIDER_ID+'_next');
	let prevpage = document.querySelector(SLIDER_ID+'_prev');
	let length = slider_li.length;
	let count = 0;
	slider.style.width = SLIDER_WIDTH + 'px';
	slider_list.style.width = SLIDER_WIDTH + 'px';
	slider_list.style.height = SLIDER_HEIGHT + 'px';
	for(let i = 0 ; i < length ; i++){
		slider_li[i].style.width = SLIDER_WIDTH+'px';
		slider_li[i].style.left = -SLIDER_X+'%';
	}
	slider_li[count].style.left = '0%';
	let timer = setInterval(next, SLIDER_TIME);
	function next(){
		count += 1;
		let i = count<0?(length-Math.abs(count)%length)%length:count%length;
		let i_next = (i + 1)%length;
		let i_prev = (length + i - 1)%length;
		// slider_li[i].style.left = '0%';
		// slider_li[i_prev].style.left = -SLIDER_X+'%';
		/**/
		let left = 0;
		let t = setInterval(function(){
			left += 5;
			slider_li[i_prev].style.left = left+'%';
			slider_li[i].style.left = (left-SLIDER_X)+'%';
			if(left === 100){
				slider_li[i_prev].style.left = -SLIDER_X+'%';
				clearInterval(t);
			}
		},10);
		/**/
	}
	function prev(){
		count -= 1;
		let i = count<0?(length-Math.abs(count)%length)%length:count%length;
		let i_next = (i + 1)%length;
		let i_prev = (length + i - 1)%length;
		// slider_li[i].style.left = '0%';
		// slider_li[i_next].style.left = -SLIDER_X+'%';
		/**/
		let left = 0;
		let t = setInterval(function(){
			left += 5;
			slider_li[i].style.left = (SLIDER_X-left)+'%';
			slider_li[i_next].style.left = -left+'%';
			if(left === 100){
				clearInterval(t);
			}
		},10);
		/**/
	}
	nextpage.onclick = function(){
		next();
		clearInterval(timer);
		timer = setInterval(next, SLIDER_TIME);
	}
	prevpage.onclick = function(){
		prev();
		clearInterval(timer);
		timer = setInterval(next, SLIDER_TIME);
	}
}