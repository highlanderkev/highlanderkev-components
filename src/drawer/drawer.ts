// import {PolymerElement, html} from '@polymer/polymer';
// import {customElement, property} from '@polymer/decorators';
import { LitElement, html, property } from '@polymer/lit-element';

/**
 * Main App Element
 * @export
 * @class KPWAppElement
 * @extends {LitElement}
 */
// @customElement('kpw-drawer')
export class DrawerComponent extends LitElement {
  /**
   * My Property
   * @type {string}
   * @memberof KPWAppElement
   */
  @property({ type: String })
  public myProperty: string = 'foot';

  public render() {
    return html`
      ${this.template}
    `;
  }

  /**
   * @memberof KPWAppElement
   */
  get template() {
    return html`
      <aside class='mdc-drawer'>
        <div class='mdc-drawer__content'>
          <nav class='mdc-list'>
            <a class='mdc-list-item mdc-list-item--activated' href='#' aria-selected='true'>
              <i
                class='material-icons mdc-list-item__graphic'
                aria-hidden='true'
                >inbox</i
              >
              <span class='mdc-list-item__text'>Inbox</span>
            </a>
            <a class='mdc-list-item' href='#'>
              <i
                class='material-icons mdc-list-item__graphic'
                aria-hidden='true'
                >send</i
              >
              <span class='mdc-list-item__text'>Outgoing</span>
            </a>
            <a class='mdc-list-item' href='#'>
              <i
                class='material-icons mdc-list-item__graphic'
                aria-hidden='true'
                >drafts</i
              >
              <span class='mdc-list-item__text'>Drafts</span>
            </a>
          </nav>
        </div>
      </aside>
    `;
  }

  static get is() {
    return 'kpw-drawer';
  }
}
window.customElements.define(DrawerComponent.is, DrawerComponent);
