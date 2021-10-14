import { Component, Prop, h } from '@stencil/core';

/**
 * Main App Element
 * @export
 * @class KPWAppElement
 * @extends {LitElement}
 */
@Component({
  tag: 'kpw-app'
})
export class KPWAppComponent {
    /**
     * My Property
     * @type {string}
     * @memberof KPWAppElement
     */
    @Prop()
    public text: string;

    public render() {
      return <p>{this.text}</p>;
    }
}
