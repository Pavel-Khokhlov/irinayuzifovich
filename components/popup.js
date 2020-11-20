import { popup, popupOpened, popupClose } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._close = this._close.bind(this);
    this._overlayElement = null;
    this.handleEscClose = this.handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add(popupOpened);
    document.body.style.overflow = "hidden"; // OFF SCROLL
    document.addEventListener("keydown", this.handleEscClose);
  }

  _close() {
    this._popup.classList.remove(popupOpened);
    document.body.style.overflow = "visible"; // ON SCROLL
    document.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose(e) {
    if (e.key === "Escape") {
      this._close();
    }
  }

  _handleOverlayClose(e) {
    if (e.target === e.currentTarget) {
      this._close();
    }
  }

  setEventListeners() {
    // CLOSE BY BUTTON
    const closePopup = this._popup.querySelectorAll(popupClose);
    closePopup.forEach((btn) => {
      btn.addEventListener("click", this._close);
    });
    // CLOSE BY OVERLAY
    this._overlayElement = this._popup.closest(popup);
    this._overlayElement.addEventListener(
      "click",
      this._handleOverlayClose.bind(this)
    );
  }
}
