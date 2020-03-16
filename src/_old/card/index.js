import './styles.scss';

export class CardElement extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(options){
        super();
        this.innerHTML = this.renderTemplate(options);
        this.setStyle();
    }
    
    /**
     * Set style for this element.
     */
    setStyle(){
        // this.style.
    }
    
    /**
     * Render template with options from constructor.
     */
    renderTemplate(options = {}){
        return `
<div class="mdc-card mdc-card--theme-dark mdc-elevation--z2">
    ${this.getTitleSectionTemplate(options.title, options.subtitle)}
    ${this.getSupportingTextSectionTemplate(options.text)}
    ${this.getActionSectionTemplate(options.openAction)}
</div>
        `;
    }
    
    /**
     * Getter for title section of card.
     * @param {Object} options - options for card. 
     */
    getTitleSectionTemplate(title = "", subtitle = ""){
        return `
<section class="mdc-card__primary">
    <h1 class="mdc-card__title mdc-card__title--large title">${title}</h1>
    <h2 class="mdc-card__subtitle subtitle">${subtitle}</h2>
</section>
        `;
    }
    
    /**
     * Getter for supporting text section of card.
     */
    getSupportingTextSectionTemplate(text = "Test"){
        return `
<section class="mdc-card__supporting-text">
    ${text}
</section>
        `;
    }
    
    /**
     * Getter for action section of card.
     */
    getActionSectionTemplate(openAction = "#"){
        return `
<section class="mdc-card__actions">
    <a href=${openAction} class="mdc-button mdc-button--compact mdc-card__action" target="_blank">Open <i class="material-icons">open_in_new</i></a>
</section>
        `;
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'app-card';
    }
}
window.customElements.define(CardElement.is, CardElement);
