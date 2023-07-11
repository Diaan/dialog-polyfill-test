import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-option')
export class MyOption extends LitElement {
  render() {
    return html`<slot @click="${() => console.log('clicked option')}"></slot>`;
  }
  static styles = css`
    :host {
      border: 1px solid gold;
      padding: 2px 4px;
      display: inline-flex;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-option': MyOption;
  }
}
