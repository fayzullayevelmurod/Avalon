

try {
  // burger

  let menu_bg = document.querySelector('.menu_bg');
  let menu_mobile = document.querySelector('.menu_mobile');
  let burger_open = document.querySelector('.burger_open');

  burger_open.addEventListener('click', () => {
    menu_mobile.classList.add('active');
    menu_bg.classList.add('active');
  });

  menu_bg.addEventListener('click', () => {
    menu_mobile.classList.remove('active');
    menu_bg.classList.remove('active');
  });

  // burger

  // category_btn
  let catalog_content = document.querySelector('.catalog_content');
  let catalog_btn = document.querySelector('.catalog_btn');
  let catalog_content_bg = document.querySelector('.catalog_content_bg');

  catalog_btn.addEventListener('click', () => {
    catalog_content.classList.toggle('active');
    catalog_btn.classList.toggle('active');
    catalog_content_bg.classList.toggle('active');
  });

  catalog_content_bg.addEventListener('click', () => {
    catalog_content.classList.remove('active');
    catalog_btn.classList.remove('active');
    catalog_content_bg.classList.remove('active');
  })

  catalog_content.addEventListener('click', () => {
    catalog_content.classList.remove('active');
    catalog_btn.classList.remove('active');
    catalog_content_bg.classList.remove('active');
  })
  // category_btn

  // home swipper
  let swiper_one = new Swiper(".homeSwiper", {
    slidesPerView: "auto",
    cssMode: true,
    navigation: {
      nextEl: ".home_btn_right",
      prevEl: ".home_btn_left",
    },
    pagination: {
      el: ".home_swiper_pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
  // home swipper

  // popular_product
  let swiper_two = new Swiper(".popularSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: ".product_slider_next",
      prevEl: ".product_slider_prev",
    },
  });
  // popular_product

  // commentSwiper
  var swiper = new Swiper(".commentSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  // commentSwiper

  // input mask
  let phoneInput = document.getElementById('phone');
  let myForm = document.forms.myForm;
  let result = document.getElementById('result');

  phoneInput.addEventListener('input', function (e) {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

  myForm.addEventListener('submit', function(e) {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
    result.innerText = phoneInput.value; 
    
    e.preventDefault();
  });
  // input mask

} catch {
  console.log(err);
}
