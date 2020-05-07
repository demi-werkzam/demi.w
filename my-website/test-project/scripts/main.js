let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/my-pizza.jpeg') {
      myImage.setAttribute ('src','../images/amsterdam.jpeg');
    } else {
      myImage.setAttribute ('src','../images/my-pizza.jpeg');
    }
}
