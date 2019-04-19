var pixelRatio = 1 / window.devicePixelRatio; 
var html = document.getElementsByTagName('html')[0];
var pageWidth = html.getBoundingClientRect().width;
html.style.fontSize = pageWidth / 10 + "px";