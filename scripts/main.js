let myImage = document.querySelector('#crochet-image');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/crochet1.jpg') {
    myImage.setAttribute ('src','images/crochet2.jpg');
  } else {
    myImage.setAttribute ('src','images/crochet1.jpg');
  }
}

document.querySelector("#cici-photo").addEventListener("click", () => {
    alert("Hey! Nothing to see here. Stop poking:(");
  });


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Welcome to my page, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my page, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}