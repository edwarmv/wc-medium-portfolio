import { customElement, property } from "lit/decorators.js";
import "./medium-avatar";
import { css, html, LitElement } from "lit";

const componentStyle = css`
  .header {
    display: flex;
    align-items: center;
    margin: 10px;
  }
  h1 {
    font-weight: 300;
  }

  medium-avatar {
    margin-left: 15px;
  }
`;

@customElement("medium-header")
class MediumHeader extends LitElement {
  static style = componentStyle;

  @property()
  headertitle!: string;

  @property()
  image!: string;

  render() {
    return html`
      <div class="header">
        <h1>${this.headertitle}</h1>
        <medium-avatar image=${this.image}></medium-avatar>
      </div>
    `;
  }
}
