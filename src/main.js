var overlay = document.querySelector("div.overlay");
var galImg = document.querySelector("div.overlay img");

var allImg = document.querySelectorAll("div.hallway div img");

for (let i=0; i < allImg.length; i++) {
  allImg[i].addEventListener("click", popUp )
}


function popUp() {
 var currentSrc = this.src;
  galImg.src = currentSrc;
  overlay.style.display = "flex";
}


overlay.addEventListener("click", function() {
  overlay.style.display = "none";
})