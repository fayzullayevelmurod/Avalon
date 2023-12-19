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
