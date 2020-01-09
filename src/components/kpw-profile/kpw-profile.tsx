// import { LitElement, html, property } from '@polymer/lit-element';
// import { TemplateResult } from 'lit-html';
// import { property } from '@polymer/decorators';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'kpw-profile',
  styleUrl: 'kpw-profile.css',
  shadow: true
})
export class KPWProfileComponent {
  @Prop()
  public name: string;

  @Prop()
  public position: string;

  @Prop()
  public imageSrc: string;

  @Prop()
  public url: string;

  render() {
    return  <div class="profile profile-container">
              <img src="{this.imageSrc}" class="profile-pic"/>
              <h3 class="profile-name">{this.name}</h3>
              <h5 class="profile-title">{this.position}</h5>
            </div>;
  }
}
