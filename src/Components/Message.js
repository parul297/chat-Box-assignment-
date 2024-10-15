import React from 'react';
import { Box, Typography } from '@mui/material';
import { messageStyles } from '../styles/ChatStyles';

const Message = ({ message }) => {
  const isSent = !message.isReceived;

  return (
    <Box sx={messageStyles(isSent)}>
      <Typography variant="body2">{message.text}</Typography>
      <Typography variant="caption" sx={{ marginLeft: 1 }}>
        {message.timestamp}
      </Typography>
    </Box>
  );
};

export default Message;