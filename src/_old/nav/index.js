import template from './template.html';
import * as mdc from 'material-components-web';
import './link/index.js';

/**
 * Main Nav Menu for app.
 */
export class Nav extends HTMLElement {
    static get is(){
        return 'app-nav';
    }
    
    createdCallback(){
        this.appendChild(document.importNode(template.content, true));
        let menu = new mdc.menu.MDCSimpleMenu(this.querySelector('nav.mdc-simple-menu'));
        this.querySelector('button.mdc-button').addEventListener('click', () => menu.open = !menu.open);
    }
    
    showRepos(){
        
    }
    
    showGists(){
        
    }
}
document.registerElement(Nav.is, Nav);