import {PolymerElement, html} from '@polymer/polymer';
import {customElement, property} from '@polymer/decorators';

@customElement('kpw-app')
class KPWAppElement extends PolymerElement {

    @property({type: String})
    public myProperty: string = 'foot';

    static get template() {
        return html`<p>{{myProperty}}</p>`;
    }
}
