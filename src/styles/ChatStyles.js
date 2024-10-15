 
export const chatBoxStyles = {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };
  
  export const messageStyles = (isSent) => ({
    alignSelf: isSent ? 'flex-end' : 'flex-start',
    backgroundColor: isSent ? '#E0F7FA' : '#F1F1F1',
    borderRadius: '10px',
    padding: '10px',
    maxWidth: '60%',
    marginBottom: '10px',
    wordWrap: 'break-word',
  });