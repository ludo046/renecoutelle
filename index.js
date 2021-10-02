//index ========================================================

const bars = document.getElementById("nav-action");
const nav = document.getElementById("nav");

bars.addEventListener("click", barClicked, false);

function barClicked(){
    bars.classList.toggle('active');
    nav.classList.toggle('visible')
}

//galery =======================================================

let angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","transform: rotateY("+ angle +"deg");
}
