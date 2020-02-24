var link = document.querySelector(".form-remove-button");
var form = document.querySelector(".form");
var date = form.querySelector("[name=date-1]");

var increase_ad = document.querySelector(".decrease-adult");
var increase_ch = document.querySelector(".decrease-children");

var decrease_ad = document.querySelector(".increase-adult");
var decrease_ch = document.querySelector(".increase-children");

var submit = form.querySelector(".main-form_submit");


// Показ и скрытие формы

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-remove")
  date.focus();

  if (form.classList.toggle(".form-remove")) {
    date.blur();
  };
});

// Количество человек в форме

decrease_ad.addEventListener("click", function (evt) {
  if (evt.target.parentElement.querySelector("input").value > 1) {
    --evt.target.parentElement.querySelector("input").value
  };
});

decrease_ch.addEventListener("click", function (evt) {
  if (evt.target.parentElement.querySelector("input").value > 0) {
    --evt.target.parentElement.querySelector("input").value
  };
});

increase_ad.addEventListener("click", function (evt) {
  if (evt.target.parentElement.querySelector("input").value < 10) {
    ++evt.target.parentElement.querySelector("input").value
  };
});

increase_ch.addEventListener("click", function (evt) {
  if (evt.target.parentElement.querySelector("input").value < 10) {
    ++evt.target.parentElement.querySelector("input").value
  };
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
