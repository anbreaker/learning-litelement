import { LitElement, html, css } from 'lit';

import stylesLogin from './styles/styles';
import './components/LoginLit';

class AppLit extends LitElement {
  static get properties() {
    return {
      success: { type: Boolean },
    };
  }

  static get styles() {
    return stylesLogin;
  }

  render() {
    return html`
      ${this.success
        ? html`
            <main>
              <h1>Welcome User dd!</h1>
              <button @click="${this._hideOrShowLogin}">Go Login</button>
            </main>
          `
        : html`
            <main>
              <login-lit @login="${this._hideOrShowLogin}"></login-lit>
            </main>
          `}
    `;
  }

  _hideOrShowLogin() {
    this.success = !this.success;
  }
}

customElements.define('app-lit', AppLit);
