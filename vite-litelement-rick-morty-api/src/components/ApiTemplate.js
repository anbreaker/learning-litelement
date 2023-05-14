import { LitElement, html } from 'lit-element';

import apiStyle from '../styles/apiStyles.js';

export class ApiTemplate extends LitElement {
  static get styles() {
    return apiStyle;
  }

  render() {
    return html`
      <div class="container">
        <h1>The Rick and Morty Api</h1>
        <p class="title">Made with Lit Element</p>
      </div>
    `;
  }
}

customElements.define('api-template', ApiTemplate);
