let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let btn2 = document.getElementById("pop");
let number = Math.ceil(Math.random() * 1000);

let click = 0;
btn.onclick = function () {
  click += 1;
  if(click == 1 ){
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
  }
  
}