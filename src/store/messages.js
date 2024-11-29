import { createSlice } from "@reduxjs/toolkit";

const KEY = "chats";
const defaultState = {
  items: [],
  chatId: "",
  name: "",
};

export const getStoredItem = () => {
  const data = localStorage.getItem(KEY);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const deleteSelectedChat = (chatId) => {
  const chats = getStoredItem();
  console.log("chats", chats);

  const deletedChat = chats.filter(
    (chatToDelete) => chatToDelete.chatId !== chatId
  );
  localStorage.setItem(KEY, JSON.stringify(deletedChat));
};

const setChatName = (chatId, chatName) => {
  const chats = getStoredItem();
  const newChats = chats.map((chat) => {
    if (chat.chatId === chatId) {
      return { ...chat, name: chatName };
    }
    return chat;
  });
  localStorage.setItem(KEY, JSON.stringify(newChats));
};

const saveNewChat = (chatId) => {
  let RandomBgColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const chats = getStoredItem();
  chats.push({
    chatId: chatId,
    items: [],
    name: "",
    bgColor: RandomBgColor,
  });
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
  initialState: defaultState,
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

      const chats = getStoredItem();
      const selectedChat = chats.find(
        (selectedChat) => selectedChat.chatId === chatId
      );

      if (selectedChat) {
        state.items = selectedChat.items;
        state.chatId = chatId;
        state.name = selectedChat.name;
      } else {
        state.items = defaultState.items;
        state.chatId = defaultState.chatId;
        state.name = defaultState.name;
      }
    },
    newChat: (state) => {
      state.items = defaultState.items;
      state.chatId = defaultState.chatId;
      state.name = defaultState.name;
    },
    setName: (state, action) => {
      state.name = action.payload;
      console.log("stateName redux", state.name);
      setChatName(state.chatId, action.payload);
    },
    setNameById: (state, action) => {
      console.log("action", action);
      state.name = action.payload.name;
      // console.log("stateName redux", state.name);
      setChatName(action.payload.chatId, action.payload.name);
    },
    deleteChat: (state, action) => {
      deleteSelectedChat(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addMessage,
  setChat,
  newChat,
  setName,
  deleteChat,
  setNameById,
} = messagesSlice.actions;
export default messagesSlice.reducer;
