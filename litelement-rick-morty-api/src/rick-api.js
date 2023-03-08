import { LitElement, html } from 'lit';

import './components/GetData';
import './components/ApiTemplate';
import cssRick from './styles/rickStyle.js';

class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array },
    };
  }

  static get styles() {
    return cssRick;
  }

  constructor() {
    super();

    this.wiki = [];

    this.addEventListener('api-data', (ev) => {
      console.log(ev.detail);
      this._dataFormat(ev.detail);
    });
  }

  _dataFormat(data) {
    let characters = [];

    data.forEach(({ gender, id, image, name, species, status }) => {
      characters.push({ gender, id, image, name, species, status });
    });

    this.wiki = characters;
  }

  render() {
    return html`
    <api-template></api-template>

    <get-data url="https://rickandmortyapi.com/api/character" method="GET"/></get-data>

    <div class="container">
      ${this.dataTemplates}
    </div>
  `;
  }

  get dataTemplates() {
    return html`
      ${this.wiki.map(
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
