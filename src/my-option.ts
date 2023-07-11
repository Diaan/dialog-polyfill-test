import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-option')
export class MyOption extends LitElement {
  @state() counter = 0;
  render() {
    return html`<slot></slot><span> clicks= ${this.counter}</span>`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  handleClick() {
    console.log('clicked option');
    this.counter++;
  }

  static styles = css`
    :host {
      border: 1px solid gold;
      padding: 2px 4px;
      display: flex;
      flex-direction: column;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-option': MyOption;
  }
}
