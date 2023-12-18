// input mask
$(document).ready(function () {
    if ($('input[type="tel"]').length) {
        $('input[type="tel"]').inputmask({"mask": "+7 999 999-99-99"})
    }
})
// input mask