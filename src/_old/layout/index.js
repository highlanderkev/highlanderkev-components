import template from './template.html';

/**
 * Main layout Class for website.
 */
export class Layout extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(){
        super();
        this.createShadowRoot().appendChild(document.importNode(template.content, true));
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'app-layout';
    }
}
window.customElements.define(Layout.is, Layout);