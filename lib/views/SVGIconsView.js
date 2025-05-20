import { AppRoot, el, View } from "@commonmodule/app";
import * as Icons from "@commonmodule/svg-icons";
export default class SVGIconsView extends View {
    constructor() {
        super();
        this.container = el(".showcase-view.svg-icons-view", el("h1", "SVG Icons")).appendTo(AppRoot);
        this.container.append(el(".icon-list", ...Object.values(Icons).map((IconComponent) => new IconComponent())));
    }
}
//# sourceMappingURL=SVGIconsView.js.map