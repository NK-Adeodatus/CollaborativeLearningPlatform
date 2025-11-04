import { PostCard, Post } from "./post-card";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Bookmark, Folder, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const mockBookmarkedPosts: Post[] = [
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
    isUpvoted: true,
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

const collections = [
  { id: "1", name: "Frontend Deep Dives", count: 8 },
  { id: "2", name: "Database Internals", count: 5 },
  { id: "3", name: "DevOps & Infrastructure", count: 12 },
  { id: "4", name: "Security & Auth", count: 6 },
];

export function BookmarksPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b bg-muted/50">
        <div className="container py-8 px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2">My Bookmarks</h1>
              <p className="text-muted-foreground">
                Save and organize explanations for later reference
              </p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Collection
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Collections Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Bookmark className="h-4 w-4" />
                    All Bookmarks ({mockBookmarkedPosts.length})
                  </Button>
                  
                  <div className="pt-4 pb-2">
                    <p className="text-sm text-muted-foreground px-3">Collections</p>
                  </div>
                  
                  {collections.map((collection) => (
                    <Button
                      key={collection.id}
                      variant="ghost"
                      className="w-full justify-start gap-2"
                    >
                      <Folder className="h-4 w-4" />
                      <span className="flex-1 text-left">{collection.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {collection.count}
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bookmarked Posts */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="recent">Recently Added</TabsTrigger>
                  <TabsTrigger value="popular">Most Popular</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-4">
                {mockBookmarkedPosts.length > 0 ? (
                  mockBookmarkedPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))
                ) : (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <Bookmark className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="mb-2">No bookmarks yet</h3>
                      <p className="text-muted-foreground mb-4">
                        Start bookmarking explanations to save them for later
                      </p>
                      <Button>Explore Content</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                {mockBookmarkedPosts.slice(0, 2).map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>

              <TabsContent value="popular" className="space-y-4">
                {[...mockBookmarkedPosts]
                  .sort((a, b) => b.upvotes - a.upvotes)
                  .map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
