let menuButton=document.querySelector(".nav-mob-toggler");
let overlayDiv=document.querySelector(".overlay-content");
let cardArr=document.querySelectorAll(".card-row")
let cardSmArr=document.querySelectorAll(".card-sm-row")
 const card=[...cardArr];
 const cardSm=[...cardSmArr];
 

 const Arr=[1,2,3,4,5,6,7,8,9,10,11,12];
 const Arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
 const Arr3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

 
//------------------------------------------------------------------//

 card.map(item =>{ 
  Arr.forEach(val=>{
    let dov=document.createElement("div");
    dov.classList.add("col-xl-3","col-lg-3","col-md-3","col-18","pull-up")
    dov.innerHTML= 
    `<div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 ">
             <i class="fa-solid fa-crown"> </i>
             <h4 class="mb-0">₹3500/-</h4>
           </div>
     <div class="d-flex flex-column bg-cont">
      
     
    
     <div class="d-flex flex-column align-items-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
    <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
    <div>
    <button class="me-2 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
    <button><i class="fa-solid fa-heart"></i> 0</button> </div>
    <div class="ms-3">
    <button class="me-2"><i class="fa-solid fa-cart-shopping"></i></button> 
    <button>Buy</button> </div>
    
    </div>
    </div>
    </div>
    `;
  item.appendChild(dov);
  })

 });

cardSm.map(item =>{
  Arr.forEach(val=>{
    let dov=document.createElement("div");
    dov.classList.add("col-6","col-md-6","col-18","pull-up")
    dov.innerHTML= 
    `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-between align-items-center col-div px-2 my-1">
        <i class="fa-solid fa-crown"> </i> 
        <h4 class="mb-0">₹3500/-</h4>
      </div>
<div class="d-flex flex-column bg-cont">
 


<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
<div>
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
<div class="ms-md-5 ms-2">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
    `;
  item.appendChild(dov);
  })
})

//------------------------------------------------------------------------------------------------------//
let showMenu = false;
window.addEventListener("scroll",function(){
    let nav=document.getElementById("navbar-top");
    if(window.pageYOffset==0){
      nav.classList.remove("fixed-top");
      nav.style.boxShadow="none"
    }
    if(window.pageYOffset>0){  
      nav.classList.add("fixed-top");
      nav.style.boxShadow="0 8px 6px -6px black"
     }
  })
  window.addEventListener("scroll",function(){
    if (window.matchMedia("(max-width: 992px)").matches) {
    
    
    let smallnav=document.querySelector("#sm-nav-input");
   
     if(window.pageYOffset==0 || window.pageYOffset<50){
      smallnav.classList.remove("fixed-top","py-2");
      smallnav.style.boxShadow="none"

    }
    if(window.pageYOffset>50){  
      smallnav.classList.add("fixed-top","py-2");
      smallnav.style.boxShadow="0 8px 6px -6px black"
     }
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
  if(!filterArr.includes(val) )
  {filterArr.push(val);
  pillsDisplay();
}
})

const clearCategory=()=>{
  filterArr.splice(0,filterArr.length);
  pills.innerHTML="";
  select.selectedIndex=0
  
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


const select2=document.querySelector(".vip-select-2");
const pills2=document.querySelector("#select-pills-2");

let filterArr2=[];



const eng=document.getElementById("eng-btn");
const hin=document.getElementById("hin-btn");
const eng1 =document.querySelector(".eng-text");
const hin1 =document.querySelector(".hin-text");
const headToggle=document.querySelector(".step-toggle-heading")




const toggleEng =()=>{
 
  if(eng.classList.length<1){
  eng.classList.add("active");
  eng1.style.display="block";
  hin1.style.display="none"
  hin.classList.remove("active")
  headToggle.innerText="EASY STEPS TO BUY YOUR VIP NUMBER ?"
}


}

const toggleHin =()=>{
  if(hin.classList.length<1){ hin.classList.add("active"); hin1.style.display="block";eng.classList.remove("active"); hin.style.border
  eng1.style.display="none";
  headToggle.innerText="अपना वीआईपी नंबर खरीदने के लिए आसान कदम?"
}
  
}

//------Card Vip ----------------------------//
let cardArr2=document.querySelectorAll(".card-vip-row")
 const card2=[...cardArr2];


 card2.map(item =>{ 
   
  
  Arr3.forEach(val=>{
    let dov=document.createElement("div");
    dov.classList.add("col-xl-4","col-lg-4","col-md-4","col-18","pull-up")
dov.innerHTML= 
`
<div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-around align-items-center col-div mt-2 mb-1">
        <i class="fa-solid fa-crown"> </i>
        <h4 class="mb-0">₹3500/-</h4>
      </div>
<div class="d-flex flex-column bg-cont" style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;">
 


<div class="d-flex flex-column align-items-center col-div-2 mt-2">
  
<h2 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h2>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
<div>
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
<div class="ms-3">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
`;
  item.appendChild(dov);
  })

 });

//--------------------------------------------------//


// CArd SOLD-------------------------//
 let cardSold=document.querySelectorAll(".card-sold-row")
 const card3=[...cardSold];
 card3.map(item=>{
 Arr2.forEach(val=>{
  let dov=document.createElement("div");
  
  dov.classList.add("col-xl-3","col-lg-3","col-md-3","col-18","pull-up")
dov.innerHTML= 
`
<div style="border-radius:10px;background: #FF5F01;border:1px solid #e6e6e6;box-shadow:0 0 10px grey;position: relative;">
<figure>
  <img src="./Assets/soldout.png" />
</figure>
<div class="d-flex justify-content-between align-items-center col-div px-2">
    <i class="fa-solid fa-crown"> </i>
    <h4 class="mb-0">₹3500/-</h4>
  </div>
<div class="d-flex flex-column bg-cont" style="background:#fff">



<div class="d-flex flex-column align-items-center col-div-2 mt-2">

<h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>

</div>

<div class="d-flex justify-content-center col-div-3 py-1 mb-2" style="border-bottom-left-radius:10px ;border-bottom-right-radius:10px ;">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>


</div>
</div>
`;
item.appendChild(dov);
})

})

let cardSmSold=document.querySelectorAll(".card-sold-sm-row")
 const card4=[...cardSmSold];


 card4.map(item=>{
  Arr2.forEach(val=>{
   let dov=document.createElement("div");
   
   dov.classList.add("col-6","col-md-6","col-18","pull-up")
 dov.innerHTML= 
 `
 <div style="border-radius:10px;background: #FF5F01;border:1px solid #e6e6e6;box-shadow:0 0 10px grey;position: relative;">
 <figure>
   <img src="./Assets/soldout.png" />
 </figure>
 <div class="d-flex justify-content-between align-items-center col-div px-2">
     <i class="fa-solid fa-crown"> </i>
     <h4 class="mb-0">₹3500/-</h4>
   </div>
 <div class="d-flex flex-column bg-cont" style="background:#fff">
 
 
 
 <div class="d-flex flex-column align-items-center col-div-2 mt-2">
 
 <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
 <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
 
 </div>
 
 <div class="d-flex justify-content-center col-div-3 py-1 mb-2" style="border-bottom-left-radius:10px ;border-bottom-right-radius:10px ;">
 Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
 </div>
 
 
 </div>
 </div>
 `;
 item.appendChild(dov);
 })
 
 })
 //-----------------------------------------------//



//  Offer card //

let cardOffer=document.querySelectorAll(".card-offer-row")
const card5=[...cardOffer];


card5.map(item =>{ 
  Arr.forEach(val=>{
    let dov=document.createElement("div");
    dov.classList.add("col-xl-3","col-lg-3","col-md-3","col-18","pull-up")
    dov.innerHTML= 
    `<div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
    <div class="badge-bg-cont">
   <p class="mb-0 blink_me">20% <br />Off</p>
  </div>
         <div class="d-flex justify-content-between align-items-center col-div px-2">
             <i class="fa-solid fa-crown"> </i>
             <h4 class="mb-0">₹3500/-</h4>
           </div>
     <div class="d-flex flex-column bg-cont">
     <div class="d-flex flex-column align-items-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
    <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
    <div>
    <button class="me-2 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
    <button><i class="fa-solid fa-heart"></i> 0</button> </div>
    <div class="ms-3">
    <button class="me-2"><i class="fa-solid fa-cart-shopping"></i></button> 
    <button>Buy</button> </div>
    
    </div>
    </div>
    </div>
    `;
  item.appendChild(dov);
  })

 });

 let cardSmOffer=document.querySelectorAll(".card-offer-sm-row")
const card6=[...cardSmOffer];
card6.map(item =>{
  Arr.forEach(val=>{
    let dov=document.createElement("div");
    dov.classList.add("col-6","col-md-6","col-18","pull-up")
    dov.innerHTML= 
    `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
    
    <div class="d-flex justify-content-around align-items-center col-div my-1 px-1">
        <i class="fa-solid fa-crown"> </i> 
        <div class="ribbon "><span>20% off</span></div>
        <h4 class="mb-0">₹3500/-</h4>
      </div>
<div class="d-flex flex-column bg-cont">
 


<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>

<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
<div>
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
<div class="ms-md-5 ms-2">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
    `;
  item.appendChild(dov);
  })
})

let min=document.querySelector(".min")
let max=document.querySelector(".max")
let range_min=document.querySelector(".range_min")
let range_max=document.querySelector(".range_max")




min.addEventListener("change",function(e){
let val=e.target.value;
range_min.innerText=val

})
max.addEventListener("change",function(e){
  let val=e.target.value;
range_max.innerText=val
  })


  const hardBtn=document.querySelector("#hard-btn");
  const colNone=document.querySelectorAll(".collapse-none");
  const cont=document.querySelector(".collapse-icon-cont");
  const mark=document.querySelector(".x-none-mark");

  const colNoneArr=[...colNone];
  
  let bool=false;
  hardBtn.addEventListener("click",function(){
   
    if(!bool){
    colNoneArr.forEach(item=>item.style.display="none");
    cont.classList.remove("justify-content-around");
    cont.classList.add("ps-2");
    mark.style.display="inline-block"

    bool=true;
  }
  else{
    colNoneArr.forEach(item=>item.style.display="block");
    cont.classList.add("justify-content-around");
    cont.classList.remove("ps-2");
    mark.style.display="none"
    bool=false;
  }
  })
  let wishArr=[1,2]
  let cardWish1=document.querySelectorAll(".card-wish-row");
  const cardWish=[...cardWish1];
  cardWish.map(item =>{
    wishArr.forEach(val=>{
      let dov=document.createElement("div");
      dov.classList.add("col-6","col-md-6","col-18","pull-up")
      dov.innerHTML= 
      `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
      
      <div class="d-flex justify-content-around align-items-center col-div my-1 px-1">
          <i class="fa-solid fa-crown"> </i> 
         
          <h4 class="mb-0">₹3500/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
  <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
  </div>
  
  <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
  
  <button class="me-1" ><i class="fa-solid fa-heart wish-heart" ></i></button> 
  
  <button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
 
  
  </div>
  </div>
  </div>
      `;
    item.appendChild(dov);
    })
  })

  let Hindi = document.querySelector(".hindi");
  let English = document.querySelector(".english");
  let title = document.querySelector(".trust-title");
  let para = document.querySelector(".trust-details");
  English.addEventListener("click", ChangeToEnglish);
  Hindi.addEventListener("click", ChangeToHindi);
  function ChangeToHindi() {
    title.innerHTML = `कोई विश्वास मुद्दा है <span class="fa-solid fa-circle-question"></span>`;
    para.innerHTML = `<p> वीआईपी नंबर स्टोर पूरे भारत में एक ऐसी कंपनी के रूप में जानी जाती है जो प्रदान करती है   2010 से मूल्यवान और उच्च गुणवत्ता वाली सेवाएं। आठ वर्षों के लिए हम
           में हमारे ग्राहकों को 10,000+ से अधिक नंबर सफलतापूर्वक बेचे हैं  भारत और कभी भी अपने आप को कुशलता से सेवा करने से नहीं रोका। यदि
           आप अपना पसंदीदा मोबाइल नंबर या फैंसी नंबर खरीदना चाहते हैं
           आपकी पसंद, VIP नंबर स्टोर सबसे अच्छा ब्रांड ऑफरिंग है जैसे
           देश में सबसे सस्ती दरों पर सेवा।</p> <p>
             हमारी सफलता और उपलब्धियों को दीर्घावधि द्वारा निर्धारित किया जा सकता है
           भारत में कई वीआईपी के साथ हमारे संबंध हैं, जिनके पास है
           हमसे खुशी-खुशी फैंसी, असाधारण दिखने वाली संख्याएँ ली गईं।</p>`;
  }
  function ChangeToEnglish() {
    title.innerHTML = `Have Any Trust Issue <span class="fa-solid fa-circle-question"></span>`;
    para.innerHTML = `<p>
           VIP NUMBER STORE is known across India as a company that provides
           valuable and high quality services since 2010. For eight years we
           have successfully sold over 10,000+ number to our customers in
           India and have never stopped our self from serving efficiently. If
           you want to buy your favorite mobile number or a fancy number of
           your choice, VIP Number Store is the best brand offering such
           service at the most affordable rates in the country.
         </p>
         <p>
           Our success and achievements could be determined by the long-term
           relations that we have with numerous VIP's in India, who have
           happily taken fancy, extraordinary looking numbers from us.
         </p>`;
  }
