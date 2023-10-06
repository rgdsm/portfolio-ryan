document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 100,
    loop: true,
  })
    .type("Front End Developer...", { delay: 900 })
    .delete(13)
    .type(" Student...")

    .go();
});

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated-name", {
    speed: 100,
    loop: true,
  })
    .type("Ryan Gabriel...", { delay: 2900 })
    .delete(11)
    .type(".dev;")

    .go();
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelector(".menu-items");

hamburgerMenu.addEventListener("click", () => {
  menuItems.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");

  // Troca o ícone entre hamburguer e "X"
  const bars = hamburgerMenu.querySelectorAll(".bar");
  bars.forEach((bar) => bar.classList.toggle("change"));
});
