
import React, { createContext, useState, useContext } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type Chat = {
  id: string;
  title: string;
  messages: Message[];
};

type ChatContextType = {
  chats: Chat[];
  currentChatId: string | null;
  createNewChat: () => void;
  sendMessage: (content: string) => void;
  getCurrentChat: () => Chat | undefined;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);

  // Create a new chat
  const createNewChat = () => {
    const newChatId = Date.now().toString();
    const newChat: Chat = {
      id: newChatId,
      title: 'New Chat',
      messages: [],
    };
    
    setChats([newChat, ...chats]);
    setCurrentChatId(newChatId);
  };

  // Send a message in the current chat
  const sendMessage = (content: string) => {
    if (!currentChatId) {
      // If no chat exists, create one
      createNewChat();
      // We need to wait for state update, so we queue this
      setTimeout(() => {
        addMessageToCurrentChat(content);
      }, 0);
      return;
    }
    
    addMessageToCurrentChat(content);
  };

  const addMessageToCurrentChat = (content: string) => {
    setChats(currentChats => {
      return currentChats.map(chat => {
        if (chat.id === currentChatId) {
          // Add user message
          const userMessage: Message = {
            role: 'user',
            content,
          };
          
          // Add AI response (simulated)
          const aiMessage: Message = {
            role: 'assistant',
            content: 'This is a placeholder response. The actual AI backend will be implemented separately.',
          };
          
          return {
            ...chat,
            messages: [...chat.messages, userMessage, aiMessage],
            title: content.slice(0, 30) + (content.length > 30 ? '...' : ''), // Use first message as title
          };
        }
        return chat;
      });
    });
  };

  // Get the current active chat
  const getCurrentChat = () => {
    return chats.find(chat => chat.id === currentChatId);
  };

  return (
    <ChatContext.Provider 
      value={{ 
        chats, 
        currentChatId, 
        createNewChat, 
        sendMessage,
        getCurrentChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
