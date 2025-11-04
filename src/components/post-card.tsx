import { ArrowBigUp, MessageSquare, Bookmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

export interface Post {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
    country: string;
  };
  tags: string[];
  upvotes: number;
  comments: number;
  timestamp: string;
  isUpvoted?: boolean;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [isUpvoted, setIsUpvoted] = useState(post.isUpvoted || false);

  const handleUpvote = () => {
    if (isUpvoted) {
      setUpvotes(upvotes - 1);
      setIsUpvoted(false);
    } else {
      setUpvotes(upvotes + 1);
      setIsUpvoted(true);
    }
  };

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
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center gap-1 pt-1">
            <Button
              variant={isUpvoted ? "default" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={handleUpvote}
            >
              <ArrowBigUp className="h-5 w-5" />
            </Button>
            <span className="text-sm">{upvotes}</span>
          </div>
          
          <div className="flex-1 space-y-2">
            <CardTitle className="cursor-pointer hover:text-primary">
              {post.title}
            </CardTitle>
            <CardDescription>{post.description}</CardDescription>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">
              {post.author.name} • {post.author.country} • {post.timestamp}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm">{post.comments}</span>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
