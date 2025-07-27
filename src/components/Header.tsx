import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Sword, MessageSquare, Info, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <Sword className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            DungeonCraft AI
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/chats"
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              isActive("/chats") 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Adventures</span>
          </Link>
          
          <Link
            to="/about"
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              isActive("/about") 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            <Info className="h-4 w-4" />
            <span>About</span>
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 p-0"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Sign Up button */}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Button>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;