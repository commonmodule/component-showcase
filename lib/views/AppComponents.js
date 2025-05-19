import { AppRoot, el, View } from "@commonmodule/app";
export default class AppComponents extends View {
    constructor() {
        super();
        this.container = el(".app-components-view", "App Components Showcase")
            .appendTo(AppRoot);
    }
}
//# sourceMappingURL=AppComponents.js.map