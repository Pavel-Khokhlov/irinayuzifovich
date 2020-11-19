import {
  cardList,
  cardImage,
  cardTitle,
  cardTypeRu,
  cardTypeEn,
  cardLinkWa,
} from "../utils/constants.js";

export default class Card {
  constructor(item, selector, handleCardZoom) {
    this._link = item.link;
    this._type_ru = item.type_ru;
    this._type_en = item.type_en;
    this._title = item.title;
    this._selector = selector;
    this._handleCardZoom = handleCardZoom;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._selector)
      .content.querySelector(cardList)
      .cloneNode(true);

    return cardElement;
  }

  _handleCardClick(title, link) {
    this._handleCardZoom(title, link);
  }

  _setEventsListeners() {
    this._image.addEventListener("click", () =>
      this._handleCardClick(this._title, this._link)
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(cardImage);
    this._image.src = this._link;
    this._image.alt = this._title;
    this._element.querySelector(cardTypeRu).textContent = this._type_ru;
    this._element.querySelector(cardTypeEn).textContent = this._type_en;
    this._element.querySelector(cardTitle).textContent = this._title;
    this._element.querySelector(
      cardLinkWa
    ).href = `https://wa.me/79688241313?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%B0%20%D0%B4%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C%20%22${this._title}%22`;
    return this._element;
  }
}
