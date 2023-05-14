import { LitElement, html } from 'lit-element';

import searchStyle from '../styles/searchStyle';

class SearchSimple extends LitElement {
  static get properties() {
    return {
      originalData: { type: Array },
      result: { type: Array },
    };
  }

  static get styles() {
    return searchStyle;
  }

  constructor() {
    super();

    this.data = [];
  }

  render() {
    return html`
      <main>
        <input
          @keyup="${this._filterData}"
          type="text"
          id="form"
          placeholder="Search your favorite character"
        />
      </main>
    `;
  }

  _filterData(ev) {
    const input = ev.target.value;

    this.result = this.originalData.filter((character) => {
      return character.name.toLowerCase().indexOf(input) > -1;
    });

    const filterData = new CustomEvent('filter-data', {
      detail: { filterData: this.result, input },
      bubbles: true,
    });

    this.dispatchEvent(filterData);
  }
}

customElements.define('search-simple', SearchSimple);
