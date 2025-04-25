
import React from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatMain = () => {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden">
      <ChatMessages />
      <ChatInput />
    </main>
  );
};

export default ChatMain;
