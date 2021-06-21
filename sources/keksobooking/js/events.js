'use strict';

(() => {
  const map = window.util.map;
  const mapPinMain = window.util.mapPinMain;

  const mapFilters = window.util.mapFilters;
  const adForm = window.util.adForm;

  const formActivation = (form, enable) => {
    const elements = form.querySelectorAll(`fieldset, select`);

    if (enable === false) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute(`disabled`, `disabled`);
      }
    } else {
      for (let j = 0; j < elements.length; j++) {
        elements[j].removeAttribute(`disabled`);
      }
    }

    return;
  };

  const addEvents = () => {
    if (map.classList.contains(`map--faded`)) {
      window.backend.load(window.backend.onLoadHandler, window.messages.loadErrorMessage);
    }

    mapFilters.addEventListener(`change`, window.debounce(window.filter.filter));

    map.classList.remove(`map--faded`);
    adForm.classList.remove(`ad-form--disabled`);

    formActivation(adForm, true);
    window.validation.addValidation();
    adForm.addEventListener(`submit`, (evt) => {
      window.backend.adFormSave(evt);
    });
    adForm.addEventListener(`reset`, removeEvents);

    map.addEventListener(`click`, window.debounce(window.cards.cardOpen));
    map.addEventListener(`keydown`, (evt) => {
      window.util.onEnterPress(evt, window.debounce(window.cards.cardOpen));
    });
  };

  const removeEvents = () => {
    window.pins.removePins();
    window.cards.cardClose();

    map.classList.add(`map--faded`);
    adForm.classList.add(`ad-form--disabled`);
    mapPinMain.style = `left: 570px;top: 375px;`;

    formActivation(mapFilters, false);
    formActivation(adForm, false);
    window.validation.removeValidation();
    adForm.removeEventListener(`submit`, (evt) => {
      window.backend.adFormSave(evt, removeEvents);
    });
    adForm.removeEventListener(`reset`, removeEvents);

    map.removeEventListener(`click`, window.cards.cardOpen);
    map.removeEventListener(`keydown`, (evt) => {
      window.util.onEnterPress(evt, window.cards.cardOpen);
    });
  };

  mapPinMain.addEventListener(`mousedown`, (evt) => {
    window.util.onLeftMouseButtonPress(evt, addEvents)
  });

  mapPinMain.addEventListener(`keydown`, (evt) => {
    window.util.onEnterPress(evt, addEvents);
  });

  formActivation(mapFilters, false);
  formActivation(adForm, false);

  window.events = {
    formActivation,
    removeEvents
  };
})();
