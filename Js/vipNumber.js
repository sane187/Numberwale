let categoryCont=document.querySelector(".categories-cont");

const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
arr1.forEach(element =>{
    const carouselItem =document.createElement("div");
    carouselItem.innerText="UNIQUE Numbers"
    carouselItem.classList.add("category-name")
   categoryCont.appendChild(carouselItem)
})


let bool=false;
 var z = document.querySelector("#hard-btn");
 let a =document.querySelector("#collapseExample");



z.addEventListener("click",function myFunction() {
if(!bool){
bool=true;
a.style.display="block";
}

else{
    a.style.display="none";
    bool=false;
}

})
