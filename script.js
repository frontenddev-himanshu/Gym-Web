let nav = document.querySelector(".nav-links");
let hamb = document.querySelector(".nav-click");

let bar = 0;

hamb.addEventListener("click",function(){

  if(bar == 0) {
    nav.style.visibility = "visible";
    nav.style.opacity = 1;
    bar = 1;
  }
  
  else {
    nav.style.visibility = "hidden";
    nav.style.opacity = 0;
    bar = 0;
  }
  

})
