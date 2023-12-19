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

menu_mobile.addEventListener('click', () => {
  menu_mobile.classList.remove('active');
  menu_bg.classList.remove('active');
});

// burger

// home swipper
let swiper = new Swiper(".homeSwiper", {
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
