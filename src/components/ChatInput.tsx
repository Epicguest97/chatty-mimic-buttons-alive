
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-white/20 bg-[#343541] p-4">
      <form 
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto relative"
      >
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          className="w-full resize-none bg-[#40414f] rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-1 focus:ring-primary text-white"
          placeholder="Send a message..."
          style={{ maxHeight: '200px' }}
        />
        <Button 
          type="submit"
          className="absolute right-2 bottom-2 p-1 hover:bg-[#202123] bg-transparent"
          disabled={!message.trim()}
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
      <div className="text-center text-xs text-gray-400 mt-2">
        ChatGPT Clone. Messages are not processed by AI.
      </div>
    </div>
  );
};

export default ChatInput;
