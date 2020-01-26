// var i = 0; // Starting point
// var images = [];//
// var time = 3000;

// image list
// images[0] = 'img/img2.jpg';
// images[1] = 'img/img3.jpg';
// images[2] = 'img/bas.jpg';
// images[3] = 'img/eli.jpg';
// images[4] = 'img/band.jpg';
// images[5] = 'img/nils.jpg';
// images[6] = 'img/img4.jpg';

// change image
// function slideShow(){
//   document.slide.src = images[i];
//
//   if(i < images.length - 1){
//     i++;
//   } else {
//     i = 0;
//   }
//
//   setTimeout("slideShow()", time);
// }
//
// window.onload = slideShow;

var imgArray = [
    'img/img2.jpg',
    'img/img3.jpg',
    'img/bas.jpg',
    'img/eli.jpg',
    'img/band.jpg',
    'img/nils.jpg',
    'img/img4.jpg'],
    curIndex = 0;
    imgDuration = 7000;

function slideShow() {
    document.getElementById('slide').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slide').src = imgArray[curIndex];
        document.getElementById('slide').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();
