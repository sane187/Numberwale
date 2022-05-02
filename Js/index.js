let menuBtn=document.querySelector(".navbar-toggler-icon")
let showMenu = false;

const toggleMenu =()=>{

    if(showMenu==false){
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-xmark");
       showMenu =true;
    }
   else{
    menuBtn.classList.add("fa-bars");
    menuBtn.classList.remove("fa-xmark");
   showMenu =false;
   }
}

menuBtn.addEventListener("click", toggleMenu);

// document.onreadystatechange = function() {
// 	if (document.readyState !== "complete") {
// 		document.querySelector("body").style.visibility = "hidden";
// 		document.querySelector("#loader").style.visibility = "visible";
// 	} else {
// 		document.querySelector("#loader").style.display = "none";
// 		document.querySelector("body").style.visibility = "visible";
// 	}
// };
