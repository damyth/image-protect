
console.log("works");
const $ = require('jquery');
const alertify = require('alertifyjs');



// document.getElementById("cutekitten").src = "http://placekitten.com/600/450";

$(window).mousedown(function (e) {
    if(e.button == 2) { // right click
        alertify.alert('Right Click Blocked');
      return false; // do nothing!
    }
  });

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

canvas.width = 903;
canvas.height = 657;


// var devtools = /./;
// devtools.toString = function() {
//   this.opened = true;
// }

// console.log('%c', devtools);
// alertify.alert(devtools.opened);
// if(devtools.opened){
//     alertify.alert('Please close Dev tools and refresh');
// }else{
    var background = new Image();
    background.src = "img/1.jpeg";

    background.onload = function(){
        ctx.drawImage(background,0,0);   
    }
// }
