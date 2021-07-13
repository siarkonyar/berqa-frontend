const menuBtn = document.querySelector(".hamburger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});

const nextIcon = '<i class="bi bi-chevron-right"></i>';
const prevIcon = '<i class="bi bi-chevron-left"></i>';

$('.owl-carousel').owlCarousel({
  navText:[
    prevIcon,
    nextIcon
  ],
  responsive: {
      0: {
          items: 1
      },
  }
})