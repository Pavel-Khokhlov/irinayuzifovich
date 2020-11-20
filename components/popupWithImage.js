import Popup from "./popup.js";
import { zoomImage, zoomCaption } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._zoomPopupElement = document.querySelector(popupSelector);
    this._zoomImage = this._zoomPopupElement.querySelector(zoomImage);
    this._zoomCaption = this._zoomPopupElement.querySelector(zoomCaption);
  }

  open(link, title) {
    this._zoomImage.src = link;
    this._zoomImage.alt = title;
    this._zoomCaption.textContent = title;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
