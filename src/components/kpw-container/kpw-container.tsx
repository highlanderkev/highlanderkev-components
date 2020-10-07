import { Component, h } from '@stencil/core';

@Component({
  tag: 'kpw-container',
  styleUrl: 'kpw-container.scss',
  shadow: false
})
export class KPWContainerElement {

  render() {
    return  <div class="container">
              <slot></slot>
            </div>
  }
}
