import { LitElement, html, customElement, property, css } from 'lit-element';

import './components/GetData';
import './components/ApiTemplate';
import './components/SearchSimple';
import cssRick from './styles/rickStyle.js';

class RickMortyApi extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
    };
  }

  static get styles() {
    return cssRick;
  }

  constructor() {
    super();

    this.data = [];
    this.copyData = [];
    this.filterData = [];
  }

  _waitingData(ev) {
    this._dataFormat(ev.detail);
  }

  _searchFilterData(ev) {
    this.filterData = ev.detail.filterData;
    this.valueInput = ev.detail.input;

    if (this.valueInput.length > 0) {
      this.data = this.filterData;
    } else {
      this.data = this.copyData;
    }
  }

  _dataFormat(data) {
    let characters = [];

    data.forEach(({ gender, id, image, name, species, status }) => {
      characters.push({ gender, id, image, name, species, status });
    });

    this.data = characters;
    this.copyData = [...characters];
  }

  render() {
    return html`
    <api-template></api-template>

    <get-data @api-data="${this._waitingData}" url="https://rickandmortyapi.com/api/character" method="GET"/></get-data>

    <search-simple .originalData="${this.copyData}" 
    @filter-data="${this._searchFilterData}">
    </search-simple>

    <div class="container">
      ${this.dataTemplates}
    </div>
  `;
  }

  get dataTemplates() {
    return html`
      ${this.data.map(
        (character) =>
          html`
            <div class="card">
              <div class="card-content">
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="Image Character Rick&Morty" />
                <p>${character.species} | ${character.status}</p>
              </div>
            </div>
          `
      )}
    `;
  }
}

customElements.define('rick-api', RickMortyApi);
