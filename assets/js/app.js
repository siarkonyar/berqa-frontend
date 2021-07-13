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

$(document).ready(function () {
  $("#home-products-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
    navText: [prevIcon, nextIcon],
  });
  $("#media-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $("#media-item").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    navText: [prevIcon, nextIcon],
  });
  $("#home-media-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      }
    },
    navText: [prevIcon, nextIcon],
  });
});
