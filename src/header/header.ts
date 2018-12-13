import { LitElement, html, property } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

export class HeaderComponent extends LitElement {


    public render(): TemplateResult {
        return html``;
    }

    static get is(): string {
        return 'kpw-header';
    }
}
window.customElements.define(HeaderComponent.is, HeaderComponent);
