const menus = document.getElementById("menus");
const btnBurge = document.getElementById("btn-burge");

btnBurge.addEventListener("click", ()=>{
  menus.classList.toggle("active")
})