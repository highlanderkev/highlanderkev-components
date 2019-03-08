import { LitElement, html, customElement, property } from 'lit-element';

@customElement('kpw-app')
export class KPWAppElement extends LitElement {
  @property({ type: String })
  public myProperty: string = 'foot';

  public render() {
    return html`
      <p>${this.myProperty}</p>
    `;
  }
}
