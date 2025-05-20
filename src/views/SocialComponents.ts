import { AppRoot, el, View } from "@commonmodule/app";

export default class SocialComponents extends View {
  constructor() {
    super();
    this.container = el(
      ".showcase-view.social-components-view",
      el("h1", "Social Components"),
    ).appendTo(AppRoot);
  }
}
