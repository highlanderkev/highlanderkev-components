// import {PolymerElement, html} from '@polymer/polymer';
// import {customElement, property} from '@polymer/decorators';
// import '@polymer/paper-card/paper-card';
// import '@polymer/paper-button/paper-button';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kpw-card',
  shadow: true
})
export class KPWCardComponent {
  /**
   * Heading property
   * @type {string}
   * @memberof KPWCardElement
   */
  @Prop()
  public heading: string = 'heading';

  /**
   * Content property
   * @type {string}
   * @memberof KPWAppElement
   */
  @Prop()
  public content: string;

  /**
   * Image URL Property
   * @type {string}
   * @memberof KPWCardElement
   */
  @Prop()
  public imageUrl: string = 'http://placehold.it/350x150/FFC107/000000';

  /**
   * Main Template Function
   * @readonly
   * @static
   * @memberof KPWAppElement
   */
  render() {
      return <div class="card">{this.content}</div>;
          // <paper-card heading="{{heading}}" image="{{imageUrl}}"alt="card">
          //     <div class="card-content">
          //         {{content}}
          //     </div>
          //     <div class="card-actions">
          //         <paper-button>Share</paper-button>
          //         <paper-button>Explore!</paper-button>
          //     </div>
          // </paper-card>;
  }
}
