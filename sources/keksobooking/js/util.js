'use strict';

(() => {
  const map = document.querySelector(`.map`);
  const mapPinsContainer = map.querySelector(`.map__pins`);
  const mapPinMain = mapPinsContainer.querySelector(`.map__pin--main`);

  const mapFilters = map.querySelector(`.map__filters`);
  const adForm = document.querySelector(`.ad-form`);
  const houseType = adForm.querySelector(`#type`);
  const roomNumber = adForm.querySelector(`#room_number`);
  const capacity = adForm.querySelector(`#capacity`);
  const timeIn = adForm.querySelector(`#timein`);
  const timeOut = adForm.querySelector(`#timeout`);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onEnterPress = (evt, action) => {
    if (evt.key === `Enter`) {
      evt.preventDefault();
      action(evt);
    }
  };

  const onEscPress = (evt, action) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      action();
    }
  };

  const onLeftMouseButtonPress = (evt, action) => {
    if (evt.which === 1) {
      evt.preventDefault();
      action();
    }
  };

  window.util = {
    map,
    mapPinsContainer,
    mapPinMain,
    mapFilters,
    adForm,
    houseType,
    roomNumber,
    capacity,
    timeIn,
    timeOut,
    getRandomInt,
    onEnterPress,
    onEscPress,
    onLeftMouseButtonPress
  };
})();
