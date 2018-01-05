var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc==='images/website-drawing-scan.png'){
		myImage.setAttribute('src', 'images/website-drawing-scan2.png');
	}else {
		myImage.setAttribute('src', 'images/website-drawing-scan.png');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	localStorage
	myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')){
	setUserName();
}else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}