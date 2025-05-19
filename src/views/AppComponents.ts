import { AppRoot, el, View } from "@commonmodule/app";
import { Button, ButtonType } from "@commonmodule/app-components";
import { AddIcon } from "@commonmodule/svg-icons";

export default class AppComponents extends View {
  constructor() {
    super();
    this.container = el(
      ".showcase-view.app-components-view",
      el("h1", "App Components Showcase"),
    ).appendTo(AppRoot);

    this.container.append(
      el(
        "section.form-components",
        el("h2", "Form Components"),
        el(
          "section.buttons",
          el("h3", "Buttons"),
          el(
            "section",
            el("h4", "Basic Button"),
            el(
              ".button-container",
              new Button({ type: ButtonType.Text, title: "Text" }),
              new Button({ type: ButtonType.Contained, title: "Contained" }),
              new Button({ type: ButtonType.Outlined, title: "Outlined" }),
              new Button({ type: ButtonType.Icon, icon: new AddIcon() }),
            ),
          ),
        ),
      ),
    );
  }
}
