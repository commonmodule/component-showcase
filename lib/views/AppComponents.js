import { AppRoot, el, View } from "@commonmodule/app";
import { Button, ButtonType } from "@commonmodule/app-components";
import { AddIcon } from "@commonmodule/svg-icons";
export default class AppComponents extends View {
    constructor() {
        super();
        this.container = el(".showcase-view.app-components-view", el("h1", "App Components Showcase")).appendTo(AppRoot);
        this.container.append(el("section.form-components", el("h2", "Form Components"), el("section.buttons", el("h3", "Buttons"), el("section", el("h4", "Basic Button"), el(".button-container", new Button({ type: ButtonType.Text, title: "Text" }), new Button({ type: ButtonType.Contained, title: "Contained" }), new Button({ type: ButtonType.Outlined, title: "Outlined" }), new Button({ type: ButtonType.Icon, icon: new AddIcon() }))), el("section", el("h4", "Disabled Button"), el(".button-container", new Button({
            type: ButtonType.Text,
            title: "Text",
            disabled: true,
        }), new Button({
            type: ButtonType.Contained,
            title: "Contained",
            disabled: true,
        }), new Button({
            type: ButtonType.Outlined,
            title: "Outlined",
            disabled: true,
        }), new Button({
            type: ButtonType.Icon,
            icon: new AddIcon(),
            disabled: true,
        }))), el("section", el("h4", "Button with Icon"), el(".button-container", new Button({
            type: ButtonType.Text,
            title: "Text",
            icon: new AddIcon(),
        }), new Button({
            type: ButtonType.Contained,
            title: "Contained",
            icon: new AddIcon(),
        }), new Button({
            type: ButtonType.Outlined,
            title: "Outlined",
            icon: new AddIcon(),
        }))), el("section", el("h4", "Loading Button"), el(".button-container", new Button({
            type: ButtonType.Text,
            title: "Text",
        }).startLoading(), new Button({
            type: ButtonType.Contained,
            title: "Contained",
        }).startLoading(), new Button({
            type: ButtonType.Outlined,
            title: "Outlined",
        }).startLoading(), new Button({
            type: ButtonType.Icon,
            icon: new AddIcon(),
        }).startLoading())))));
    }
}
//# sourceMappingURL=AppComponents.js.map