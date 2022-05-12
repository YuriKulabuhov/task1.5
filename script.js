document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width < 768) {
    const swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1.3,
    });
  } else if (768 < width && width < 1120) {
    var elem = document.querySelector("#swiperStyle");
    elem.remove();
    var btn = document.querySelector(".main__btn");
    var block = document.querySelectorAll(".swiper-slide:nth-of-type(n+7)");
    for (var i = 0; i < block.length; i++) {
      block[i].classList.add("hidden");
    }
    btn.addEventListener("click", () => {
      for (var i = 0; i < block.length; i++) {
        if (block[i].classList.contains("hidden")) {
          block[i].classList.add("show");
          block[i].classList.remove("hidden");
          btn.classList.add("btn-hidden");
          btn.classList.remove("btn-more");
        } else if (block[i].classList.contains("show")) {
          block[i].classList.add("hidden");
          block[i].classList.remove("show");
          btn.classList.add("btn-more");
          btn.classList.remove("btn-hidden");
        }
      }
    });
  } else if (width > 1120) {
    var elem = document.querySelector("#swiperStyle");
    elem.remove();
    var btn = document.querySelector(".main__btn");
    var block = document.querySelectorAll(".swiper-slide:nth-of-type(n+9)");
    for (var i = 0; i < block.length; i++) {
      block[i].classList.add("hidden");
    }
    btn.addEventListener("click", () => {
      for (var i = 0; i < block.length; i++) {
        if (block[i].classList.contains("hidden")) {
          block[i].classList.add("show");
          block[i].classList.remove("hidden");
          btn.classList.add("btn-hidden");
          btn.classList.remove("btn-more");
        } else if (block[i].classList.contains("show")) {
          block[i].classList.add("hidden");
          block[i].classList.remove("show");
          btn.classList.add("btn-more");
          btn.classList.remove("btn-hidden");
        }
      }
    });
  }
});
