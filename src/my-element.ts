import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

let nextUniqueId = 0;
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  #selectId = `sl-select-${nextUniqueId++}`;

  render() {
    return html`
    <button
    role="combobox"
    popovertarget="dialog-${this.#selectId}"
  >
    show popover
  </button>
  <dialog
    id="dialog-${this.#selectId}"
    popover
  > 
    <h1>dialog</h1>
    <section>
    <my-option>Slotted in my-element</my-option>
    <slot></slot>
    </section>
  </dialog>
    `;
  }
  static styles = css`
    :host {
      max-width: 1280px;
      padding: 2rem;
    }


/* stylelint-disable selector-class-pattern */
[popover],
:host(:where([popover])) {
  background-color: canvas;
  border-color: initial;
  border-image: initial;
  border-style: solid;
  border-width: initial;
  color: canvastext;
  height: fit-content;
  margin: auto;
  overflow: auto;
  position: fixed;
  width: fit-content;
  z-index: 2147483647;
}
[popover] {
  position: fixed;
  z-index: 2147483647;
  inset: 0;
  width: fit-content;
  height: fit-content;
  border-width: initial;
  border-color: initial;
  border-image: initial;
  border-style: solid;
  background-color: canvas;
  color: canvastext;
  overflow: auto;
  margin: auto;
}
[popover]:not(.\:popover-open) {
  display: none;
}
[popover]:is(dialog[open]) {
  display: revert;
}
[anchor].\:popover-open {
  inset: auto;
}
@supports selector([popover]:open) {
  [popover]:not(.\:popover-open, dialog[open]) {
    display: revert;
  }
  [anchor]:is(:open) {
    inset: auto;
  }
}
@supports selector([popover]:popover-open) {
  [popover]:not(.\:popover-open, dialog[open]) {
    display: revert;
  }
  [anchor]:is(:popover-open) {
    inset: auto;
  }
}
@supports not (background-color: canvas) {
  [popover] {
    background-color: white;
    color: black;
  }
}
@supports (width: -moz-fit-content) {
  [popover] {
    width: -moz-fit-content;
    height: -moz-fit-content;
  }
}
@supports not (inset: 0) {
  [popover] {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

[popover] {
  inset: 0;
}

[popover]:not(.\\:popover-open),
:host([popover]:not(.\\:popover-open)) {
  display: none;
}

[popover]:is(dialog[open], .\\:popover-open) {
  display: block;
}

[anchor].\\:popover-open {
  inset: auto;
}

@supports selector([popover]:popover-open) {
  [popover]:not(.\\:popover-open, dialog[open]),
  :host([popover]:not(.\\:popover-open, dialog[open])) {
    display: revert;
  }

  [anchor]:is(:popover-open) {
    inset: auto;
  }
}

dialog:popover-open {
  border: 0;
  box-shadow: rgb(153, 153, 153) 1px 1px 6px 0px;
  display: flex;
  opacity: 1;
  z-index: 1;
}


    dialog {
      padding: 10px;
    }
    section {
      display: flex;
      gap: 10px;
    }
    dialog:popover-open {
      display: flex;
      flex-direction: column;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
