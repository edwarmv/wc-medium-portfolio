import { customElement, property } from "lit/decorators.js";
import { decodeObject } from "../services/helper";
import "./medium-category-chip";
import { LitElement, css, html } from "lit";

const componentStyle = css``;

@customElement("medium-category-chips")
class MediumCategoryChips extends LitElement {
  static style = componentStyle;

  @property({ type: Array })
  categories!: string[];

  render() {
    return html`
      <div class="chips">
        ${this.categories.map(
          (category) =>
            html`<medium-category-chip>${category}</medium-category-chip>`,
        )}
      </div>
    `;
  }
}
