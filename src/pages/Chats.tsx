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

const mockChats: Chat[] = [
  {
    id: "1",
    title: "The Enchanted Forest Quest",
    lastMessage: "You notice a glimmer of light through the thick canopy...",
    timestamp: "2 hours ago",
    unread: true,
  },
  {
    id: "2", 
    title: "Dragon's Lair Adventure",
    lastMessage: "The ancient dragon stirs as you approach...",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    title: "Pirate's Treasure Hunt",
    lastMessage: "X marks the spot on the weathered map...",
    timestamp: "3 days ago",
  },
  {
    id: "4",
    title: "Space Station Mystery",
    lastMessage: "The airlock hisses open revealing...",
    timestamp: "1 week ago",
  },
];

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
            <div className="space-y-1 p-2">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-accent ${
                    selectedChat === chat.id ? "bg-accent" : ""
                  }`}
                  onClick={() => setSelectedChat(chat.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm truncate">{chat.title}</h3>
                        {chat.unread && <Badge variant="secondary" className="h-2 w-2 p-0 rounded-full" />}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{chat.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-2">{chat.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
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