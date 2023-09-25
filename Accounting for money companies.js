const menu = document.getElementById("menu");
const ex = document.getElementById("ex");
const main = document.getElementById("main");
const dad = document.getElementById("dad");
const xmark = document.getElementById("xmark");
const darkmode = document.getElementById("darkmode");
const last = document.getElementById("last");
const lastText = document.getElementById("lastText");
let darkt = document.getElementById("darkt");

const dateH = new Date().getHours();

//change img logo
//  // fucation dark mode
function darkModeRun() {
  console.log("DARK MODE Run!");
  const element = document.body;
  dad.style.display='none';
menu.classList.toggle("dark-mode-menu");
  element.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode-main");
  darkt.classList.toggle("dark-mode-menu");

  dad.style.display='none';

  // darkt.style.color ='black';

}
function darkModeOff() {

  console.log("the darkmode off");
  // setTimeout(dadRun, 5000);
}

// darkmode-btn


// darkt.addEventListener("click",darkModeRun);

// menu 


function menuOpen() {
  ex.style.display='inline';
  menu.style.display='none';
  main.style.display='block';
  ex.style.color='white';


}

function menuClose() {
  menu.style.display='inline';
  ex.style.display='none';
  main.style.display='none';

}


// if (dateH>="18"||dateH<="6") {

//    darkModeRun();
// //   console.log("DARK MODE Run!");

// //   const element = document.body;
// //   dad.style.display='none';
// // menu.classList.toggle("dark-mode-menu");
// //   element.classList.toggle("dark-mode");
// //   main.classList.toggle("dark-mode-main");
// //   dad.style.display='none';


  
// }else{
  
//   darkModeOff();
// }

menu.addEventListener("click",menuOpen);
ex.addEventListener("click",menuClose);


function dadRun() {
  dad.style.display="flex";
  console.log("ia working");
}
xmark.addEventListener("click",function () {
  dad.style.display='none';
});
function dark() {
  darkt.classList.toggle("dark-mode-menu");

  const element = document.body;
  dad.style.display='none';
menu.classList.toggle("dark-mode-menu");
  element.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode-main");
  last.classList.toggle("dark-mode-last");
}

let darkCookie = ()=>{
if (document.cookie =="darkmode=off"){
  document.cookie = "darkmode=on; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
  dark();
}else{
  document.cookie = "darkmode=off; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";

  

}
}
  
darkt.addEventListener("click",darkCookie);


// lastText
lastText.innerHTML="من محاضرات كلية التجارة جامعة بنها";


const whatsAppAD = document.getElementById("whatsAppAD-grandpa");
const closeAD = document.getElementById("closeAD");

const whatsAppADF = ()=>{
  whatsAppAD.style.display="block";

}
setTimeout(whatsAppADF,5000);

const whatsAppADClose = ()=>{
  whatsAppAD.style.display="none";

}


closeAD.addEventListener("click",whatsAppADClose)