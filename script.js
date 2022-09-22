let show = true;
const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  if (show == true) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "initial"
  }
  menuSection.classList.toggle("on")
  show = !show;
})

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 10,
    slideShadows: false,
  }
  ,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("opacity", window.scrollY > 0);
})
