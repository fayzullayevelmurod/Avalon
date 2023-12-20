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