import '../drawer/index.js';
import './styles.scss';

export class HeaderElement extends HTMLElement {
    constructor(){
        super();
    }
    
    connectedCallback(){
        this.render();
    }
    
    attributeChangedCallback(attr, oldValue, newValue){
        this.render();
    }
    
    setStyles(){
        this.querySelector('header').style.backgroundColor = "blue";
    }
    
    render(){
        this.innerHTML = this.template;
        this.querySelector('app-drawer').addEventListener('stateChange', (e) => { 
            this.title = e.detail.title;
        });
    }
    
    /**
     * Getter for this elements template.
     */
    get template(){
        return `
<header class="mdc-toolbar mdc-toolbar--fixed">
    <section class="mdc-toolbar_section mdc-toolbar__section--align-start">
        <button class="menu-button drawer-toggle-open mdc-button"><i class="material-icons">menu</i></button>
        <span class="mdc-toolbar__title title">${this.title}</span>
    </section>
    <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
        <span><small>&copy; 2017 Kevin Patrick Westropp</small></span>
    </section>
</header>
<app-drawer></app-drawer>
        `;
    }
    
     get title(){
        let title = this.getAttribute('title');
        return title || '';
    }
    
    set title(val){
        this.setAttribute('title', val);
    }
    
    /**
     * Setups what attributes to observe for changes.
     * @override
     */
    static get observedAttributes(){
        return ['title'];
    }
    
    /**
     * Static method to get name of this custom element.
     */
    static get is(){
        return 'app-header';
    }
}
window.customElements.define(HeaderElement.is, HeaderElement);