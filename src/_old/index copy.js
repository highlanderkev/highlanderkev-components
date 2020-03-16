import "webcomponentsjs";
import "./images/index.js";
import "./components/index.js";
import "./styles.scss";

export const STATE = {
    REPOS: 'repos',
    GISTS: 'gists'
};

export class AppElement extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(){
        super();
        this.state = STATE.REPOS;
    }
    
    /**
     * Called when the element is inserted into a document, including into a shadow tree
     * @override
     */
    connectedCallback(){
       this.render();
    }
    
    /**
     * Called when attribute is changed, updated, removed.
     * @override
     */
    attributeChangedCallback(attr, oldValue, newValue){
        this.render();
    }
    
    setStyles(){
        //this.querySelector('app-repos').style.display = "block";
        //this.querySelector('app-repos').style.display = "none";
    }
    
    render(){
        this.innerHTML = this.template;
        this.querySelector("app-header.header").addEventListener("stateChange", (e) => { 
            this.state = e.detail.state;
        });
    }
    
    get template(){
        return `
<app-layout>
    <app-header class="header" title="${this.title}"></app-header>
    <main class="main">
        ${this.mainView}
    </main>
</app-layout>
        `;
    }
    
    get title(){
        if(this.state === STATE.REPOS){
            return 'Github Repos';
        }else{
            return 'Github Gists';
        }
    }
    
    get mainView(){
        if(this.state === STATE.REPOS){
            return '<app-repos id="repos"></app-repos>';
        }else{
            return '<app-gists id="gists"></app-gists>';
        }
    }
    
    get state(){
        let state = this.getAttribute('state');
        return state || '';
    }
    
    set state(val){
        this.setAttribute('state', val);
    }
    
    /**
     * Setups what attributes to observe for changes.
     * @override
     */
    static get observedAttributes(){
        return ['state'];
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'kpw-app';
    }
}
window.customElements.define(AppElement.is, AppElement);
