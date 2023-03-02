function closebutton(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


function myFunc(){
  let text = document.querySelector("#text");
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}



var array = JSON.parse(localStorage.getItem("users"))||[]

function info(){
  var name = document.querySelector(".name").value;
  var lname = document.querySelector(".lastname").value;
  var age = document.querySelector(".age").value;
  var us = document.querySelector(".username").value
  var pas = document.querySelector(".password").value;
  var repas = document.querySelector(".re-password").value;


if ( pas== repas && lname !== "" && name !== "" &&us !=="" && pas !==""  ) {
  array.push({

    firstname :name ,
    lastname : lname ,
    age :age,
    username: us,
    password: pas,
    repassword: repas
    
});

}else{
  alert("check your information! ")
}
localStorage.setItem("users" , JSON.stringify(array));}

var array = JSON.parse(localStorage.getItem("users"))||[];
function onlogin(){
  var username =document.querySelector(".username").value
  var pas = document.querySelector(".password").value
  for (let item of array) {
    if(item.username===username&&item.password===password){
      alert("ok")
      return
    }
  }
}








function buy(){
  var basket = document.getElementById("buy");
  if (basket.style.display === "block") {
    basket.style.display = "none";
  } else {
    basket.style.display = "block";
  }
}


var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

 
function products (){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function(){
    let data =JSON.parse(this.response);
    let price = (data[0].price);
    let blackheadset = document.querySelector(".price-black-headset");
    blackheadset.innerHTML=price;
  
  
    let headset = document.querySelector(".price-black");
    let priceproductone = (data[1].price);
    headset.innerHTML=priceproductone
  
    let bluePrice = document.querySelector(".blueheadset");
    let priceheadset = (data[2].price);
    bluePrice.innerHTML=priceheadset
  
    let darkheadset = document.querySelector(".darkblueheadset");
    let darkblueprice = (data[3].price);
    darkheadset.innerHTML=darkblueprice
  
    let fullprice = document.querySelector(".fullprice");
    let full = (data[4].price);
    fullprice.innerHTML=full
  
    let fullpro = document.querySelector(".fullpro");
    let fullpriceone = (data[5].price);
    fullpro.innerHTML=fullpriceone
  
    let fulltwo = document.querySelector(".fulltwo");
    let fullpricetwo = (data[6].price);
    fulltwo.innerHTML=fullpricetwo
  
    let fullthree = document.querySelector(".fullthree");
    let fprothree = (data[7].price);
    fullthree.innerHTML=fprothree
  
    let handfour = document.querySelector(".handfour");
    let fprofull = (data[8].price);
    handfour.innerHTML=fprofull
  
    let handcontroll = document.querySelector(".handcontrol");
    let handcontrolfor = (data[9].price);
    handcontroll.innerHTML=handcontrolfor
  
    let handtwo = document.querySelector(".handtwo");
    let handcntl = (data[10].price);
    handtwo.innerHTML=handcntl
  
    let handone = document.querySelector(".handone");
    let handcnt = (data[11].price);
    handone.innerHTML=handcnt
  
   
   }
  
  
  
  xhttp.open("GET","https://fakestoreapi.com/products");
  xhttp.send()
  }
  products()
  
  