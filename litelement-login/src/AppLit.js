import { LitElement, html } from 'lit';

import './components/LoginLit';

class AppLit extends LitElement {
  static get properties() {
    return {};
  }

  render() {
    return html`
      <login-lit></login-lit>
    `;
  }
}

// https://www.youtube.com/watch?v=mPrwizYpo2s&list=PLZY6lUu6oCWjC4BdA-_jcz6Fesu7LzxUi&index=2

customElements.define('app-lit', AppLit);
