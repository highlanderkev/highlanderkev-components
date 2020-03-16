import {CardElement} from "../card/index.js";
import {BrowserStorage, ApiService} from '../../services/index.js';

const storageKey = 'gists';

export class GistsElement extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(){
        super();
        this.innerHTML = GistsElement.template;
    }
    
    /**
     * @override
     */
    connectedCallback(){
        this.getGithubGists();
    }
    
    getGithubGists(){
        if(BrowserStorage.getItem(storageKey)){
            this.appendGists(BrowserStorage.getItem(storageKey));
        }else{
            this.getGistsFromAPI();
        }
    }
    
    getGistsFromAPI(){
        let request = ApiService.getGists();
        request.done((response) => {
            if(response && response.length > 0){
                BrowserStorage.setItem(storageKey, response);
                this.appendGists(response);
            }else{
                console.log("Error in getGistsFromAPI");
            }
        });
    }
    
    appendGists(gists){
        if(gists){
            gists.forEach((gist) => {
                let text = Object.keys(gist.files).join(' | ');
                let gistElement = new CardElement({
                    title: gist.description,
                    subtitle: `${gist.html_url} | ${gist.git_pull_url}`,
                    text: text,
                    openAction: gist.html_url
                });
                document.querySelector('section.gists').appendChild(gistElement);
            });
            
        }
    }
    
    /**
     * Static method to get template.
     */
    static get template(){
        return '<section class="gists"></section>;'
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'app-gists';
    }
}
window.customElements.define(GistsElement.is, GistsElement);