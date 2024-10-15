// ChatBox.js


import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import { chatBoxStyles } from '../styles/ChatStyles';

const ChatBox = () => {
  const messages = useSelector((state) => state.chat.messages);
  const typingUser = useSelector((state) => state.chat.typingUser);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box sx={chatBoxStyles}>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
      {typingUser && <TypingIndicator />}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatBox;