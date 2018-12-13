// import {PolymerElement, html} from '@polymer/polymer';
// import {customElement, property} from '@polymer/decorators';
import {LitElement, html, property} from '@polymer/lit-element';

/**
 * Main App Element
 * @export
 * @class KPWAppElement
 * @extends {LitElement}
 */
// @customElement('kpw-app')
export class KPWAppElement extends LitElement {

    /**
     * My Property
     * @type {string}
     * @memberof KPWAppElement
     */
    @property({type: String})
    public myProperty: string = 'foot';

    public render() {
        return html`${this.template}`;
    }

    /**
     * @memberof KPWAppElement
     */
    get template() {
        return html`<p>${this.myProperty}</p>`;
    }

    static get is() {
        return 'kpw-app';
    }
}
window.customElements.define(KPWAppElement.is, KPWAppElement);
