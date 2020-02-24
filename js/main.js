var link = document.querySelector(".form-remove-button");
var form = document.querySelector(".form");

var dateIn = document.querySelector("#dateIn");
var dateOut = document.querySelector("#dateOut");

var increase_ad = document.querySelector(".decrease-adult");
var increase_ch = document.querySelector(".decrease-children");

var decrease_ad = document.querySelector(".increase-adult");
var decrease_ch = document.querySelector(".increase-children");

var submit = document.querySelector(".main-form_submit");

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
  if (!dateIn.value || !dateOut.value) {
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

      setTimeout((evt) => {
        form.submit();
      }, 800);
    }
  }
});

// inner
