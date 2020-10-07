import { PolymerElement, html } from '@polymer/polymer';

export class DemoPageElement extends PolymerElement {
    static get is(){
        return 'demo-page';
    }

    static get template (){
        return html`
            <app-card>
            </app-card>
        `;
    }
}
customElements.define(DemoPageElement.is, DemoPageElement);