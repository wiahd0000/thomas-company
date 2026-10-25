// const menus = document.getElementById("menus");
// const btnBurge = document.getElementById("btn-burge");

// btnBurge.addEventListener("click", ()=>{
//   menus.classList.toggle("active")
// })





const menus = document.getElementById("menus");
const btnBurge = document.getElementById("btn-burge");

// Toggle the menu when clicking the hamburger button
btnBurge.addEventListener("click", () => {
  menus.classList.toggle("active");
});

// Close the menu when clicking any menu link
const menuLinks = menus.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menus.classList.remove("active");
  });
});