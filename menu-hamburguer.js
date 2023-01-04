const btnMobile = document.querySelector("#btn-mobile");
btnMobile.addEventListener("click", openMenu);

function openMenu() {
  const nav = document.querySelector("#navbar");
  nav.classList.toggle("active");
}
