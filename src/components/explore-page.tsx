import { PostCard, Post } from "./post-card";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";

// Mock data for posts
const mockPosts: Post[] = [
  {
    id: "1",
    title: "Understanding Microservices Architecture Patterns",
    description: "Deep dive into service discovery, API gateways, circuit breakers, and how to design resilient distributed systems.",
    author: {
      name: "Chidi Nnamani",
      country: "Nigeria",
    },
    tags: ["Architecture", "Microservices", "Distributed Systems"],
    upvotes: 89,
    comments: 15,
    timestamp: "3 hours ago",
  },
  {
    id: "2",
    title: "How Does TypeScript's Type System Work?",
    description: "Exploring structural typing, type inference, generics, and the compiler's type-checking algorithm.",
    author: {
      name: "Zainab Osman",
      country: "Sudan",
    },
    tags: ["TypeScript", "Type Systems", "JavaScript"],
    upvotes: 145,
    comments: 28,
    timestamp: "6 hours ago",
  },
  {
    id: "3",
    title: "Redis Internals: Memory Management and Persistence",
    description: "How Redis manages memory, implements eviction policies, and ensures data persistence with RDB and AOF.",
    author: {
      name: "Kofi Asante",
      country: "Ghana",
    },
    tags: ["Redis", "Caching", "Databases"],
    upvotes: 112,
    comments: 19,
    timestamp: "12 hours ago",
  },
  {
    id: "4",
    title: "Docker Container Lifecycle: From Build to Execution",
    description: "Understanding layers, image caching, namespaces, cgroups, and how containers achieve isolation.",
    author: {
      name: "Amina Diallo",
      country: "Senegal",
    },
    tags: ["Docker", "Containers", "DevOps"],
    upvotes: 167,
    comments: 34,
    timestamp: "1 day ago",
  },
  {
    id: "5",
    title: "GraphQL Resolvers and the N+1 Problem",
    description: "How GraphQL executes queries, the resolver chain, and solving performance issues with DataLoader.",
    author: {
      name: "Thabo Dlamini",
      country: "South Africa",
    },
    tags: ["GraphQL", "APIs", "Performance"],
    upvotes: 98,
    comments: 21,
    timestamp: "1 day ago",
  },
  {
    id: "6",
    title: "Understanding OAuth 2.0 Flow in Detail",
    description: "Authorization codes, refresh tokens, PKCE, and the security considerations behind each OAuth flow.",
    author: {
      name: "Mariam Keita",
      country: "Mali",
    },
    tags: ["OAuth", "Security", "Authentication"],
    upvotes: 134,
    comments: 26,
    timestamp: "2 days ago",
  },
];

const categories = [
  "All Topics",
  "Web Development",
  "Programming Languages",
  "Databases",
  "Frameworks & Libraries",
  "DevOps & Infrastructure",
  "Security",
  "Data Structures & Algorithms",
];

export function ExplorePage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b bg-muted/50">
        <div className="container py-8 px-4">
          <h1 className="mb-2">Explore</h1>
          <p className="text-muted-foreground">
            Discover in-depth explanations across all technology topics
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b bg-background">
        <div className="container py-4 px-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm text-muted-foreground">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All Topics" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="container py-4 px-4">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {mockPosts.length} explanations
          </p>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="upvotes">Most Upvoted</SelectItem>
              <SelectItem value="comments">Most Discussed</SelectItem>
              <SelectItem value="views">Most Viewed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg">
            Load More Explanations
          </Button>
        </div>
      </div>
    </div>
  );
}
