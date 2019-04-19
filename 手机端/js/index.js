var pixelRatio = 1 / window.devicePixelRatio; 
var html = document.getElementsByTagName('html')[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 10 + "px";
var banner = document.getElementById("banner");
var imgs = banner.getElementsByTagName("img");
var circles = document.getElementById("circles");
var buttons = circles.getElementsByTagName("a");
buttons[0].onclick = function(){
	for(var i = 0;i<imgs.length;i++){
		imgs[i].style.transitionProperty = "left";
		imgs[i].style.transitionDuration = "0.5s";
	}
	imgs[0].style.left = 0+"rem";
	imgs[1].style.left = 10+"rem";
	imgs[2].style.left = 20+"rem";
	imgs[3].style.left = 30+"rem";
	buttons[0].setAttribute("class","checked"); 
	buttons[1].setAttribute("class",""); 
	buttons[2].setAttribute("class",""); 
	buttons[3].setAttribute("class",""); 
}
buttons[1].onclick = function(){
	for(var i = 0;i<imgs.length;i++){
		imgs[i].style.transitionProperty = "left";
		imgs[i].style.transitionDuration = "0.5s";
	}
	imgs[0].style.left = -10+"rem";
	imgs[1].style.left = 0+"rem";
	imgs[2].style.left = 10+"rem";
	imgs[3].style.left = 20+"rem";
	buttons[0].setAttribute("class",""); 
	buttons[1].setAttribute("class","checked"); 
	buttons[2].setAttribute("class",""); 
	buttons[3].setAttribute("class",""); 
}
buttons[2].onclick = function(){
	for(var i = 0;i<imgs.length;i++){
		imgs[i].style.transitionProperty = "left";
		imgs[i].style.transitionDuration = "0.5s";
	}
	imgs[0].style.left = -20+"rem";
	imgs[1].style.left = -10+"rem";
	imgs[2].style.left = 0+"rem";
	imgs[3].style.left = 10+"rem";
	buttons[0].setAttribute("class",""); 
	buttons[1].setAttribute("class",""); 
	buttons[2].setAttribute("class","checked"); 
	buttons[3].setAttribute("class",""); 
}
buttons[3].onclick = function(){
	for(var i = 0;i<imgs.length;i++){
		imgs[i].style.transitionProperty = "left";
		imgs[i].style.transitionDuration = "0.5s";
	}
	imgs[0].style.left = -30+"rem";
	imgs[1].style.left = -20+"rem";
	imgs[2].style.left = -10+"rem";
	imgs[3].style.left = 0+"rem";
	buttons[0].setAttribute("class",""); 
	buttons[1].setAttribute("class",""); 
	buttons[2].setAttribute("class",""); 
	buttons[3].setAttribute("class","checked"); 
}
var nav = document.getElementById("nav");
var navLi = nav.getElementsByTagName("li");
var nav_circles = document.getElementById("nav_circles");
var nav_buttons = nav_circles.getElementsByTagName("a");
nav_buttons[0].onclick = function(){
	for(var i = 0;i<navLi.length;i++){
		navLi[i].style.transitionProperty = "left";
		navLi[i].style.transitionDuration = "0.5s";
	}
	navLi[0].style.left = 0+"rem";
	navLi[1].style.left = 10+"rem";
	nav_buttons[0].setAttribute("class","nav_checked"); 
	nav_buttons[1].setAttribute("class",""); 
}
nav_buttons[1].onclick = function(){
	for(var i = 0;i<navLi.length;i++){
		navLi[i].style.transitionProperty = "left";
		navLi[i].style.transitionDuration = "0.5s";
	}
	navLi[0].style.left = -10+"rem";
	navLi[1].style.left = 0+"rem";
	nav_buttons[0].setAttribute("class",""); 
	nav_buttons[1].setAttribute("class","nav_checked"); 
}
var nowTime = new Date();
var finalTime = Number(new Date(nowTime.getFullYear(),nowTime.getMonth(),nowTime.getDate()+1,0,0,0));
var diffTime = finalTime-Number(nowTime);
var diffsec = Math.ceil((diffTime/1000)%60);
var diffhou = Math.floor(diffTime/(1000*60*60));
var diffmin = Math.floor(diffTime/(1000*60)%60);
var h = document.getElementById("hours");
var m = document.getElementById("minute");
var s = document.getElementById("second");
h.innerHTML = diffhou;
m.innerHTML = diffmin;
s.innerHTML = diffsec;