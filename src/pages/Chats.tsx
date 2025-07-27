import { useState } from "react";
import { MessageSquare, Plus, Settings, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";

interface Chat {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
}

const mockChats: Chat[] = [];

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(mockChats[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = mockChats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedChatData = mockChats.find(chat => chat.id === selectedChat);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        {/* Chat Sidebar */}
        <div className="w-80 border-r bg-card">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Adventures</h2>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search adventures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <ScrollArea className="h-full">
            <div className="flex flex-col items-center justify-center h-64 text-center space-y-4 p-4">
              <MessageSquare className="h-12 w-12 text-muted-foreground/50" />
              <div className="space-y-2">
                <h3 className="font-medium text-muted-foreground">No Adventures Yet</h3>
                <p className="text-sm text-muted-foreground/70">
                  Start your first adventure to see your stories here
                </p>
              </div>
              <Button className="gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Begin New Adventure
              </Button>
            </div>
          </ScrollArea>
        </div>

        {/* Chat Content */}
        <div className="flex-1 flex flex-col">
          {selectedChatData ? (
            <>
              <div className="p-4 border-b bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-semibold">{selectedChatData.title}</h1>
                    <p className="text-sm text-muted-foreground">Continue your adventure...</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <ScrollArea className="flex-1 p-6">
                <div className="space-y-4 max-w-3xl">
                  {/* Mock conversation */}
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-card p-4 rounded-lg flex-1">
                      <p className="text-sm">
                        Welcome to the Enchanted Forest! You find yourself standing at the edge of a mysterious woodland. 
                        Ancient trees tower above you, their branches forming a canopy so thick that only dappled sunlight 
                        reaches the forest floor. What would you like to do?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-primary text-primary-foreground p-4 rounded-lg max-w-xs">
                      <p className="text-sm">I want to venture deeper into the forest and look for any signs of life.</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-card p-4 rounded-lg flex-1">
                      <p className="text-sm">
                        As you step deeper into the forest, your footsteps are muffled by a carpet of moss and fallen leaves. 
                        You notice strange glowing mushrooms growing at the base of an enormous oak tree. Suddenly, you hear 
                        a faint melody carried on the wind - it sounds almost like singing, but in a language you don't recognize.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              <div className="p-4 border-t bg-card">
                <div className="flex gap-2">
                  <Input placeholder="What do you want to do next?" className="flex-1" />
                  <Button>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Select an adventure to continue your journey</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chats;