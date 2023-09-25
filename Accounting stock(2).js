const menu = document.getElementById("menu");
const ex = document.getElementById("ex");
const main = document.getElementById("main");

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

