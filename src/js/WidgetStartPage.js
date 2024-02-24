export default class WidgetStartPage {
  constructor() {
    this.container = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  drawUI() {
    this.checkBinding();
    this.container.innerHTML = WidgetStartPage.markup;
  }

  static get markup() {
    return `<div class="validator__body">
    <div class="validator__content">
      <div class="validator__tittle">
        <h1>Credit Card Validator</h1>
      </div>
      <div class="validator__widget widget">
        <ul class="widget__list">
           <div class="widget__item_absolute">
             <li class="widget__item visa"><span class="card__tittle visually_hidden">Visa</span></li>
           </div>
           <div class="widget__item_absolute">
             <li class="widget__item mastercard"><span class="card__tittle visually_hidden">MasterCard</span>
             </li>
           </div>
           <div class="widget__item_absolute">
             <li class="widget__item amex"><span class="card__tittle visually_hidden">American Express</span></li>
           </div>
           <div class="widget__item_absolute">
             <li class="widget__item discover"><span class="card__tittle visually_hidden">Discover</span></li>
           </div>
           <div class="widget__item_absolute">
             <li class="widget__item jcb"><span class="card__tittle visually_hidden">JCB</span></li>
           </div>
           <div class="widget__item_absolute">
             <li class="widget__item diners"><span class="card__tittle visually_hidden">Dinners Club</span></li>
           </div>
           <div class="widget__item_absolute">
             <li class="widget__item mir"><span class="card__tittle visually_hidden">МИР</span></li>
           </div>
         </ul>
        <form class="widget__form">
          <div class="widget__row">
            <input class="input" type="number" placeholder="Enter the card number">
            <button class="button" type="submit">Click to Validate</button>
          </div>
          <div class="mes d_none">
            <p class="text"></p>
          </div>
        </form>
      </div>
    </div>
  </div>`;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Widget is not bind to DOM');
    }
  }
}
