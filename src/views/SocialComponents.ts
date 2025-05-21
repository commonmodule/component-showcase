import { AppRoot, Dom, el, View } from "@commonmodule/app";
import { AlertDialog } from "@commonmodule/app-components";
import {
  ChatMessageForm,
  ChatMessageList,
  SocialCompConfig,
  User,
} from "@commonmodule/social-components";
import { v4 as uuidv4 } from "uuid";
import getTestChatHistory, { testAuthors } from "../data/getTestChatHistory.js";

SocialCompConfig.Avatar = class extends Dom {
  constructor(user: User) {
    super(".avatar", el("img", { src: user.avatarUrl }));
  }
};

SocialCompConfig.showUserInfo = (author) => {
  new AlertDialog({
    title: "User Information",
    message:
      `Name: ${author.name}\nID: ${author.id}\nAvatar: ${author.avatarUrl}`,
  });
};

SocialCompConfig.fetchUser = async (userId) => {
  return testAuthors.find((author) => author.id === userId) ?? {
    id: userId,
    name: "Unknown",
  };
};

export default class SocialComponents extends View {
  constructor() {
    super();

    this.container = el(
      ".showcase-view.social-components-view",
      el("h1", "Social Components"),
    ).appendTo(AppRoot);

    // Chat
    let messageList: ChatMessageList;
    this.container.append(
      el(
        "section.chat",
        el("h2", "Chat"),
        messageList = new ChatMessageList(getTestChatHistory()),
        new ChatMessageForm((newMessage) =>
          messageList.addMessage({
            id: uuidv4(),
            author: "user1",
            content: newMessage,
            createdAt: new Date().toISOString(),
          })
        ),
      ),
    );
  }
}
