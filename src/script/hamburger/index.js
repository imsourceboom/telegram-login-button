const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header .mobile-nav");
const close = document.querySelector("header .close");

const active = () => {
  nav.classList.add("active");
};
const inactive = () => {
  nav.classList.remove("active");
};

hamburger.addEventListener("click", active);
close.addEventListener("click", inactive);
