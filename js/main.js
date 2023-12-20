// input mask
// let phoneInput = document.getElementById('phone');
// let myForm = document.forms.myForm;
// let result = document.getElementById('result');

// phoneInput.addEventListener('input', function (e) {
//     let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//     e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });

// myForm.addEventListener('submit', function(e) {
//   phoneInput.value = phoneInput.value.replace(/\D/g, '');
//   result.innerText = phoneInput.value; 

//   e.preventDefault();
// });
// // input mask

const items = document.querySelectorAll('.accordion');

items.forEach((item) => {
  const header = item.querySelector('.accordion_btn');
  const content = item.querySelector('.accordion_body');

  header.addEventListener('click', () => {
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
  });
});

let tabs = document.querySelectorAll('.tab');
if (tabs.length) {
  tabs.forEach(tab => {
    let tab_btns = tab.querySelectorAll('button');
    let tab_items = tab.querySelectorAll('.tab_item');
    tab_btns.forEach((tab_btn, btn_idx) => {
      tab_btn.onclick = () => {
        if (!tab_items[btn_idx].classList.contains('active')) {
          tab_items.forEach((tab_item, item_idx) => {
            if (tab_item.classList.contains('active')) {
              tab_item.classList.remove('active');
              tab_item.classList.add('end-active')
              setTimeout(() => {
                tab_item.classList.remove('end-active')
              }, 200);
            }
          })
          setTimeout(() => {
            tab_items[btn_idx].classList.add('active')
          }, 200);
        }
        tab_btns.forEach(item => {
          item.classList.remove('active')
        })
        tab_btn.classList.add('active')
      }
    })
  })
}

let checkboxs = document.querySelectorAll('.checkbox');
if (checkboxs.length) {
  checkboxs.forEach(checkbox => {
    handleCheckbox(checkbox)
    let input = checkbox.querySelector('input[type="checkbox"]');
    checkbox.onclick = () => {
      input.click();
      handleCheckbox(checkbox)
    }
  })
}

function handleCheckbox(el) {
  let input = el.querySelector('input[type="checkbox"]')
  if (input.checked) {
    el.classList.add('active')
  } else {
    el.classList.remove('active')
  }
}

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
    // effect: "fade",
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

  myForm.addEventListener('submit', function (e) {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
    result.innerText = phoneInput.value;

    e.preventDefault();
  });
  // input mask

} catch (err) {
  console.log(err);
}
