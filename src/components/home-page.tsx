import { PostCard, Post } from "./post-card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PlusCircle, TrendingUp, Clock, Star } from "lucide-react";

// Mock data for posts
const mockPosts: Post[] = [
  {
    id: "1",
    title: "How React's Virtual DOM Actually Works Under the Hood",
    description: "A deep dive into React's reconciliation algorithm, fiber architecture, and how it optimizes rendering performance. We'll explore the actual source code and understand the diffing process.",
    author: {
      name: "Amara Okafor",
      country: "Nigeria",
    },
    tags: ["React", "JavaScript", "Performance"],
    upvotes: 127,
    comments: 23,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "Understanding JWT Authentication: Beyond the Basics",
    description: "Learn how JSON Web Tokens work internally, including signing algorithms, payload structure, and security implications. We'll decode tokens and understand the cryptography behind them.",
    author: {
      name: "Kwame Mensah",
      country: "Ghana",
    },
    tags: ["Security", "Authentication", "Node.js"],
    upvotes: 94,
    comments: 18,
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    title: "Database Indexing Explained: B-Trees and Beyond",
    description: "Discover how database indexes actually work, from B-tree data structures to query optimization. Includes practical examples with PostgreSQL.",
    author: {
      name: "Fatima Hassan",
      country: "Egypt",
    },
    tags: ["Databases", "PostgreSQL", "Data Structures"],
    upvotes: 156,
    comments: 31,
    timestamp: "1 day ago",
  },
  {
    id: "4",
    title: "WebSockets vs Server-Sent Events: Implementation Details",
    description: "A technical comparison of real-time communication protocols, examining TCP connections, browser APIs, and when to use each approach.",
    author: {
      name: "Tshepo Molefe",
      country: "South Africa",
    },
    tags: ["WebSockets", "Real-time", "Networking"],
    upvotes: 78,
    comments: 12,
    timestamp: "1 day ago",
  },
  {
    id: "5",
    title: "How Git's Object Model Works: Blobs, Trees, and Commits",
    description: "Explore Git's internal data structures and how it stores version history using SHA-1 hashes and directed acyclic graphs.",
    author: {
      name: "Aisha Kamara",
      country: "Kenya",
    },
    tags: ["Git", "Version Control", "DevOps"],
    upvotes: 203,
    comments: 45,
    timestamp: "2 days ago",
  },
];

interface HomePageProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

export function HomePage({ onAuthClick }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="border-b bg-muted/50">
        <div className="container py-12 px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4">Learn How Technology Really Works</h1>
            <p className="text-muted-foreground mb-6">
              Join African developers in deep-diving into the inner workings of technologies, 
              libraries, and programming concepts. Move beyond tutorials to true understanding.
            </p>
            <div className="flex gap-3">
              <Button size="lg" onClick={() => onAuthClick('register')}>
                <PlusCircle className="mr-2 h-5 w-5" />
                Share Your Knowledge
              </Button>
              <Button variant="outline" size="lg" onClick={() => onAuthClick('login')}>
                Join the Community
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 px-4">
        <Tabs defaultValue="trending" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="trending" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="recent" className="gap-2">
                <Clock className="h-4 w-4" />
                Recent
              </TabsTrigger>
              <TabsTrigger value="top" className="gap-2">
                <Star className="h-4 w-4" />
                Top Rated
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="trending" className="space-y-4">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            {[...mockPosts].reverse().map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="top" className="space-y-4">
            {[...mockPosts].sort((a, b) => b.upvotes - a.upvotes).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
