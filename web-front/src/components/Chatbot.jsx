'use client';
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: `Bot: You said "${input}"`, sender: 'bot' }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <Box className="flex flex-col h-screen max-w-md mx-auto bg-gray-100 dark:bg-gray-900">
      <Typography variant="h5" className="p-4 text-center text-gray-800 dark:text-gray-200">
        Simple Chatbot
      </Typography>
      <Paper className="flex-1 m-4 p-4 overflow-y-auto bg-white dark:bg-gray-800">
        {messages.map((msg, index) => (
          <Box
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : 'mr-auto bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            } max-w-xs`}
          >
            {msg.text}
          </Box>
        ))}
      </Paper>
      <Box className="flex p-4 bg-white dark:bg-gray-800">
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          className="flex-1 mr-2"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;