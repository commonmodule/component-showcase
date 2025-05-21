import { Router } from "@commonmodule/app";
import { ChatMessage, User } from "@commonmodule/social-components";

export const testAuthors: User[] = [
  {
    id: "user1",
    name: "Alice",
    avatarUrl: Router.prefix + "/avatars/alice.webp",
  },
  {
    id: "user2",
    name: "Bob",
    avatarUrl: Router.prefix + "/avatars/bob.webp",
  },
  {
    id: "user3",
    name: "Charlie",
    avatarUrl: Router.prefix + "/avatars/charlie.webp",
  },
];

function getTestChatHistory(): ChatMessage[] {
  const now = Date.now();
  const makeTs = (offsetMin: number) =>
    new Date(now - offsetMin * 60_000).toISOString();

  const testChatHistory: ChatMessage[] = [
    {
      id: "1",
      author: testAuthors[0].id,
      content: "Hey everyone! How's it going?",
      createdAt: makeTs(16),
    },
    {
      id: "2",
      author: testAuthors[0].id,
      content: "I hope you're all having a great day!",
      createdAt: makeTs(15),
    },
    {
      id: "3",
      author: testAuthors[1].id,
      content: "Hi Alice! I'm doing well, thanks for asking.",
      createdAt: makeTs(14),
    },
    {
      id: "4",
      author: testAuthors[1].id,
      content: "How about you?",
      createdAt: makeTs(13),
    },
    {
      id: "5",
      author: testAuthors[2].id,
      content: "Hello Alice and Bob! I'm good too.",
      createdAt: makeTs(12),
    },
    {
      id: "6",
      author: testAuthors[2].id,
      content: "What are you all up to today?",
      createdAt: makeTs(11),
    },
    {
      id: "7",
      author: testAuthors[0].id,
      content: "I'm glad to hear that you're both doing well!",
      createdAt: makeTs(10),
    },
    {
      id: "8",
      author: testAuthors[0].id,
      content: "I'm actually working on a new project. It's pretty exciting.",
      createdAt: makeTs(9),
    },
    {
      id: "9",
      author: testAuthors[0].id,
      content: "How about you guys?",
      createdAt: makeTs(8),
    },
    {
      id: "10",
      author: testAuthors[1].id,
      content: "That sounds interesting, Alice. What kind of project is it?",
      createdAt: makeTs(7),
    },
    {
      id: "11",
      author: testAuthors[1].id,
      content: "I'm just catching up on some reading today.",
      createdAt: makeTs(6),
    },
    {
      id: "12",
      author: testAuthors[2].id,
      content: "A new project? Now I'm curious too!",
      createdAt: makeTs(5),
    },
    {
      id: "13",
      author: testAuthors[2].id,
      content: "I'm planning to go for a hike later this afternoon.",
      createdAt: makeTs(4),
    },
    {
      id: "14",
      author: testAuthors[0].id,
      content:
        "It's a web application for tracking daily habits. I'm still in the early stages, but I'm excited about it.",
      replyTo: 10,
      createdAt: makeTs(3),
    },
    {
      id: "15",
      author: testAuthors[0].id,
      content: "Bob, what are you reading? Anything interesting?",
      createdAt: makeTs(2),
    },
    {
      id: "16",
      author: testAuthors[0].id,
      content:
        "And Charlie, a hike sounds lovely! Where are you planning to go?",
      createdAt: makeTs(1),
    },
  ];

  return testChatHistory;
}

export default getTestChatHistory;
