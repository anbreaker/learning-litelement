import { LitElement } from 'lit';

export class GetData extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.getData();
  }

  async getData() {
    try {
      const response = await fetch(this.url, { method: this.method });

      const data = await response.json();

      this._sendData(data);
    } catch (error) {
      console.log(error);
    }
  }

  _sendData(data) {
    const { results } = data;

    const apiData = new CustomEvent('api-data', { detail: results, bubbles: true });

    this.dispatchEvent(apiData);
  }
}

customElements.define('get-data', GetData);
