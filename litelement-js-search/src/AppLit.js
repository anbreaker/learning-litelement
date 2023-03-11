import { LitElement, html } from 'lit';

import stylesLogin from './styles/styles';

class AppLit extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      result: { type: Array },
    };
  }

  static get styles() {
    return stylesLogin;
  }

  constructor() {
    super();
    this.data = [{ so: 'android' }, { so: 'linux' }, { so: 'mac' }];
    this.result = this.data;
  }

  render() {
    return html`
      <main>
        <div class="container">
          <h1>LitElement Search</h1>
          <input @keyup="${this._filterData}" type="text" id="form" />
          <button @click="${this._filterData}">Search</button>
          <ul>
            ${this.result.map(
              (item) =>
                html`
                  <li>${item.so}</li>
                `
            )}
          </ul>
        </div>
      </main>
    `;
  }

  _filterData() {
    const input = this.shadowRoot.querySelector('#form').value.toLowerCase();
    this.result = [];

    this.data.map((item) => {
      const so = item.so.toLowerCase();

      if (so.indexOf(input) !== -1) {
        this.result = [...this.result, item];
      }
    });

    if (this.result.length < 1) {
      this.result = [{ so: 'Without data...' }];
    }
  }
}

customElements.define('app-lit', AppLit);
