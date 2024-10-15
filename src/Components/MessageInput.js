import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../redux/chatSlice';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.chat.currentUser);

  const handleSendMessage = () => {
    if (input.trim() === '') {
      setError('Message cannot be empty');
      return;
    }
    const message = {
      id: Date.now(),
      userId: currentUser.id,
      text: input,
      timestamp: new Date().toLocaleTimeString(),
      isReceived: false,
    };
    dispatch(sendMessage(message));
    setInput('');
    setError('');
  };

  return (
    <Box sx={{ display: 'flex', marginTop: 2 }}>
      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        error={!!error}
        helperText={error}
        placeholder="Type a message..."
        variant="outlined"
      />
      <Button onClick={handleSendMessage} variant="contained" color="primary" sx={{ marginLeft: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;