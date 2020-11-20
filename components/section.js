export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedCard = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderCards() {
    this._renderedCard.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.append(element);
  }
}