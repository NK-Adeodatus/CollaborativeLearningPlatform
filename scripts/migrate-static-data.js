const { createClient } = require('@supabase/supabase-js');

// Supabase configuration
const supabaseUrl = 'https://udqncqqmxyfluagzmiqo.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkcW5jcXFteHlmbHVhZ3ptaXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNDgzNTYsImV4cCI6MjA3NzgyNDM1Nn0.NaajXtB4_6FNyRH73_2dBVZSwctxogu4kz6nMYEF5es';

// Use service role key for admin operations if provided via env var
const supabase = createClient(supabaseUrl, supabaseKey);

// Manual user mapping - add user IDs here if you created users manually
// Format: email -> user_id (UUID)
const manualUserMapping = {
  'amara.okafor@example.com': '051fc7e9-9aec-41c7-ab52-31a566a5ccba',
  'fatima.hassan@example.com': '59204c6c-8c1b-4245-af05-a5fb6efcf4c1',
  'kwame.mensah@example.com': 'a4464905-419c-4be6-9211-1a9c100c8761',
};

// Static data extracted from components
const allStaticPosts = [
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
  // From explore-page.tsx
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
function parseTimestamp(timestamp) {
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
function generateCommentContent(commentIndex) {
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
    console.log('Step 1: Preparing user mappings...');
    
    // Extract unique authors
    const uniqueAuthors = new Map();
    for (const post of allStaticPosts) {
      const email = post.author.email || `${post.author.name.toLowerCase().replace(/\s+/g, '.')}@example.com`;
      if (!uniqueAuthors.has(email)) {
        uniqueAuthors.set(email, { ...post.author, email });
      }
    }
    
    console.log(`Found ${uniqueAuthors.size} unique authors.`);
    
    // Try to get existing users from auth
    const authorEmailToUserId = new Map();
    
    // First, add manually mapped users
    if (Object.keys(manualUserMapping).length > 0) {
      console.log(`Found ${Object.keys(manualUserMapping).length} manually mapped users.`);
      for (const [email, userId] of Object.entries(manualUserMapping)) {
        authorEmailToUserId.set(email, userId);
      }
    }
    
    // If using service role key, we can list users and add them
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.log('Using service role key - attempting to list users...');
      try {
        const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
        if (!listError && users && users.length > 0) {
          console.log(`Found ${users.length} existing users in auth.`);
          // Map by email (manual mappings take precedence)
          for (const user of users) {
            if (user.email && !authorEmailToUserId.has(user.email)) {
              authorEmailToUserId.set(user.email, user.id);
            }
          }
        }
      } catch (error) {
        console.log('Could not list users:', error.message);
      }
    } else {
      console.log('Using anon key - using manually mapped users.');
      console.log('If you have service role key, set it as SUPABASE_SERVICE_ROLE_KEY env variable.\n');
    }
    
    console.log(`Total: ${authorEmailToUserId.size} users available for migration.\n`);

    // Step 2: Insert posts
    console.log('Step 2: Inserting posts...');
    const postIdMap = new Map(); // old ID -> new UUID
    
    for (const post of allStaticPosts) {
      const createdAt = parseTimestamp(post.timestamp);
      const authorEmail = post.author.email || `${post.author.name.toLowerCase().replace(/\s+/g, '.')}@example.com`;
      let userId = authorEmailToUserId.get(authorEmail);
      
      // If no user_id found, we need to handle it
      if (!userId) {
        // Option 1: Try to create user if we have service role key
        if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
          try {
            console.log(`  Creating user for ${post.author.name} (${authorEmail})...`);
            const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
              email: authorEmail,
              email_confirm: true,
              user_metadata: {
                name: post.author.name
              }
            });
            
            if (!createError && newUser && newUser.user) {
              userId = newUser.user.id;
              authorEmailToUserId.set(authorEmail, userId);
              console.log(`  ✓ Created user: ${post.author.name} (ID: ${userId})`);
            } else {
              // User might already exist, skip creation
              console.log(`  User might already exist, skipping creation.`);
            }
          } catch (error) {
            console.log(`  Could not create user: ${error.message}`);
          }
        }
        
        // Option 2: Reuse any existing user if we have one
        if (!userId) {
          const existingUserIds = Array.from(authorEmailToUserId.values());
          if (existingUserIds.length > 0) {
            // Reuse the first available user
            userId = existingUserIds[0];
            authorEmailToUserId.set(authorEmail, userId);
            console.log(`  ⚠️  User not found for ${authorEmail}, reusing existing user (ID: ${userId})`);
          } else {
            console.error(`  ❌ Cannot insert post "${post.title}" without user_id.`);
            console.error(`     Please create at least one user first.`);
            console.error(`     You can create a user with email: ${authorEmail} or any other email.`);
            continue;
          }
        }
      }
      
      // Try inserting with category first, if it fails, try without category
      let insertedPost = null;
      let postError = null;
      
      // First attempt: with category
      const insertData = {
        user_id: userId,
        content: `${post.title}\n\n${post.description}`,
        created_at: createdAt.toISOString(),
        upvotes: post.upvotes,
        category: post.category || null,
      };
      
      let result = await supabase
        .from('posts')
        .insert(insertData)
        .select('id')
        .single();
      
      postError = result.error;
      insertedPost = result.data;
      
      // If category constraint error, try without category
      if (postError && postError.message && postError.message.includes('category')) {
        console.log(`  ⚠️  Category "${post.category}" not allowed, inserting without category...`);
        const insertDataNoCategory = {
          user_id: userId,
          content: `${post.title}\n\n${post.description}`,
          created_at: createdAt.toISOString(),
          upvotes: post.upvotes,
          category: null,
        };
        
        result = await supabase
          .from('posts')
          .insert(insertDataNoCategory)
          .select('id')
          .single();
        
        postError = result.error;
        insertedPost = result.data;
      }
      
      if (postError) {
        console.error(`  ❌ Error inserting post "${post.title}":`, postError.message);
        continue;
      }
      
      if (insertedPost) {
        postIdMap.set(post.id, insertedPost.id);
        console.log(`  ✓ Inserted post: ${post.title} (ID: ${insertedPost.id})`);
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
          console.error(`  ❌ Error inserting tag "${tagName}" for post ${post.title}:`, tagError.message);
        } else {
          tagsInserted++;
        }
      }
    }
    
    console.log(`✓ Inserted ${tagsInserted} tags.\n`);

    // Step 4: Insert comments
    console.log('Step 4: Inserting comments...');
    let commentsInserted = 0;
    
    // For comments, we'll assign random existing users or create placeholder users
    const userIds = Array.from(authorEmailToUserId.values());
    
    for (const post of allStaticPosts) {
      const newPostId = postIdMap.get(post.id);
      if (!newPostId) continue;
      
      const commentCount = post.comments;
      // Generate comments with varying timestamps
      for (let i = 0; i < Math.min(commentCount, 10); i++) {
        const commentDate = new Date(parseTimestamp(post.timestamp).getTime() + (i + 1) * 60 * 60 * 1000);
        
        // Assign a random user from existing users for the commenter
        const commenterId = userIds.length > 0 ? userIds[i % userIds.length] : null;
        
        if (!commenterId) {
          console.warn(`  ⚠️  No users available for comments, skipping...`);
          break;
        }
        
        const { error: commentError } = await supabase
          .from('comments')
          .insert({
            post_id: newPostId,
            commenter_id: commenterId,
            content: generateCommentContent(i),
            added_at: commentDate.toISOString(),
          });
        
        if (commentError) {
          console.error(`  ❌ Error inserting comment for post ${post.title}:`, commentError.message);
        } else {
          commentsInserted++;
        }
      }
    }
    
    console.log(`✓ Inserted ${commentsInserted} comments.\n`);

    // Step 5: Insert bookmarks
    console.log('Step 5: Inserting bookmarks...');
    let bookmarksInserted = 0;
    
    // For bookmarks, use the first user as the bookmarker
    const bookmarkerUserId = userIds.length > 0 ? userIds[0] : null;
    
    if (!bookmarkerUserId) {
      console.warn('  ⚠️  No users available for bookmarks, skipping...');
    } else {
      for (const oldPostId of bookmarkedPostIds) {
        const newPostId = postIdMap.get(oldPostId);
        if (!newPostId) continue;
        
        const { error: bookmarkError } = await supabase
          .from('bookmarks')
          .insert({
            post_id: newPostId,
            user_id: bookmarkerUserId,
            added_at: new Date().toISOString(),
          });
        
        if (bookmarkError) {
          // Check if it's a duplicate (unique constraint violation)
          if (bookmarkError.code === '23505') {
            console.log(`  ⚠️  Bookmark already exists for post ${oldPostId}`);
          } else {
            console.error(`  ❌ Error inserting bookmark for post ${oldPostId}:`, bookmarkError.message);
          }
        } else {
          bookmarksInserted++;
        }
      }
    }
    
    console.log(`✓ Inserted ${bookmarksInserted} bookmarks.\n`);

    console.log('========================================');
    console.log('Migration completed!');
    console.log('========================================');
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
    console.log('\n✓ Migration script completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Migration script failed:', error);
    process.exit(1);
  });
