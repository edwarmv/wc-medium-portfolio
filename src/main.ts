import { RssFeed, getRssFeed } from "./services/medium-feed";
import "./components/medium-articles";
import "./components/medium-header";
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

const componentStyle = css`
  :root {
    --color-action: #e31b6d;
    --color-bg: #d2dbdd;
    --color-chip-bg: #f2f2f2;
    --color-chip-bg-hover: #e6e6e6;
  }

  #medium-portfolio-app {
    font-family: "Roboto Slab", serif;
    background-color: var(--color-bg);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px px;
  }
`;

const DEFAULT_MAX_ARTICLES = 10;

@customElement("medium-portfolio")
class MediumPortfolio extends LitElement {
  static styles = componentStyle;

  @state()
  private _rssFeed: RssFeed | null = null;

  @property({ type: Boolean, attribute: "hide-header" })
  hideHeader: boolean = false;

  @property()
  username!: string;

  @property({ attribute: "max-articles", type: Number })
  maxArticles: number = DEFAULT_MAX_ARTICLES;

  async firstUpdated(): Promise<void> {
    await this.loadRssFeed();
  }

  async loadRssFeed() {
    this._rssFeed = await getRssFeed(this.username, this.maxArticles);
  }

  render() {
    return this._rssFeed
      ? html`
          <div id="medium-portfolio-app">
            ${this.hideHeader
              ? ""
              : html`<medium-header
                  title="${this._rssFeed.feed.title}"
                  image="${this._rssFeed.feed.image}"
                ></medium-header>`}

            <medium-articles
              .articles="${this._rssFeed.articles}"
            ></medium-articles>
          </div>
        `
      : html``;
  }
}
