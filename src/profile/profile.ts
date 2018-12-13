import { LitElement, html, property } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
// import { property } from '@polymer/decorators';

export class ProfileComponent extends LitElement {

    @property({type: String})
    public url: string = '';

    public render(): TemplateResult {
        return html`
            <style>
            ${this.styles}
            </style>
            ${this.template}
        `;
    }

    private template(): TemplateResult {
        return html`
        <div class="profile profile-container">
            <div >
                <img src="{{data?.picture}} class="profile-pic">
            </div>
            <div class="profile-name-title">
                <h3>{{name}}</h3>
                <h5>{{title}}</h5>
            </div>
        </div>
        `;
    }

    private styles(): TemplateResult {
        return html`
        .profile {
            display: flex;
            padding: 10px;
        }

        .profile.profile-container {
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              }
              .profile-name-title {
                text-align: center;
                line-height: 2px;
                h3 {
                  font-weight: 400;
                }
                h5 {
                  font-weight: 300;
                  margin: 0;
                }
              }
            }
          }

          .profile-pic {
            img {
              width: 75px;
              height: 75px;
              border: 0;
              border-radius: 50%;
            }
        `;
    }

    static get is(): string {
        return 'kpw-profile';
    }
}
window.customElements.define(ProfileComponent.is, ProfileComponent);
