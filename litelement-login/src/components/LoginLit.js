import { LitElement, html } from 'lit';

export class LoginLit extends LitElement {
  render() {
    return html`
      <p>loginLit</p>
    `;
  }
}

customElements.define('login-lit', LoginLit);
