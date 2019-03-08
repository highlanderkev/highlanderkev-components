import { LitElement, html, customElement, property } from 'lit-element';
import '@polymer/paper-card/paper-card';
import '@polymer/paper-button/paper-button';

@customElement('kpw-card')
export class KPWCardElement extends LitElement {
  @property({ type: String })
  public heading: string = 'heading';

  @property({ type: String })
  public content: string = 'content';

  @property({ type: String })
  public imageUrl: string = 'http://placehold.it/350x150/FFC107/000000';

  public render() {
    return html`
      <paper-card heading="${this.heading}" image="${this.imageUrl}" alt="card">
        <div class="card-content">
          ${this.content}
        </div>
        <div class="card-actions">
          <paper-button>Share</paper-button>
          <paper-button>Explore!</paper-button>
        </div>
      </paper-card>
    `;
  }
}
