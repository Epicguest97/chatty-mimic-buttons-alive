
import React from 'react';

const ChatMessages = () => {
  const messages = [
    {
      role: 'assistant',
      content: 'Hello! How can I help you today?'
    },
    {
      role: 'user',
      content: 'Hi! Can you help me with coding?'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-6 ${
            message.role === 'assistant' ? 'bg-[#444654]' : 'bg-[#343541]'
          }`}
        >
          <div className="max-w-3xl mx-auto flex gap-6">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              {message.role === 'assistant' ? 'AI' : 'U'}
            </div>
            <div className="flex-1">{message.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
