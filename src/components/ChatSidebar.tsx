
import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const ChatSidebar = () => {
  return (
    <Sidebar className="bg-[#202123] border-r border-[#4d4d4f]">
      <SidebarContent className="p-2">
        <Button 
          className="w-full bg-transparent border border-white/20 hover:bg-white/10 transition-colors"
          onClick={() => console.log("New chat clicked")}
        >
          <Plus className="mr-2 h-4 w-4" />
          New chat
        </Button>
        
        <div className="mt-4 space-y-2">
          {/* Chat history items will go here */}
        </div>
      </SidebarContent>
      <SidebarTrigger className="absolute left-full top-4 bg-[#202123] text-white" />
    </Sidebar>
  );
};

export default ChatSidebar;
