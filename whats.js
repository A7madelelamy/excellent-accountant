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