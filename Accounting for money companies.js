const menu = document.getElementById("menu");
const ex = document.getElementById("ex");
const main = document.getElementById("main");
const dad = document.getElementById("dad");
const xmark = document.getElementById("xmark");
const darkmode = document.getElementById("darkmode");
const dateH = new Date().getHours();

if (dateH>="18"||dateH<="6") {
  console.log("DARK MODE Run!");

  const element = document.body;
  dad.style.display='none';
menu.classList.toggle("dark-mode-menu");
  element.classList.toggle("dark-mode");
  main.classList.toggle("dark-mode-main");
  dad.style.display='none';


  
}else{
  console.log(dateH);
  setTimeout(dadRun, 5000);
}

menu.addEventListener("click",
function () {
  ex.style.display='inline';
  menu.style.display='none';
  main.style.display='block';
  ex.style.color='white';


}
);
ex.addEventListener("click",
function () {
  menu.style.display='inline';
  ex.style.display='none';
  main.style.display='none';

}
);


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
}
darkmode.addEventListener("click",dark);