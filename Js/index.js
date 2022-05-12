let menuButton=document.querySelector(".nav-mob-toggler");
let overlayDiv=document.querySelector(".overlay-content");

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



// let bool=false;
//  var z = document.querySelector("#hard-btn");
//  let a =document.querySelector("#collapseExample");



// z.addEventListener("click",function myFunction() {
// if(!bool){
// bool=true;
// a.style.display="block";
// }

// else{
//     a.style.display="none";
//     bool=false;
// }

// })

