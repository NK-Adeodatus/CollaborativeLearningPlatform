import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Header } from "./components/header";
import { HomePage } from "./components/home-page";
import { ExplorePage } from "./components/explore-page";
import { CreatePostPage } from "./components/create-post-page";
import { ContributorsPage } from "./components/contributors-page";
import { BookmarksPage } from "./components/bookmarks-page";
import { SettingsPage } from "./components/settings-page";
import { AuthDialog } from "./components/auth-dialog";
import { Toaster } from "./components/ui/sonner";

type Page = "home" | "explore" | "create-post" | "contributors" | "bookmarks" | "settings";

export default function App() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthDialogOpen(true);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onAuthClick={handleAuthClick} />;
      case "explore":
        return <ExplorePage />;
      case "create-post":
        return <CreatePostPage />;
      case "contributors":
        return <ContributorsPage />;
      case "bookmarks":
        return <BookmarksPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage onAuthClick={handleAuthClick} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="techdeep-theme">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar currentPage={currentPage} onNavigate={handleNavigate} />
          <div className="flex-1 flex flex-col">
            <Header onAuthClick={handleAuthClick} />
            <main className="flex-1">
              {renderPage()}
            </main>
          </div>
        </div>
        
        <AuthDialog
          open={authDialogOpen}
          onOpenChange={setAuthDialogOpen}
          defaultTab={authMode}
        />
        
        <Toaster />
      </SidebarProvider>
    </ThemeProvider>
  );
}
