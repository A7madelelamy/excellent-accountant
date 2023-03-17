const menu = document.getElementById("menu");
const ex = document.getElementById("ex");
const main = document.getElementById("main");
const dad = document.getElementById("dad");
const xmark = document.getElementById("xmark");
const darkmode = document.getElementById("darkmode");
const last = document.getElementById("last");
const lastText = document.getElementById("lastText");

const dateH = new Date().getHours();

// fucation dark mode
function darkModeRun() {
  console.log("DARK MODE Run!");

  const element = document.body;
  dad.style.display='none';
menu.classList.toggle("dark-mode-menu");
  element.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode-main");
  dad.style.display='none';


}
function darkModeOff() {
  console.log("the darkmode off");
  setTimeout(dadRun, 5000);
}


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


if (dateH>="18"||dateH<="6") {

   darkModeRun();
//   console.log("DARK MODE Run!");

//   const element = document.body;
//   dad.style.display='none';
// menu.classList.toggle("dark-mode-menu");
//   element.classList.toggle("dark-mode");
//   main.classList.toggle("dark-mode-main");
//   dad.style.display='none';


  
}else{
  
  darkModeOff();
}

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
  const element = document.body;
  dad.style.display='none';
menu.classList.toggle("dark-mode-menu");
  element.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode-main");
  last.classList.toggle("dark-mode-last");
}
darkmode.addEventListener("click",dark);

// lastText
lastText.innerHTML="من محاضرات كلية التجارة جامعة بنها";
