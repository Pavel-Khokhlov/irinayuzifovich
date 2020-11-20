import { collection } from "../utils/data.js";
import {
  bodyRoot,
  buttonMenu,
  buttonLanguage,
  paragraphDisabled,
  cardList,
  cardTemplate,
  popupMenu,
  popupZoomCard,
} from "../utils/constants.js";

import Card from "../components/card.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/popupWithImage.js";
import PopupWithMenu from "../components/popupWithMenu.js";

// ZOOM CARD POPUP

const zoomCardPopup = new PopupWithImage(popupZoomCard);
zoomCardPopup.setEventListeners();

const openZoomPopup = (link, title) => {
  zoomCardPopup.open(link, title);
};

// SHOW MENU POPUP

const menuPopup = new PopupWithMenu(popupMenu);
menuPopup.setEventListeners();

buttonMenu.addEventListener("click", () => menuPopup.open());
 
// LOAD COLLECTION

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

collectionList.renderCards();

// CHANGE LANGUAGE

const englishParagraph = bodyRoot.querySelectorAll(".eng");
const russianParagraph = bodyRoot.querySelectorAll(".ru");

function changeLanguage() {
  if (bodyRoot.classList.contains("ru")) {
    buttonLanguage.textContent = "eng";
    russianParagraph.forEach((item) => {
      item.classList.remove(paragraphDisabled);
    });
    englishParagraph.forEach((item) => {
      item.classList.add(paragraphDisabled);
    });
  } else {
    buttonLanguage.textContent = "rus";
    russianParagraph.forEach((item) => {
      item.classList.add(paragraphDisabled);
    });
    englishParagraph.forEach((item) => {
      item.classList.remove(paragraphDisabled);
    });
  }
}

const handleLang = () => {
  bodyRoot.classList.toggle("ru");
  bodyRoot.classList.toggle("eng");
  changeLanguage();
};

buttonLanguage.addEventListener("click", handleLang);

function initLang() {
  englishParagraph.forEach((item) => {
    item.classList.add(paragraphDisabled);
  });
}

initLang();
