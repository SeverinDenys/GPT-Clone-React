import { createSlice } from "@reduxjs/toolkit";

const KEY = "chats";

const getStoredItem = () => {
  const data = localStorage.getItem(KEY);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const saveNewChat = (chatId) => {
  const chats = getStoredItem();
  chats.push({ chatId: chatId, items: [] });
  localStorage.setItem(KEY, JSON.stringify(chats));
};

const saveMessage = (chatId, message) => {
  const chats = getStoredItem();
  const newChats = chats.map((chat) => {
    if (chat.chatId === chatId) {
      return { ...chat, items: [...chat.items, message] };
    }
    return chat;
  });
  localStorage.setItem(KEY, JSON.stringify(newChats));
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    items: [],
    chatId: "",
    name: "",
  },
  reducers: {
    addMessage: (state, action) => {
      console.log("action", action);
      if (state.items.length === 0) {
        state.chatId = Math.random().toString();
        saveNewChat(state.chatId);
      }
      saveMessage(state.chatId, action.payload);
      state.items = [...state.items, action.payload];
    },
    setChat: (state, action) => {
      const chatId = action.payload;
      console.log("chatId", chatId);

      const chats = getStoredItem();
      const selectedChat = chats.find(
        (selectedChat) => selectedChat.chatId === chatId
      );

      if (selectedChat) {
        state.items = selectedChat.items;
      } else {
        state.items = [];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage, setChat } = messagesSlice.actions;
export default messagesSlice.reducer;
