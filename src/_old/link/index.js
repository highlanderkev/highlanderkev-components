export const ATTR = {
    ID: 'id',
    TITLE: 'title',
    START_ICON: 'startIcon',
    END_ICON: 'endIcon'
};

/**
 * Links for Drawer Nav Menu.
 */
export class NavLink extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(){
        super();
    }
    
    /**
     * @override
     */
    connectedCallback(){
        this.innerHTML = this.template;
    }
    
    get template(){
        return `
            <li id="${this.getAttribute(ATTR.ID)}" class="mdc-list-item">
                <i class="mdc-list-item__start-detail material-icons">${this.getAttribute(ATTR.START_ICON)}</i>
                ${this.getAttribute(ATTR.TITLE)}
                <i class="mdc-list-item__end-detail material-icons">${this.getAttribute(ATTR.END_ICON)}</i>
            </li>
        `;
    }
    
    setAttribute(attr, val){
        super.setAttribute(attr, JSON.stringify(val));
    }
    
    getAttribute(attr){
        return super.getAttribute(attr) || '';
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'nav-link';
    }
}
window.customElements.define(NavLink.is, NavLink);