import {CardElement} from "../card/index.js";
import {BrowserStorage, ApiService} from '../../services/index.js';

const storageKey = 'repos';

export class ReposElement extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(){
        super();
        this.innerHTML = ReposElement.template;
    }
    
    /**
     * @override
     */
    connectedCallback(){
        this.getGithubRepos();
    }
    
    /**
     * Gets repos from localstorage or queries api.
     */
    getGithubRepos(){
        if(BrowserStorage.getItem(storageKey)){
            this.appendRepos(BrowserStorage.getItem(storageKey));
        }else{
            this.getReposFromAPI();
        }
    }
    
    getReposFromAPI(){
        let request = ApiService.getRepos();
        request.done((response) => {
            if(response.repos){
                BrowserStorage.setItem(storageKey, response.repos);
                this.appendRepos(response.repos);
            }else{
                console.log("Error in getGithubRepos");
            }
        });
    }
    
    appendRepos(repos){
        if(repos){
            repos.forEach((repo) => {
                let license = repo.license && repo.license.name ? repo.license.name : '';
                let language = repo.language || 'Mixed';
                let repoElement = new CardElement({
                    title: repo.name || '',
                    subtitle: `${language} | ${license} | ${repo.html_url} | ${repo.ssh_url}`,
                    text: repo.description || '',
                    openAction: repo.html_url
                });
                document.querySelector('section.repos').appendChild(repoElement);
            });
        }
    }
    
    /**
     * Static method to get template.
     */
    static get template(){
        return `<section class="repos"></section>`;
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'app-repos';
    }
}
window.customElements.define(ReposElement.is, ReposElement);