const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")

circleButton.onclick = function(){
  figure.classList.add("rounded")
}

squareButton.onclick = function(){
  figure.classList.remove("rounded")
}

figure.addEventListener('mouseover',function() {
  figure.classList.toggle("rounded");
},false);

figure.addEventListener('mouseleave',function() {
  figure.classList.toggle("rounded");
},false);