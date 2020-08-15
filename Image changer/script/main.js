var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === './pic/whale-icon.png') {
        myImage.setAttribute('src', './pic/octopus-icon.png');
    } else {
        myImage.setAttribute('src', './pic/whale-icon.png');
    }
}