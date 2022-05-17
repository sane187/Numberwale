let categoryCont=document.querySelector(".categories-cont");

const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
arr1.forEach(element =>{
    const carouselItem =document.createElement("div");
    carouselItem.innerText="UNIQUE Numbers"
    carouselItem.classList.add("category-name")
   categoryCont.appendChild(carouselItem)
})

let cardArr=document.querySelectorAll(".card-row")
 const card=[...cardArr];
 const Arr=[1,2,3,4,5,6,7,8,9,10,11,12]

 card.map(item =>{ 
   
  
  Arr.forEach(val=>{
    let dov=document.createElement("div");
    dov.classList.add("col-xl-4","col-lg-4","col-md-4","col-18","pull-up")
dov.innerHTML= 
`
<div style="border-radius:20px;background: #FF5F01;border:1px solid #FF5F01;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-around align-items-center col-div mt-2 mb-1">
        <i class="fa-solid fa-crown"> </i>
        <h4 class="mb-0">₹3500/-</h4>
      </div>
<div class="d-flex flex-column bg-cont" style="border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;">
 


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
<div class="ms-5">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
`;
  item.appendChild(dov);
  })

 });

 

