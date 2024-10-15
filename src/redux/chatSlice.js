//chatSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    { id: 1, userId: 1, text: "Hello!", timestamp: "10:00 AM", isReceived: false },
    { id: 2, userId: 2, text: "Hi! How are you?", timestamp: "10:01 AM", isReceived: true },
  ],
  currentUser: { id: 1, name: "Alice" },
  typingUser: null,
  onlineUsers: [{ id: 2, name: "Bob", isOnline: true }],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setTypingUser: (state, action) => {
      state.typingUser = action.payload;
    },
  },
});

export const { sendMessage, receiveMessage, setTypingUser } = chatSlice.actions;
export default chatSlice.reducer;