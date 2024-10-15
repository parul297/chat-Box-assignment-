import React from 'react';
import ChatBox from './Components/ChatBox';
import MessageInput from './Components/MessageInput';
import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import  store from './redux/store';
import OnlineStatus from './Components/OnlineStatus';

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 2 }}>
        <OnlineStatus />
        <ChatBox />
        <MessageInput />
      </Box>
    </Provider>
  );
}

export default App;