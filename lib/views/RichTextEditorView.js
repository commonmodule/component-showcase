import { AppRoot, el, View } from "@commonmodule/app";
export default class RichTextEditorView extends View {
    constructor() {
        super();
        this.container = el(".showcase-view.rich-text-editor-view", el("h1", "Rich Text Editor")).appendTo(AppRoot);
    }
}
//# sourceMappingURL=RichTextEditorView.js.map