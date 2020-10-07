import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kpw-card',
  styleUrl: 'kpw-card.scss',
  shadow: true
})
export class KPWCardElement {

  @Prop()
  public heading: string = 'heading';

  @Prop()
  public content: string;

  @Prop()
  public imageUrl: string = 'http://placehold.it/350x150/FFC107/000000';

  render() {
      return <div class="card">
              <div class="card-grid">
                <div class="card-image">
                  <slot name="image"></slot>
                </div>
                <div class="card-header">
                  <slot name="header"></slot>
                </div>
                <div class="card-body">
                  <slot name="body"></slot>
                </div>
                <div class="card-footer">
                  <slot name="footer"></slot>
                </div>
              </div>
            </div>;
  }
}
