import {
  Book,
  Home,
  Compass,
  PlusCircle,
  BookOpen,
  Code2,
  Database,
  Globe,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "./ui/sidebar";

type Page = "home" | "explore" | "create-post" | "contributors" | "bookmarks" | "settings";

interface NavigationItem {
  title: string;
  icon: any;
  page: Page;
}

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

const navigation: NavigationSection[] = [
  {
    title: "Main",
    items: [
      { title: "Home", icon: Home, page: "home" },
      { title: "Explore", icon: Compass, page: "explore" },
      { title: "Create Post", icon: PlusCircle, page: "create-post" },
    ],
  },
  {
    title: "Categories",
    items: [
      { title: "Web Development", icon: Globe, page: "home" },
      { title: "Programming Languages", icon: Code2, page: "home" },
      { title: "Databases", icon: Database, page: "home" },
      { title: "Frameworks & Libraries", icon: BookOpen, page: "home" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Contributors", icon: Users, page: "contributors" },
      { title: "My Bookmarks", icon: Book, page: "bookmarks" },
    ],
  },
];

interface AppSidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function AppSidebar({ currentPage, onNavigate }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <button 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>
          <span>TechDeep</span>
        </button>
      </SidebarHeader>
      
      <SidebarContent>
        {navigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => onNavigate(item.page)}
                      isActive={currentPage === item.page}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onNavigate("settings")}
              isActive={currentPage === "settings"}
            >
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <HelpCircle />
              <span>Help & Support</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
