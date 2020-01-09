import { Component, h } from '@stencil/core';

@Component({
  tag: 'kpw-header',
  shadow: true
})
export class KPWHeaderComponent {
  render() {
      return <header><div>Header</div></header>;
  }
}
