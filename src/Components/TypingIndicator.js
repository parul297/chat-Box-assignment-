import React from 'react';
import { Box, Typography } from '@mui/material';

const TypingIndicator = () => {
  return (
    <Box sx={{ fontStyle: 'italic', opacity: 0.6 }}>
      <Typography variant="body2">User is typing...</Typography>
    </Box>
  );
};

export default TypingIndicator;