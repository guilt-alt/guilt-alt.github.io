'use strict';

(() => {
  const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  const adForm = window.util.adForm;

  const timeIn = window.util.timeIn;
  const timeOut = window.util.timeOut;

  const houseType = window.util.houseType;
  const price = adForm.querySelector(`#price`);
  const roomNumber = window.util.roomNumber;
  const capacity = window.util.capacity;

  const avatar = adForm.querySelector(`#avatar`);
  const images = adForm.querySelector(`#images`);

  const avatarPreview = adForm.querySelector(`.ad-form-header__preview img`);
  const imagesPreview = adForm.querySelector(`.ad-form__photo img`);

  const fileLoader = (input, img) => {
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((ending) => {
      return fileName.endsWith(ending);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener(`load`, () => {
        img.src = reader.result;
        img.classList.remove(`hidden`);
      });

      reader.readAsDataURL(file);
    }
  };

  const roomsValidation = () => {
    const capacityValue = Number(capacity.value);
    const roomsValue = Number(roomNumber.value);

    if ((capacityValue <= roomsValue && roomsValue !== 100 && capacityValue !== 0) || (roomsValue === 100 && capacityValue === 0)) {
      capacity.setCustomValidity(``);
    } else {
      capacity.setCustomValidity(`Измените количество комнат или гостей`);
    }

    capacity.reportValidity();
  };

  const houseTypeValidation = () => {
    if (houseType.value === `bungalow`) {
      price.min = 0;
      price.placeholder = `0`;
    } else if (houseType.value === `flat`) {
      price.min = 1000;
      price.placeholder = `1000`;
    } else if (houseType.value === `house`) {
      price.min = 5000;
      price.placeholder = `5000`;
    } else {
      price.min = 10000;
      price.placeholder = `10000`;
    }

    return;
  };

  const timeInValidation = () => {
    if (timeIn.value !== timeOut.value) {
      timeIn.value = timeOut.value;
    }

    return;
  };

  const timeOutValidation = () => {
    if (timeOut.value !== timeIn.value) {
      timeOut.value = timeIn.value;
    }

    return;
  };

  const addValidation = () => {
    roomsValidation();
    timeIn.addEventListener(`input`, timeOutValidation);
    timeOut.addEventListener(`input`, timeInValidation);
    houseType.addEventListener(`input`, houseTypeValidation);
    capacity.addEventListener(`input`, roomsValidation);
    roomNumber.addEventListener(`input`, roomsValidation);
    avatar.addEventListener(`change`, () => {
      fileLoader(avatar, avatarPreview);
    });
  
    images.addEventListener(`change`, () => {
      fileLoader(images, imagesPreview);
    });
  };

  const removeValidation = () => {
    price.placeholder = `1000`;
    avatarPreview.src = `img/muffin-grey.svg`;
    imagesPreview.classList.add(`hidden`);
    timeIn.removeEventListener(`input`, timeOutValidation);
    timeOut.removeEventListener(`input`, timeInValidation);
    houseType.removeEventListener(`input`, houseTypeValidation);
    capacity.removeEventListener(`input`, roomsValidation);
    roomNumber.removeEventListener(`input`, roomsValidation);
    avatar.removeEventListener(`change`, () => {
      fileLoader(avatar, avatarPreview);
    });
  
    images.removeEventListener(`change`, () => {
      fileLoader(images, imagesPreview);
    });
  };

  const getMainPinCoords = (x, y) => {
    const mapPinMain = window.util.mapPinMain;
    const mapPinMainMiddle = Math.ceil(mapPinMain.clientWidth * 0.50);
    const mapPinMainBottom = mapPinMain.clientWidth + 16;
    const address = adForm.querySelector(`#address`);
    const pinCoords = `${parseInt(x, 10) + mapPinMainMiddle}, ${parseInt(y, 10) + mapPinMainBottom}`;
    address.value = pinCoords;

    return;
  };

  window.validation = {
    addValidation,
    removeValidation,
    getMainPinCoords
  };
})();
