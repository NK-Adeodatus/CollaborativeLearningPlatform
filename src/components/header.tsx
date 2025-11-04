import { Moon, Sun, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "./theme-provider";
import { SidebarTrigger } from "./ui/sidebar";

interface HeaderProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

export function Header({ onAuthClick }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4 px-4">
        <SidebarTrigger />
        
        <div className="flex-1 flex items-center gap-4">
          <div className="w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics, libraries, concepts..."
                className="pl-9 bg-input-background"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          <Button variant="ghost" onClick={() => onAuthClick('login')}>
            Sign In
          </Button>
          <Button onClick={() => onAuthClick('register')}>
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
