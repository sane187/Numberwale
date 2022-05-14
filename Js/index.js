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


const select=document.querySelector(".vip-select");
const pills=document.querySelector("#select-pills");

let filterArr=[];

select.addEventListener("change",function(event){
  const val=event.target.value;
  if(!filterArr.includes(val))
  {filterArr.push(val);
  pillsDisplay();
}
})

const clearCategory=()=>{
  filterArr.splice(0,filterArr.length);
  pills.innerHTML="";
  
}

const pillsDisplay =()=>{
  pills.innerHTML="";
filterArr.forEach((item,index)=>{

  const pillDiv=document.createElement("div");
pillDiv.className="pill-div";

  const p=document.createElement("p");
  p.innerText=item;
  p.className="pills-content";
  const btn=document.createElement("button")
  btn.innerText="X";
  btn.classList.add("pill-btn",`${index}`); 
  btn.addEventListener('click', function(e){
    let rmv = e.target.classList[1];
    if (rmv > -1) {
      filterArr.splice(rmv, 1);}
      pillsDisplay();
  }
  );
  pillDiv.append(p);
  pillDiv.append(btn);
  pills.append(pillDiv);
  
})
}
