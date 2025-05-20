import { AppRoot, el, View } from "@commonmodule/app";

export default class SVGIconsView extends View {
  constructor() {
    super();
    this.container = el(
      ".showcase-view.svg-icons-view",
      el("h1", "SVG Icons"),
    ).appendTo(AppRoot);
  }
}
