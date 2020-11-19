import { collection } from "../utils/data.js";
import {
  root,
  buttonLanguage,
  paragraphDisabled,
  cardList,
  cardTemplate,
  popupZoomCard,
} from "../utils/config.js";
import Card from "../components/card.js";
import Section from "../components/section.js";
import Popup from "../components/popup.js";
import PopupWithImage from "../components/popupWithImage.js";

const zoomPopup = new PopupWithImage(popupZoomCard);
zoomPopup.setEventListeners();

const openZoomPopup = (name, link) => {
  zoomPopup.open(name, link);
};

const collectionList = new Section(
  {
    items: collection,
    renderer: (item) => {
      const card = new Card(item, cardTemplate, openZoomPopup);
      const cardElement = card.generateCard();
      collectionList.addItem(cardElement);
    },
  },
  cardList
);

defaultPlaceList.renderPlaces();

// CHANGE LANGUAGE
const englishParagraph = document.querySelectorAll(".eng");
const russianParagraph = document.querySelectorAll(".ru");

function changeLanguage() {
  if (root.classList.contains("ru")) {
    buttonLanguage.textContent = "eng";
    russianParagraph.forEach((item) => {
      item.classList.remove(paragraphDisabled);
    });
    englishParagraph.forEach((item) => {
      item.classList.add(paragraphDisabled);
    });
  } else {
    buttonLang.textContent = "rus";
    russianParagraph.forEach((item) => {
      item.classList.add(paragraphDisabled);
    });
    englishParagraph.forEach((item) => {
      item.classList.remove(paragraphDisabled);
    });
  }
}

const handleLang = () => {
  root.classList.toggle("ru");
  root.classList.toggle("eng");
  changeLanguage();
};

buttonLanguage.addEventListener("click", handleLang);

function initLang() {
  englishParagraph.forEach((item) => {
    item.classList.add(paragraphDisabled);
  });
}

initLang();
