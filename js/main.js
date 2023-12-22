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
let comment_modal = document.querySelector('.product_description .comments_right')
if (comment_modal) {
  let open_comment_modal = document.querySelector('.product_description .show_comment');
  let close_comment_modal = document.querySelector('.product_description .comments_right .comment_bg');
  open_comment_modal.onclick = () => {
    comment_modal.classList.add('active')
  }

  close_comment_modal.onclick = () => {
    comment_modal.classList.remove('active');
  }
}

let card_product_modal = document.querySelector('.card_product_home .checkbox_wrapper');
if (card_product_modal) {
  let card_product_bn = document.querySelector('.card_product_home .checkbox_show')
  let modal_close_btn = document.querySelector('.card_product_home .checkbox_wrapper .light_btn')
  let modal_bg = document.querySelector('.card_product_home .checkbox_wrapper .bg')
  card_product_bn.onclick = () => {
    card_product_modal.classList.add('active')
    card_product_bn.classList.add('active')
  }
  modal_close_btn.onclick = () => {
    card_product_modal.classList.remove('active')
    card_product_bn.classList.remove('active')
  }
  modal_bg.onclick = () => {
    card_product_modal.classList.remove('active')
    card_product_bn.classList.remove('active')
  }
}

let card_product_slide = document.querySelector('.card_product_home .main_slider');
if (card_product_slide) {
  let project_main_slider = new Swiper(".card_product_home .mini_slider", {
    spaceBetween: 14,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  let project_mini_slider = new Swiper(".card_product_home .main_slider", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".card_product_home .slide_next_btn",
      prevEl: ".card_product_home .slide_prev_btn",
    },
    thumbs: {
      swiper: project_main_slider,
    },
  });
}

let category_sort_btns = document.querySelectorAll('.categories_cards .accordion .sort_btn');
if (category_sort_btns.length) {
  category_sort_btns.forEach(btn => {
    btn.onclick = () => {
      btn.classList.toggle('active')
    }
  })
}

let dropdowns = document.querySelectorAll('.dropdown');
if (dropdowns.length) {
  dropdowns.forEach(dropdown => {
    let dropdown_head = dropdown.querySelector('.dropdown_head');
    let dropdown_items = dropdown.querySelectorAll('.dropdown_body button');
    let head_text = dropdown.querySelector('.dropdown_head span');
    dropdown_head.onclick = () => {
      dropdown.classList.toggle('active')
    }
    dropdown_items.forEach(btn => {
      btn.onclick = () => {
        dropdown.classList.remove('active');
        dropdown_items.forEach(btn2 => {
          btn2.classList.remove('active');
        })
        btn.classList.add("active");
        head_text.textContent = btn.textContent;
      }
    })
  })
}

let radio_groups = document.querySelectorAll('.radio_group');
if (radio_groups.length) {
  radio_groups.forEach(radio_group => {
    let radios = radio_group.querySelectorAll('.radio');
    if (radios.length) {
      radios.forEach(radio => {
        handleRadio(radio_group)
        let radio_input = radio.querySelector('input[type="radio"]');
        radio.onclick = () => {
          radio_input.click();
          handleRadio(radio_group);
        }
      })
    }
  })
}

function handleRadio(el) {
  let radios = el.querySelectorAll('.radio');
  radios.forEach(radio => {
    let radio_input = radio.querySelector('input[type="radio"]');
    if (radio_input.checked) {
      radio.classList.add('active')
    } else {
      radio.classList.remove('active')
    }
  })
}

let calculates = document.querySelectorAll('.calculate');
if (calculates.length) {
  calculates.forEach(calculate => {
    let minus = calculate.querySelector('.minus');
    let plus = calculate.querySelector('.plus');
    let value = calculate.querySelector('.calculate_value');

    minus.onclick = () => {
      if (Number(value.textContent) != 0) {
        value.textContent = Number(value.textContent) - 1;
      }
    }

    plus.onclick = () => {
      value.textContent = Number(value.textContent) + 1;
    }
  })
}

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

  // contact_modal
  let contact_modal_open = document.querySelector('.contact_modal_open');
  let modal_contact_bg = document.querySelector('.modal_contact_bg');
  let modal_contact = document.querySelector('.modal_contact');
  let modal_contact_btn = document.querySelector('.modal_contact_btn');

  contact_modal_open.addEventListener('click', () => {
    modal_contact_bg.classList.toggle('active');
    modal_contact.classList.toggle('active');
  });

  modal_contact_btn.addEventListener('click', () => {
    modal_contact_bg.classList.remove('active');
    modal_contact.classList.remove('active');
  });

  modal_contact_bg.addEventListener('click', () => {
    modal_contact_bg.classList.remove('active');
    modal_contact.classList.remove('active');
  });
  // contact_modal

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


  // about page
  let swiper_three = new Swiper(".aboutSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: ".avalon_office_next",
      prevEl: ".avalon_office_prev",
    },
  });
  // about page

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

