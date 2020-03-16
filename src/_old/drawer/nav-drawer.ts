import {LitElement, html, property} from '@polymer/lit-element';

export class NavDrawer extends LitElement {
    @property({type: String})
    mood = 'sad';

    constructor() {
        super();
        this.mood = 'happy';
    }

    render() {
        return html`
        <style>
            ${this.styleTemplate}
        </style>
        <aside class="mdc-temporary-drawer mdc-typography">
            <nav class="mdc-temporary-drawer__drawer">
                <header class="mdc-temporary-drawer__header">
                    <div class="mdc-temporary-drawer__header-content">
                        <app-symbol></app-symbol>
                    </div>
                </header>
                <ul class="mdc-temporary-drawer__content mdc-list nav">
                    <nav-link id="repos" title="Github Repos" startIcon="folder" endIcon="open_in_browser"></nav-link>
                    <nav-link id="gists" title="Github Gists" startIcon="code" endIcon="open_in_browser"></nav-link>
                    <nav-link id="cv" title="Curriculum Vitae" startIcon="school" endIcon="open_in_new"></nav-link>
                    <nav-link id="email" title="Email" startIcon="contact_mail" endIcon="open_in_new"></nav-link>
                </ul>
            </nav>
        </aside>
        `;
    }

    static get styleTemplate(){
        return html`

        `;
    }

    /**
     * Static getter for component name
     */
    static get is(){
        return 'nav-drawer';
    }
}
window.customElements.define(NavDrawer.is, NavDrawer);