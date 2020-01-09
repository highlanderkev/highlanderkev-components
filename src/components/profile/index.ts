import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('kpw-profile')
export class ProfileComponent extends LitElement {
  @property({ type: String })
  public name: string = '';

  @property({ type: String })
  public title: string = '';

  @property({ type: String })
  public url: string = '';

  static get styles() {
    return css`
      .profile {
        display: flex;
        padding: 10px;
        text-align: center;
        line-height: 2px;
      }
      .profile.profile-container {
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      .profile-name {
        font-weight: 400;
      }
      .profile-title {
        font-weight: 300;
        margin: 0;
      }
      .profile-pic {
        width: 75px;
        height: 75px;
        border: 0;
        border-radius: 50%;
      }
    `;
  }

  public render() {
    return html`
      <div class="profile profile-container">
        <img src="${this.url}" class="profile-pic" />
        <h3 class="profile-name">${this.name}</h3>
        <h5 class="profile-title">${this.title}</h5>
      </div>
    `;
  }
}
