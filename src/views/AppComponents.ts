import { AppRoot, el, View } from "@commonmodule/app";
import {
  Button,
  ButtonGroup,
  ButtonType,
  Checkbox,
  Input,
  Select,
} from "@commonmodule/app-components";
import { AddIcon } from "@commonmodule/svg-icons";

export default class AppComponents extends View {
  constructor() {
    super();
    this.container = el(
      ".showcase-view.app-components-view",
      el("h1", "App Components"),
    ).appendTo(AppRoot);

    this.container.append(
      el(
        "section.button",
        el("h2", "Button"),
        el(
          "section",
          el("h3", "Basic Button"),
          el(
            ".button-container",
            new Button({ type: ButtonType.Text, title: "Text" }),
            new Button({ type: ButtonType.Contained, title: "Contained" }),
            new Button({ type: ButtonType.Outlined, title: "Outlined" }),
            new Button({ type: ButtonType.Icon, icon: new AddIcon() }),
          ),
        ),
        el(
          "section",
          el("h3", "Disabled Button"),
          el(
            ".button-container",
            new Button({
              type: ButtonType.Text,
              title: "Text",
              disabled: true,
            }),
            new Button({
              type: ButtonType.Contained,
              title: "Contained",
              disabled: true,
            }),
            new Button({
              type: ButtonType.Outlined,
              title: "Outlined",
              disabled: true,
            }),
            new Button({
              type: ButtonType.Icon,
              icon: new AddIcon(),
              disabled: true,
            }),
          ),
        ),
        el(
          "section",
          el("h3", "Button with Icon"),
          el(
            ".button-container",
            new Button({
              type: ButtonType.Text,
              title: "Text",
              icon: new AddIcon(),
            }),
            new Button({
              type: ButtonType.Contained,
              title: "Contained",
              icon: new AddIcon(),
            }),
            new Button({
              type: ButtonType.Outlined,
              title: "Outlined",
              icon: new AddIcon(),
            }),
          ),
        ),
        el(
          "section",
          el("h3", "Loading Button"),
          el(
            ".button-container",
            new Button({
              type: ButtonType.Text,
              title: "Text",
            }).startLoading(),
            new Button({
              type: ButtonType.Contained,
              title: "Contained",
            }).startLoading(),
            new Button({
              type: ButtonType.Outlined,
              title: "Outlined",
            }).startLoading(),
            new Button({
              type: ButtonType.Icon,
              icon: new AddIcon(),
            }).startLoading(),
          ),
        ),
        el(
          "section.button-group",
          el("h3", "Button Group"),
          new ButtonGroup(
            new Button({ type: ButtonType.Outlined, title: "One" }),
            new Button({ type: ButtonType.Outlined, title: "Two" }),
            new Button({ type: ButtonType.Outlined, title: "Three" }),
          ),
        ),
      ),
      el(
        "section.form",
        el("h2", "Form"),
        el(
          "section",
          el("h3", "Input"),
          new Input({
            label: "Input Label",
            required: true,
            placeholder: "Enter text",
          }),
          new Input({
            label: "Multiline Input",
            required: true,
            placeholder: "Enter text",
            multiline: true,
          }),
          new Input({
            label: "Read-Only Input",
            required: true,
            placeholder: "Enter text",
            value: "Read-Only Text",
            readOnly: true,
          }),
          new Input({
            label: "Input with Icon",
            required: true,
            placeholder: "Enter text",
            suffixIcon: new AddIcon(),
          }),
        ),
        el(
          "section",
          el("h3", "Select"),
          new Select({
            label: "Select Label",
            required: true,
            placeholder: "Select an option",
            options: [
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ],
          }),
        ),
        el(
          "section",
          el("h3", "Checkbox"),
          new Checkbox({
            label: "Checkbox Label",
            required: true,
            checked: true,
          }),
        ),
        el("section", el("h3", "File Dropzone")),
      ),
      el(
        "section.navigation",
        el("h2", "Navigation"),
        el("section", el("h3", "Menu")),
        el("section", el("h3", "Tabs")),
        el("section", el("h3", "File Tree")),
      ),
      el(
        "section.display",
        el("h2", "Display"),
        el("section", el("h3", "Alert")),
        el("section", el("h3", "Modal")),
        el("section", el("h3", "Dialog")),
      ),
      el(
        "section",
        el("h2", "Miscellaneous"),
        el("section", el("h3", "Accordion")),
        el("section", el("h3", "Image Viewer")),
      ),
    );
  }
}
