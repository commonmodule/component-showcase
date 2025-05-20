import { AppRoot, el, View } from "@commonmodule/app";
import { Accordion, AccordionItem, AlertDialog, AppCompConfig, Button, ButtonGroup, ButtonType, Checkbox, ConfirmDialog, DropdownMenu, DropdownMenuGroup, DropdownMenuItem, ErrorAlert, ErrorDialog, FileTree, ImageViewer, InfoAlert, Input, PromptDialog, QuantityInputDialog, Select, StructuredModal, SuccessAlert, Tab, TabGroup, WarningAlert, } from "@commonmodule/app-components";
class CustomModal extends StructuredModal {
    constructor() {
        super(".custom-modal");
        this.appendToHeader(el("h2", "Custom Modal"));
        this.appendToMain(el("p", "This is a custom modal."));
    }
}
export default class AppComponents extends View {
    constructor() {
        super();
        this.container = el(".showcase-view.app-components-view", el("h1", "App Components")).appendTo(AppRoot);
        this.container.append(el("section.button", el("h2", "Button"), el("section", el("h3", "Basic Button"), el(".button-container", new Button({ type: ButtonType.Text, title: "Text" }), new Button({ type: ButtonType.Contained, title: "Contained" }), new Button({ type: ButtonType.Outlined, title: "Outlined" }), new Button({
            type: ButtonType.Icon,
            icon: new AppCompConfig.DownloadIcon(),
        }))), el("section", el("h3", "Disabled Button"), el(".button-container", new Button({
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
            icon: new AppCompConfig.DownloadIcon(),
            disabled: true,
        }))), el("section", el("h3", "Button with Icon"), el(".button-container", new Button({
            type: ButtonType.Text,
            title: "Text",
            icon: new AppCompConfig.DownloadIcon(),
        }), new Button({
            type: ButtonType.Contained,
            title: "Contained",
            icon: new AppCompConfig.DownloadIcon(),
        }), new Button({
            type: ButtonType.Outlined,
            title: "Outlined",
            icon: new AppCompConfig.DownloadIcon(),
        }))), el("section", el("h3", "Loading Button"), el(".button-container", new Button({
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
            icon: new AppCompConfig.DownloadIcon(),
        }).startLoading())), el("section.button-group", el("h3", "Button Group"), new ButtonGroup(new Button({ type: ButtonType.Outlined, title: "One" }), new Button({ type: ButtonType.Outlined, title: "Two" }), new Button({ type: ButtonType.Outlined, title: "Three" })))));
        this.container.append(el("section.form", el("h2", "Form"), el("section", el("h3", "Input"), new Input({
            label: "Input Label",
            required: true,
            placeholder: "Enter text",
        }), new Input({
            label: "Multiline Input",
            required: true,
            placeholder: "Enter text",
            multiline: true,
        }), new Input({
            label: "Read-Only Input",
            required: true,
            placeholder: "Enter text",
            value: "Read-Only Text",
            readOnly: true,
        }), new Input({
            label: "Input with Icon",
            required: true,
            placeholder: "Enter text",
            suffixIcon: new AppCompConfig.DownloadIcon(),
        })), el("section", el("h3", "Select"), new Select({
            label: "Select Label",
            required: true,
            placeholder: "Select an option",
            options: [
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
            ],
        })), el("section", el("h3", "Checkbox"), new Checkbox({
            label: "Checkbox Label",
            required: true,
            checked: true,
        })), el("section", el("h3", "File Dropzone"))));
        this.container.append(el("section.navigation", el("h2", "Navigation"), el("section", el("h3", "Menu"), el(".button-container", new Button({
            title: "Menu",
            onPress: (button, event) => {
                event.stopPropagation();
                const rect = button.calculateRect();
                const menu = new DropdownMenu({
                    left: rect.left,
                    top: rect.bottom,
                });
                const group = new DropdownMenuGroup();
                new DropdownMenuItem({
                    label: "Profile",
                }).appendTo(group);
                new DropdownMenuItem({
                    label: "My account",
                }).appendTo(group);
                new DropdownMenuItem({
                    label: "Logout",
                }).appendTo(group);
                menu.appendToMain(group);
            },
        }), new Button({
            title: "Menu with Icon",
            onPress: (button, event) => {
                event.stopPropagation();
                const rect = button.calculateRect();
                const menu = new DropdownMenu({
                    left: rect.left,
                    top: rect.bottom,
                });
                const group = new DropdownMenuGroup();
                new DropdownMenuItem({
                    icon: new AppCompConfig.SuccessIcon(),
                    label: "Profile",
                }).appendTo(group);
                new DropdownMenuItem({
                    icon: new AppCompConfig.WarningIcon(),
                    label: "My account",
                }).appendTo(group);
                new DropdownMenuItem({
                    icon: new AppCompConfig.ErrorIcon(),
                    label: "Logout",
                }).appendTo(group);
                menu.appendToMain(group);
            },
        }))), el("section", el("h3", "Tabs"), new TabGroup(new Tab({
            label: "Tab 1",
            value: "tab1",
        }), new Tab({
            label: "Tab 2",
            value: "tab2",
        }), new Tab({
            label: "Tab 3",
            value: "tab3",
        }))), el("section", el("h3", "File Tree"), new FileTree([{
                id: "1",
                name: "Root",
                type: "directory",
                children: [
                    {
                        id: "2",
                        name: "Folder 1",
                        type: "directory",
                        children: [],
                    },
                    {
                        id: "3",
                        name: "Folder 2",
                        type: "directory",
                        children: [],
                    },
                    {
                        id: "4",
                        name: "File 1.txt",
                        type: "file",
                    },
                ],
            }]))));
        this.container.append(el("section.display", el("h2", "Display"), el("section", el("h3", "Alert"), new SuccessAlert("This is a success Alert."), new InfoAlert("This is an info Alert."), new WarningAlert("This is a warning Alert."), new ErrorAlert("This is an error Alert.")), el("section", el("h3", "Modal"), el(".button-container", new Button({
            title: "Open Modal",
            onPress: () => new CustomModal(),
        }))), el("section", el("h3", "Dialog"), el(".button-container", new Button({
            title: "Open Alert Dialog",
            onPress: () => new AlertDialog({
                title: "Alert Dialog",
                message: "This is an alert dialog.",
            }),
        }), new Button({
            title: "Open Confirm Dialog",
            onPress: () => new ConfirmDialog({
                title: "Confirm Dialog",
                message: "Are you sure you want to proceed?",
                onConfirm: () => new AlertDialog({
                    title: "Confirmed",
                    message: "You have confirmed the action.",
                }),
            }),
        }), new Button({
            title: "Open Prompt Dialog",
            onPress: () => new PromptDialog({
                title: "Prompt Dialog",
                message: "Please enter your name:",
                placeholder: "Enter name",
                onConfirm: (value) => new AlertDialog({
                    title: "Name Entered",
                    message: `You entered: ${value}`,
                }),
            }),
        }), new Button({
            title: "Open Quantity Input Dialog",
            onPress: () => new QuantityInputDialog({
                title: "Quantity Input Dialog",
                message: "Please enter a quantity:",
                min: 1,
                max: 10,
                value: 5,
                onConfirm: (value) => new AlertDialog({
                    title: "Quantity Entered",
                    message: `You entered: ${value}`,
                }),
            }),
        }), new Button({
            title: "Open Error Dialog",
            onPress: () => new ErrorDialog({
                title: "Error Dialog",
                message: "This is an error dialog.",
            }),
        })))));
        this.container.append(el("section", el("h2", "Miscellaneous"), el("section", el("h3", "Accordion"), new Accordion(new AccordionItem({
            label: "Item 1",
            open: true,
        }, "Content for Item 1"), new AccordionItem({
            label: "Item 2",
            open: false,
        }, "Content for Item 2"), new AccordionItem({
            label: "Item 3",
            open: false,
        }, "Content for Item 3"))), el("section", el("h3", "Image Viewer"), el(".button-container", new Button({
            title: "Open Image Viewer",
            onPress: () => {
                new ImageViewer({
                    images: [{
                            imageUrl: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
                            thumbnailUrl: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
                        }, {
                            imageUrl: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
                            thumbnailUrl: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
                        }, {
                            imageUrl: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
                            thumbnailUrl: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
                        }, {
                            imageUrl: "https://yavuzceliker.github.io/sample-images/image-4.jpg",
                            thumbnailUrl: "https://yavuzceliker.github.io/sample-images/image-4.jpg",
                        }, {
                            imageUrl: "https://yavuzceliker.github.io/sample-images/image-5.jpg",
                            thumbnailUrl: "https://yavuzceliker.github.io/sample-images/image-5.jpg",
                        }],
                    initialIndex: 0,
                });
            },
        })))));
    }
}
//# sourceMappingURL=AppComponents.js.map