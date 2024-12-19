document.addEventListener("DOMContentLoaded", function () {
  var carousels = ["customCarouselJumbotron"]; // Daftar ID carousel yang akan diinisialisasi
  carousels.forEach(function (carouselId) {
    var carouselElement = document.getElementById(carouselId);
    if (
      carouselElement &&
      !carouselElement.classList.contains("carousel-zoom")
    ) {
      new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        ride: "carousel",
        pause: "hover",
        wrap: true,
      });
    }
  });
});
// slider car page
const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// maps car page
// Fungsi untuk inisialisasi peta
function initMap() {
  // Mengatur koordinat pusat dan tingkat zoom untuk menampilkan Indonesia
  const indonesiaBounds = {
    north: 6.5, // Titik paling utara
    south: -11, // Titik paling selatan
    west: 94, // Titik paling barat
    east: 141, // Titik paling timur
  };

  // Membuat peta di dalam elemen dengan ID 'map'
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -2.5, lng: 118 }, // Koordinat pusat Indonesia
    zoom: 5, // Zoom level
    restriction: {
      latLngBounds: indonesiaBounds, // Membatasi area navigasi pada Indonesia
      strictBounds: false,
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Swiper Testi
  const swiperTesti = new Swiper(".swiper-testi", {
    loop: true,
    autoplay: { delay: 3000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

new Swiper(".testimonial-carousel", {
  loop: true,
  speed: 600,
  spaceBetween: 20,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
