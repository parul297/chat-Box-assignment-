import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Avatar, Typography } from '@mui/material';

const OnlineStatus = () => {
  const onlineUsers = useSelector((state) => state.chat.onlineUsers);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
      {onlineUsers?.map((user) => (
        <Box key={user?.id} sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
          <Avatar alt={user?.name} />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {user?.name} {user?.isOnline ? 'is online' : 'is offline'}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default OnlineStatus;