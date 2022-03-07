document.addEventListener("DOMContentLoaded", function () {
  // slider

  $(".testi").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidestoRoll: 1,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
  });

  // menu toggle

  menuBtn = document.querySelector(".menu-toggle");
  menu = document.querySelector(".menu-nav");
  icon = document.querySelector("ion-icon");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
    if (icon.getAttribute("name") == "menu-outline") {
      icon.setAttribute("name", "close-outline");
    } else {
      icon.setAttribute("name", "menu-outline");
    }
  });
});
