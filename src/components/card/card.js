import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';

export class CardElement extends PolymerElement {
    static get is(){
        return 'app-card';
    }

    static get template (){
        return html`
            <style>
                ${this.styleTemplate}
            </style>
            <paper-card>
                <div class="card-content">
                    <h2>Test</h2>
                </div>
            </paper-card>
        `;
    }

    static get styleTemplate(){
        return html`
        paper-card {
            background-color: #0074d9;
            margin: 10px;
            width: 98%;
        }
        `;
    }
}
customElements.define(CardElement.is, CardElement);