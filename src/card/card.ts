import {PolymerElement, html} from '@polymer/polymer';
import {customElement, property} from '@polymer/decorators';
import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';

@customElement('kpw-card')
export class KPWCardElement extends PolymerElement {

    /**
     * Heading property
     * @type {string}
     * @memberof KPWCardElement
     */
    @property({type: String})
    public heading: string = 'heading';

    /**
     * Content property
     * @type {string}
     * @memberof KPWAppElement
     */
    @property({type: String})
    public content: string = 'content';

    /**
     * Image URL Property
     * @type {string}
     * @memberof KPWCardElement
     */
    @property({type: String})
    public imageUrl: string = 'http://placehold.it/350x150/FFC107/000000';

    /**
     * Main Template Function
     * @readonly
     * @static
     * @memberof KPWAppElement
     */
    static get template() {
        return html`
            <paper-card heading="{{heading}}" image="{{imageUrl}}"alt="card">
                <div class="card-content">
                    {{content}}
                </div>
                <div class="card-actions">
                    <paper-button>Share</paper-button>
                    <paper-button>Explore!</paper-button>
                </div>
            </paper-card>
        `;
    }
}
