import { AppRoot, el, View } from "@commonmodule/app";

export default class WalletComponents extends View {
  constructor() {
    super();
    this.container = el(
      ".showcase-view.wallet-components-view",
      el("h1", "Wallet Components"),
    ).appendTo(AppRoot);
  }
}
