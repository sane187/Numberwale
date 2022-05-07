let menuButton=document.querySelector(".nav-mob-toggler");
let overlayDiv=document.querySelector(".overlay-content");
let categoryCont=document.querySelector(".categories-cont");

let showMenu = false;
window.addEventListener("scroll",function(){
    let nav=document.getElementById("navbar-top");
    if(window.pageYOffset==0){
     
      nav.classList.remove("fixed-top");
     
    }
    if(window.pageYOffset>0){
     
      nav.classList.add("fixed-top");
    
     }
  })
  
const toggleMenu =()=>{
    let menuBtn=document.getElementById("nav-mob-icon");

    if(showMenu==false){
    
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-xmark");
        overlayDiv.style.width="100vw";
        overlayDiv.style.height="100%";
       showMenu =true;
    }
   else{
    
    menuBtn.classList.add("fa-bars");
    menuBtn.classList.remove("fa-xmark");
    overlayDiv.style.width=0;
    overlayDiv.style.height="0";
   showMenu =false;
   }
  
}

menuButton.addEventListener("click", toggleMenu);
// const aj =()=>{
//     console.log("scroll")
//     window.scrollTo(500, 0);
// }

// overlayDiv.addEventListener("scroll",aj)


// document.onreadystatechange = function() {
// 	if (document.readyState !== "complete") {
// 		document.querySelector("body").style.visibility = "hidden";
// 		document.querySelector("#loader").style.visibility = "visible";
// 	} else {
// 		document.querySelector("#loader").style.display = "none";
// 		document.querySelector("body").style.visibility = "visible";
// 	}
// };


// const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
// arr1.forEach(element =>{
//     const carouselItem =document.createElement("div");
//     carouselItem.innerText="UNIQUE Numbers"
//     carouselItem.classList.add("category-name")
//     // categoryCont.appendChild(carouselItem)
// })


// function animateValue(id, start, end, duration) {
//     if (start === end) return;
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 20 : -20;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// animateValue("value", 1000, 10000, 10000);