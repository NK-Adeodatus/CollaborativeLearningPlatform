import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://udqncqqmxyfluagzmiqo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcW5jcXFteHlmbHVhZ3ptaXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNDgzNTYsImV4cCI6MjA3NzgyNDM1Nn0.NaajXtB4_6FNyRH73_2dBVZSwctxogu4kz6nMYEF5es';

// Use service role key for admin operations (if available)
// Otherwise, use the anon key and ensure RLS policies allow the operations
const supabase = createClient(supabaseUrl, supabaseKey);

// Static data extracted from components
interface StaticPost {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    country: string;
    email?: string;
    bio?: string;
  };
  tags: string[];
  upvotes: number;
  comments: number;
  timestamp: string;
  category?: string;
}

// All posts from different pages (merged and deduplicated)
const allStaticPosts: StaticPost[] = [
  // From home-page.tsx
  {
    id: "1",
    title: "How React's Virtual DOM Actually Works Under the Hood",
    description: "A deep dive into React's reconciliation algorithm, fiber architecture, and how it optimizes rendering performance. We'll explore the actual source code and understand the diffing process.",
    author: {
      name: "Amara Okafor",
      country: "Nigeria",
      email: "amara.okafor@example.com",
      bio: "Full-stack developer passionate about React internals and performance optimization"
    },
    tags: ["React", "JavaScript", "Performance"],
    upvotes: 127,
    comments: 23,
    timestamp: "2 hours ago",
    category: "Frameworks & Libraries"
  },
  {
    id: "2",
    title: "Understanding JWT Authentication: Beyond the Basics",
    description: "Learn how JSON Web Tokens work internally, including signing algorithms, payload structure, and security implications. We'll decode tokens and understand the cryptography behind them.",
    author: {
      name: "Kwame Mensah",
      country: "Ghana",
      email: "kwame.mensah@example.com",
      bio: "Security engineer exploring authentication systems and cryptography"
    },
    tags: ["Security", "Authentication", "Node.js"],
    upvotes: 94,
    comments: 18,
    timestamp: "5 hours ago",
    category: "Security"
  },
  {
    id: "3",
    title: "Database Indexing Explained: B-Trees and Beyond",
    description: "Discover how database indexes actually work, from B-tree data structures to query optimization. Includes practical examples with PostgreSQL.",
    author: {
      name: "Fatima Hassan",
      country: "Egypt",
      email: "fatima.hassan@example.com",
      bio: "Database architect with deep knowledge of SQL internals and query optimization"
    },
    tags: ["Databases", "PostgreSQL", "Data Structures"],
    upvotes: 156,
    comments: 31,
    timestamp: "1 day ago",
    category: "Databases"
  },
  {
    id: "4",
    title: "WebSockets vs Server-Sent Events: Implementation Details",
    description: "A technical comparison of real-time communication protocols, examining TCP connections, browser APIs, and when to use each approach.",
    author: {
      name: "Tshepo Molefe",
      country: "South Africa",
      email: "tshepo.molefe@example.com",
      bio: "Backend developer specializing in distributed systems and microservices"
    },
    tags: ["WebSockets", "Real-time", "Networking"],
    upvotes: 78,
    comments: 12,
    timestamp: "1 day ago",
    category: "Web Development"
  },
  {
    id: "5",
    title: "How Git's Object Model Works: Blobs, Trees, and Commits",
    description: "Explore Git's internal data structures and how it stores version history using SHA-1 hashes and directed acyclic graphs.",
    author: {
      name: "Aisha Kamara",
      country: "Kenya",
      email: "aisha.kamara@example.com",
      bio: "DevOps engineer passionate about Git internals and CI/CD pipelines"
    },
    tags: ["Git", "Version Control", "DevOps"],
    upvotes: 203,
    comments: 45,
    timestamp: "2 days ago",
    category: "DevOps & Infrastructure"
  },
  // From explore-page.tsx (some may be duplicates by ID)
  {
    id: "6",
    title: "Understanding Microservices Architecture Patterns",
    description: "Deep dive into service discovery, API gateways, circuit breakers, and how to design resilient distributed systems.",
    author: {
      name: "Chidi Nnamani",
      country: "Nigeria",
      email: "chidi.nnamani@example.com"
    },
    tags: ["Architecture", "Microservices", "Distributed Systems"],
    upvotes: 89,
    comments: 15,
    timestamp: "3 hours ago",
    category: "DevOps & Infrastructure"
  },
  {
    id: "7",
    title: "How Does TypeScript's Type System Work?",
    description: "Exploring structural typing, type inference, generics, and the compiler's type-checking algorithm.",
    author: {
      name: "Zainab Osman",
      country: "Sudan",
      email: "zainab.osman@example.com"
    },
    tags: ["TypeScript", "Type Systems", "JavaScript"],
    upvotes: 145,
    comments: 28,
    timestamp: "6 hours ago",
    category: "Programming Languages"
  },
  {
    id: "8",
    title: "Redis Internals: Memory Management and Persistence",
    description: "How Redis manages memory, implements eviction policies, and ensures data persistence with RDB and AOF.",
    author: {
      name: "Kofi Asante",
      country: "Ghana",
      email: "kofi.asante@example.com"
    },
    tags: ["Redis", "Caching", "Databases"],
    upvotes: 112,
    comments: 19,
    timestamp: "12 hours ago",
    category: "Databases"
  },
  {
    id: "9",
    title: "Docker Container Lifecycle: From Build to Execution",
    description: "Understanding layers, image caching, namespaces, cgroups, and how containers achieve isolation.",
    author: {
      name: "Amina Diallo",
      country: "Senegal",
      email: "amina.diallo@example.com"
    },
    tags: ["Docker", "Containers", "DevOps"],
    upvotes: 167,
    comments: 34,
    timestamp: "1 day ago",
    category: "DevOps & Infrastructure"
  },
  {
    id: "10",
    title: "GraphQL Resolvers and the N+1 Problem",
    description: "How GraphQL executes queries, the resolver chain, and solving performance issues with DataLoader.",
    author: {
      name: "Thabo Dlamini",
      country: "South Africa",
      email: "thabo.dlamini@example.com"
    },
    tags: ["GraphQL", "APIs", "Performance"],
    upvotes: 98,
    comments: 21,
    timestamp: "1 day ago",
    category: "Web Development"
  },
  {
    id: "11",
    title: "Understanding OAuth 2.0 Flow in Detail",
    description: "Authorization codes, refresh tokens, PKCE, and the security considerations behind each OAuth flow.",
    author: {
      name: "Mariam Keita",
      country: "Mali",
      email: "mariam.keita@example.com"
    },
    tags: ["OAuth", "Security", "Authentication"],
    upvotes: 134,
    comments: 26,
    timestamp: "2 days ago",
    category: "Security"
  },
];

// Bookmarks - post IDs that are bookmarked (from bookmarks-page.tsx)
const bookmarkedPostIds = ["1", "3", "5"];

// Helper function to parse relative timestamps to actual dates
function parseTimestamp(timestamp: string): Date {
  const now = new Date();
  const lower = timestamp.toLowerCase();
  
  if (lower.includes("hour")) {
    const hours = parseInt(lower.match(/\d+/)?.[0] || "0");
    return new Date(now.getTime() - hours * 60 * 60 * 1000);
  } else if (lower.includes("day")) {
    const days = parseInt(lower.match(/\d+/)?.[0] || "0");
    return new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  } else if (lower.includes("minute")) {
    const minutes = parseInt(lower.match(/\d+/)?.[0] || "0");
    return new Date(now.getTime() - minutes * 60 * 1000);
  }
  
  // Default to 1 day ago if can't parse
  return new Date(now.getTime() - 24 * 60 * 60 * 1000);
}

// Helper function to generate comment content
function generateCommentContent(commentIndex: number): string {
  const comments = [
    "Great explanation! This really helped me understand the concept better.",
    "I have a question about the implementation details. Could you clarify?",
    "Excellent write-up. Thanks for sharing your knowledge!",
    "This is exactly what I was looking for. Much appreciated!",
    "Could you provide more examples for edge cases?",
    "Very insightful. I learned something new today.",
    "The diagrams in your explanation were particularly helpful.",
    "I've been struggling with this concept. Your explanation cleared it up!",
    "This is a comprehensive guide. Well done!",
    "I'd love to see more content like this on other topics.",
  ];
  return comments[commentIndex % comments.length];
}

async function migrateData() {
  console.log('Starting data migration...\n');

  try {
    // Step 1: Get or create user mappings
    // Since we're using Supabase auth.users, we need to map author names to user IDs
    console.log('Step 1: Preparing user mappings...');
    
    // Extract unique authors
    const uniqueAuthors = new Map<string, StaticPost['author']>();
    for (const post of allStaticPosts) {
      const email = post.author.email || `${post.author.name.toLowerCase().replace(/\s+/g, '.')}@example.com`;
      if (!uniqueAuthors.has(email)) {
        uniqueAuthors.set(email, { ...post.author, email });
      }
    }
    
    console.log(`Found ${uniqueAuthors.size} unique authors.`);
    console.log('Note: You can either:');
    console.log('  1. Create users via Supabase Auth dashboard or API first');
    console.log('  2. Use the service role key to create users programmatically');
    console.log('  3. Manually map emails to user IDs after migration\n');
    
    // For now, we'll create a mapping file that you can use later
    const authorEmailToUserId = new Map<string, string>();
    
    // Try to query users if we have a public.users view/table
    // Otherwise, we'll need to handle this manually
    console.log('Attempting to map author emails to user IDs...\n');

    // Step 2: Insert posts
    console.log('Step 2: Inserting posts...');
    const postIdMap = new Map<string, string>(); // old ID -> new UUID
    
    for (const post of allStaticPosts) {
      // Parse the timestamp to actual date
      const createdAt = parseTimestamp(post.timestamp);
      
      // For user_id, we need to get it from auth.users
      // Since we can't directly query auth.users with anon key,
      // we'll need to either:
      // 1. Have the user_id already in the data
      // 2. Create users first
      // 3. Use a placeholder and update later
      
      // For now, we'll insert with a note that user_id needs to be set
      // You'll need to manually set user_id or create users first
      
      // Get user_id for the author
      const authorEmail = post.author.email || `${post.author.name.toLowerCase().replace(/\s+/g, '.')}@example.com`;
      let userId = authorEmailToUserId.get(authorEmail);
      
      // If we don't have a user_id, we'll need to skip or use a placeholder
      // For now, let's try to get the first user from auth or use a temporary approach
      if (!userId) {
        // You'll need to set user_id manually after running the script
        // Or create users first via Supabase Auth
        console.warn(`  ⚠️  No user_id found for author "${post.author.name}". Post will need user_id updated manually.`);
        
        // Try to get any existing user as a fallback (if you have users)
        const { data: existingUsers } = await supabase.auth.admin?.listUsers();
        if (existingUsers && existingUsers.users && existingUsers.users.length > 0) {
          // Use the first user as a temporary placeholder
          userId = existingUsers.users[0].id;
          authorEmailToUserId.set(authorEmail, userId);
        } else {
          console.error(`  ❌ Cannot insert post without user_id. Please create users first or update the script.`);
          continue;
        }
      }
      
      const { data: insertedPost, error: postError } = await supabase
        .from('posts')
        .insert({
          user_id: userId,
          content: `${post.title}\n\n${post.description}`,
          created_at: createdAt.toISOString(),
          upvotes: post.upvotes,
          category: post.category || null,
        })
        .select('id')
        .single();
      
      if (postError) {
        console.error(`Error inserting post "${post.title}":`, postError);
        continue;
      }
      
      if (insertedPost) {
        postIdMap.set(post.id, insertedPost.id);
        console.log(`✓ Inserted post: ${post.title} (ID: ${insertedPost.id})`);
      }
    }
    
    console.log(`\nInserted ${postIdMap.size} posts.\n`);

    // Step 3: Insert tags
    console.log('Step 3: Inserting tags...');
    let tagsInserted = 0;
    
    for (const post of allStaticPosts) {
      const newPostId = postIdMap.get(post.id);
      if (!newPostId) continue;
      
      for (const tagName of post.tags) {
        const { error: tagError } = await supabase
          .from('tags')
          .insert({
            post_id: newPostId,
            name: tagName,
          });
        
        if (tagError) {
          console.error(`Error inserting tag "${tagName}" for post ${post.title}:`, tagError);
        } else {
          tagsInserted++;
        }
      }
    }
    
    console.log(`✓ Inserted ${tagsInserted} tags.\n`);

    // Step 4: Insert comments
    console.log('Step 4: Inserting comments...');
    let commentsInserted = 0;
    
    for (const post of allStaticPosts) {
      const newPostId = postIdMap.get(post.id);
      if (!newPostId) continue;
      
      const commentCount = post.comments;
      // Generate comments with varying timestamps
      for (let i = 0; i < Math.min(commentCount, 10); i++) {
        const commentDate = new Date(parseTimestamp(post.timestamp).getTime() + (i + 1) * 60 * 60 * 1000);
        
        const { error: commentError } = await supabase
          .from('comments')
          .insert({
            post_id: newPostId,
            commenter_id: null, // TODO: Set this to actual user_id from auth.users
            content: generateCommentContent(i),
            added_at: commentDate.toISOString(),
          });
        
        if (commentError) {
          console.error(`Error inserting comment for post ${post.title}:`, commentError);
        } else {
          commentsInserted++;
        }
      }
    }
    
    console.log(`✓ Inserted ${commentsInserted} comments.\n`);

    // Step 5: Insert bookmarks
    console.log('Step 5: Inserting bookmarks...');
    let bookmarksInserted = 0;
    
    // For bookmarks, we need a user_id
    // We'll use the first post's author as the bookmarker for now
    // You can modify this logic based on your needs
    
    for (const oldPostId of bookmarkedPostIds) {
      const newPostId = postIdMap.get(oldPostId);
      if (!newPostId) continue;
      
      const { error: bookmarkError } = await supabase
        .from('bookmarks')
        .insert({
          post_id: newPostId,
          user_id: null, // TODO: Set this to actual user_id from auth.users
          added_at: new Date().toISOString(),
        });
      
      if (bookmarkError) {
        // Check if it's a duplicate (unique constraint violation)
        if (bookmarkError.code === '23505') {
          console.log(`  Bookmark already exists for post ${oldPostId}`);
        } else {
          console.error(`Error inserting bookmark for post ${oldPostId}:`, bookmarkError);
        }
      } else {
        bookmarksInserted++;
      }
    }
    
    console.log(`✓ Inserted ${bookmarksInserted} bookmarks.\n`);

    console.log('========================================');
    console.log('Migration completed!');
    console.log('========================================');
    console.log('\n⚠️  IMPORTANT: You need to:');
    console.log('1. Create users in Supabase Auth or get existing user IDs');
    console.log('2. Update user_id fields in posts, comments, and bookmarks tables');
    console.log('3. You can use SQL like:');
    console.log('   UPDATE posts SET user_id = \'<user-uuid>\' WHERE ...');
    console.log('\nPost ID mappings saved for reference.');
    
    // Output the post ID mappings
    console.log('\nPost ID Mappings (old -> new):');
    for (const [oldId, newId] of postIdMap.entries()) {
      const post = allStaticPosts.find(p => p.id === oldId);
      console.log(`  ${oldId} -> ${newId} (${post?.title})`);
    }

  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
}

// Run the migration
migrateData()
  .then(() => {
    console.log('\nMigration script completed.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration script failed:', error);
    process.exit(1);
  });
