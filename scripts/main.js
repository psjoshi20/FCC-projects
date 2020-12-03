let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/norman.png') {
      myImage.setAttribute('src','images/field.png');
    } else {
      myImage.setAttribute('src','images/norman.png');
    }
}