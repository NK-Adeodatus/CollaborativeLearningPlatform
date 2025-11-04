import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Users, Award, TrendingUp, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Contributor {
  id: string;
  name: string;
  country: string;
  avatar?: string;
  bio: string;
  stats: {
    posts: number;
    upvotes: number;
    comments: number;
  };
  badges: string[];
  joinedDate: string;
}

const mockContributors: Contributor[] = [
  {
    id: "1",
    name: "Amara Okafor",
    country: "Nigeria",
    bio: "Full-stack developer passionate about React internals and performance optimization",
    stats: {
      posts: 24,
      upvotes: 1247,
      comments: 189,
    },
    badges: ["Top Contributor", "Expert"],
    joinedDate: "Jan 2024",
  },
  {
    id: "2",
    name: "Kwame Mensah",
    country: "Ghana",
    bio: "Security engineer exploring authentication systems and cryptography",
    stats: {
      posts: 18,
      upvotes: 892,
      comments: 145,
    },
    badges: ["Security Expert", "Helpful"],
    joinedDate: "Feb 2024",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    country: "Egypt",
    bio: "Database architect with deep knowledge of SQL internals and query optimization",
    stats: {
      posts: 31,
      upvotes: 1589,
      comments: 234,
    },
    badges: ["Top Contributor", "Database Guru"],
    joinedDate: "Dec 2023",
  },
  {
    id: "4",
    name: "Tshepo Molefe",
    country: "South Africa",
    bio: "Backend developer specializing in distributed systems and microservices",
    stats: {
      posts: 15,
      upvotes: 654,
      comments: 98,
    },
    badges: ["Rising Star"],
    joinedDate: "Mar 2024",
  },
  {
    id: "5",
    name: "Aisha Kamara",
    country: "Kenya",
    bio: "DevOps engineer passionate about Git internals and CI/CD pipelines",
    stats: {
      posts: 27,
      upvotes: 1123,
      comments: 167,
    },
    badges: ["Top Contributor", "DevOps Pro"],
    joinedDate: "Jan 2024",
  },
];

function ContributorCard({ contributor }: { contributor: Contributor }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={contributor.avatar} />
            <AvatarFallback>{getInitials(contributor.name)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="mb-1">{contributor.name}</CardTitle>
            <CardDescription>{contributor.country}</CardDescription>
            <p className="text-sm mt-2">{contributor.bio}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {contributor.badges.map((badge) => (
                <Badge key={badge} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">Posts</p>
            <p>{contributor.stats.posts}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm">Upvotes</p>
            <p>{contributor.stats.upvotes}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm">Comments</p>
            <p>{contributor.stats.comments}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            View Profile
          </Button>
          <Button className="flex-1">Follow</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ContributorsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b bg-muted/50">
        <div className="container py-8 px-4">
          <h1 className="mb-2">Contributors</h1>
          <p className="text-muted-foreground">
            Meet the developers sharing their knowledge with the community
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="border-b bg-background">
        <div className="container py-6 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Contributors</p>
                    <p>1,247</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active This Month</p>
                    <p>423</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Top Contributors</p>
                    <p>89</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contributors List */}
      <div className="container py-8 px-4">
        <Tabs defaultValue="top" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="top">Top Contributors</TabsTrigger>
            <TabsTrigger value="active">Most Active</TabsTrigger>
            <TabsTrigger value="new">New Members</TabsTrigger>
          </TabsList>

          <TabsContent value="top" className="space-y-4">
            {mockContributors.map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} />
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {[...mockContributors].reverse().map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} />
            ))}
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            {mockContributors.slice(0, 3).map((contributor) => (
              <ContributorCard key={contributor.id} contributor={contributor} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
