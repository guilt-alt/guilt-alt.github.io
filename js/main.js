var link = document.querySelector(".form-remove-button");
var form = document.querySelector(".form");

var dateIn = form.querySelector("#dateIn");
var dateOut = form.querySelector("#dateOut");

var increase_ad = document.querySelector(".decrease-adult");
var increase_ch = document.querySelector(".decrease-children");


var adult = form.querySelector("#adult");
var children = form.querySelector("#children");
var decrease_ad = document.querySelector(".increase-adult");
var decrease_ch = document.querySelector(".increase-children");

var submit = form.querySelector(".main-form_submit");


// Показ и скрытие формы

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-remove");
  dateIn.focus();

  if (form.classList.toggle(".form-remove")) {
    dateIn.blur();
  };
});

// Количество человек в форме

decrease_ad.addEventListener("click", function (evt) {
  if (adult.value > 1) {
    --adult.value
  };
});

decrease_ch.addEventListener("click", function (evt) {
  if (children.value > 0) {
    --children.value
  };
});

increase_ad.addEventListener("click", function (evt) {
  if (adult.value < 10) {
    ++adult.value
  };
});

increase_ch.addEventListener("click", function (evt) {
  if (children.value < 10) {
    ++children.value
  };
});

// валидация формы

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || adult.value < 1) {
    evt.preventDefault();
    form.classList.remove("submit-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("submit-error");
  } else {
    if (dateIn.value && dateOut.value) {
      evt.preventDefault();
      form.classList.remove("submit-valid");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("submit-valid");

      setTimeout(function (evt) {
        form.submit();
      }, 800);
    }
  }
});