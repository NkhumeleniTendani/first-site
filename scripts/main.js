var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/meag2.jpg') {
      myImage.setAttribute ('src','images/meag2.jpg');
    } else {
      myImage.setAttribute ('src','images/meag2.jpg');
    }
}

//User Name Code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello World!, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome Back, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
