import * as mdc from 'material-components-web';
import {NavLink} from "./link/index.js";
import "./styles.scss";

export class NavDrawer extends HTMLElement {
    /**
     * @override
     */
    constructor(){
        super();
        this.innerHTML = NavDrawer.template;
        this.setStyle();
    }
    
    /**
     * @override
     */
    connectedCallback(){
        this.drawer = new mdc.drawer.MDCTemporaryDrawer(this.querySelector('.mdc-temporary-drawer'));
        document.querySelector('button.drawer-toggle-open').addEventListener('click', () => this.drawer.open = true);
        this.querySelector('ul.nav').addEventListener('click', (e) => this.handleNavClick(e));
    }
    
    /**
     * Handles logic for nav clicks.
     */
    handleNavClick(event){
        switch(event.target.id){
            case "repos":
                this.dispatchEvent(new CustomEvent('stateChange', 
                { 
                    detail: {
                        state: 'repos',
                        title: 'Repos'
                    },
                    bubbles: true,
                    cancelable: false
                }));
                this.drawer.open = false;
                break;
            case "gists":
                this.dispatchEvent(new CustomEvent('stateChange',
                { 
                    detail: {
                        state: 'gists',
                        title: 'Gists'
                    },
                    bubbles: true,
                    cancelable: false
                }));
                this.drawer.open = false;
                break;
            case "cv":
                window.open('http://cv.kevinpatrickwestropp.org', "KPW CV");
                this.drawer.open = false;
                break;
            case "blog":
                window.open('https://blog.kevinpatrickwestropp.org', "KPW Blog");
                this.drawer.open = false;
                break;
            case "email":
                window.open("mailto:mail@kevinpatrickwestropp.com", "mail@kevinpatrickwestropp.com");
                this.drawer.open = false;
                break;
            default:
                break;
        }
    }
    
    /**
     * Method for setting style of this element.
     */
    setStyle(){
        this.style.color = "black";
    }
    
    /**
     * Static template getter for this element.
     */
    static get template(){
        return `
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
    
    /**
     * Static getter for component name
     */
    static get is(){
        return 'app-drawer';
    }
}
window.customElements.define(NavDrawer.is, NavDrawer);