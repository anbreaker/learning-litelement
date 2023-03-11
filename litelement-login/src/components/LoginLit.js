import { LitElement, html } from 'lit';

import stylesLogin from '../styles/styles';

export class LoginLit extends LitElement {
  static get styles() {
    return stylesLogin;
  }

  render() {
    return html`
      <div class="container">
        <h2>Login LitElement</h2>
        <input id="email" type="email" placeholder="Your email" />
        <input id="password" type="password" placeholder="Your password" />
        <button @click="${this._login}">Sign in</button>
      </div>
    `;
  }

  _login() {
    const email = this.shadowRoot.querySelector('#email').value;
    const password = this.shadowRoot.querySelector('#password').value;

    if (!!email && !!password) {
      this.dispatchEvent(
        new CustomEvent('login', { detail: { login: true }, bubles: true, composed: true })
      );
    }
  }
}

customElements.define('login-lit', LoginLit);
