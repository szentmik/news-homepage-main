const menuBtn = document.querySelector(".hamburger-button");
const closeBtn = document.querySelector(".close-button");
const menuList = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuList.classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
  menuList.classList.remove("show-menu");
});
