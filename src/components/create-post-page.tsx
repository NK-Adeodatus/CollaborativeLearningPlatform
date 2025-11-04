import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { X, Plus, BookOpen, Lightbulb, Code, FileText } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";

export function CreatePostPage() {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const handleAddTag = () => {
    if (currentTag.trim() && tags.length < 5) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Post created successfully!");
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b bg-muted/50">
        <div className="container py-8 px-4">
          <h1 className="mb-2">Create an Explanation</h1>
          <p className="text-muted-foreground">
            Share your deep understanding of how a technology or concept really works
          </p>
        </div>
      </div>

      <div className="container py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Write Your Explanation</CardTitle>
                <CardDescription>
                  Focus on explaining the internal workings and mechanisms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., How React's Virtual DOM Actually Works Under the Hood"
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Be specific and descriptive about what you're explaining
                    </p>
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="languages">Programming Languages</SelectItem>
                        <SelectItem value="databases">Databases</SelectItem>
                        <SelectItem value="frameworks">Frameworks & Libraries</SelectItem>
                        <SelectItem value="devops">DevOps & Infrastructure</SelectItem>
                        <SelectItem value="security">Security</SelectItem>
                        <SelectItem value="algorithms">Data Structures & Algorithms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Summary */}
                  <div className="space-y-2">
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                      id="summary"
                      placeholder="Brief overview of what you'll explain (2-3 sentences)"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Main Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Detailed Explanation</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your in-depth explanation here. Include code examples, diagrams descriptions, and step-by-step breakdowns of how things work internally..."
                      rows={12}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Supports Markdown formatting
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (up to 5)</Label>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddTag();
                          }
                        }}
                        placeholder="Add a tag"
                        disabled={tags.length >= 5}
                      />
                      <Button
                        type="button"
                        onClick={handleAddTag}
                        disabled={tags.length >= 5 || !currentTag.trim()}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="gap-1">
                            {tag}
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(tag)}
                              className="ml-1 hover:text-destructive"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button type="submit" size="lg">
                      Publish Explanation
                    </Button>
                    <Button type="button" variant="outline" size="lg">
                      Save Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Guidelines Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Writing Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm">Go Deep</p>
                      <p className="text-sm text-muted-foreground">
                        Explain internal mechanisms, not just usage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm">Use Examples</p>
                      <p className="text-sm text-muted-foreground">
                        Include code snippets and real-world scenarios
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm">Clarify Concepts</p>
                      <p className="text-sm text-muted-foreground">
                        Break down complex ideas into understandable parts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm">Be Accurate</p>
                      <p className="text-sm text-muted-foreground">
                        Cite sources and verify technical details
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Need Inspiration?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How does a compiler work?</li>
                  <li>• What happens during an HTTP request?</li>
                  <li>• How does garbage collection work?</li>
                  <li>• What are closures in JavaScript?</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
