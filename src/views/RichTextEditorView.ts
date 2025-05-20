import { AppRoot, Dom, el, View } from "@commonmodule/app";
import { MarkdownConverter } from "@commonmodule/markdown";
import { MarkdownEditor, RichTextEditor } from "@commonmodule/markdown-editor";

export default class RichTextEditorView extends View {
  constructor() {
    super();
    this.container = el(
      ".showcase-view.rich-text-editor-view",
      el("h1", "Rich Text Editor"),
    ).appendTo(AppRoot);

    let markdownEditor: MarkdownEditor;
    let markdownDocument: Dom;
    let richTextEditor: RichTextEditor;
    let richTextDocument: Dom;

    this.container.append(
      el(
        "section.markdown-editor-section",
        el("h2", "Markdown Editor"),
        markdownEditor = new MarkdownEditor(),
        el("h3", "Preview"),
        markdownDocument = el(".markdown-document"),
      ),
      el(
        "section.rich-text-editor-section",
        el("h2", "Rich Text Editor"),
        richTextEditor = new RichTextEditor(),
        el("h3", "Preview"),
        richTextDocument = el(".markdown-document"),
      ),
    );

    markdownEditor.on("contentChanged", async (newContent: string) => {
      markdownDocument.htmlElement.innerHTML = await MarkdownConverter
        .convertMarkdownToHtml(newContent);
    });
  }
}
