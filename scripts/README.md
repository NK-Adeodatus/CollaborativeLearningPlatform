# Data Migration Script

This script migrates all static mock data from the React components to your Supabase database.

## Prerequisites

1. **Supabase Tables Created**: Make sure you have created all the required tables in your Supabase database:
   - `posts`
   - `tags`
   - `comments`
   - `bookmarks`

2. **Supabase Credentials**: You'll need either:
   - **Anon Key** (already in the script) - for basic operations
   - **Service Role Key** (recommended) - for creating users and admin operations

## Getting Your Service Role Key

1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy the `service_role` key (keep this secret!)
4. Never commit this key to version control

## Running the Migration

### Option 1: Using Service Role Key (Recommended)

This allows the script to automatically create users if they don't exist.

```bash
# Set the service role key as an environment variable
export SUPABASE_SERVICE_ROLE_KEY="your-service-role-key-here"

# Run the migration script
node scripts/migrate-static-data.js
```

On Windows (PowerShell):
```powershell
$env:SUPABASE_SERVICE_ROLE_KEY="your-service-role-key-here"
node scripts/migrate-static-data.js
```

On Windows (CMD):
```cmd
set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
node scripts/migrate-static-data.js
```

### Option 2: Using Anon Key Only (Limited)

⚠️ **Limitation**: With anon key, the script **cannot automatically find users** you create manually. 

**Recommended workaround**: 
1. Create **at least 1 user** manually in Supabase Auth dashboard
2. **Get the User ID** from the user's details page
3. Temporarily hardcode it in the script (or use service role key instead)

**OR** just use the service role key (Option 1) - it's much easier!

If you still want to proceed with anon key:
```bash
node scripts/migrate-static-data.js
```

The script will fail if it can't find any users. You'll need at least one user ID to proceed.

## What the Script Does

1. **Extracts all static data** from:
   - `home-page.tsx` (5 posts)
   - `explore-page.tsx` (6 posts)
   - `bookmarks-page.tsx` (bookmarked post IDs)

2. **Maps authors to users**:
   - Tries to find existing users by email
   - If using service role key, creates users automatically

3. **Inserts data in this order**:
   - **Posts** (11 total posts)
   - **Tags** (for each post)
   - **Comments** (generates comments based on comment counts)
   - **Bookmarks** (for posts marked as bookmarked)

## Troubleshooting

### Error: "Cannot insert post without user_id"

**Solution**: Create users first or use the service role key.

1. Go to Supabase Auth dashboard
2. Create users with emails matching the authors in the script
3. Or set `SUPABASE_SERVICE_ROLE_KEY` environment variable

### Error: "relation does not exist"

**Solution**: Make sure all tables are created in your Supabase database.

Run the SQL schema in your Supabase SQL editor to create the tables.

### Error: "permission denied"

**Solution**: 
- Check your RLS (Row Level Security) policies
- Use the service role key for admin operations
- Or temporarily disable RLS for the migration

## After Migration

1. **Verify the data** in your Supabase dashboard
2. **Check user assignments**: Make sure posts, comments, and bookmarks have correct `user_id` values
3. **Update your frontend** to fetch data from Supabase instead of using mock data

## Notes

- The script converts relative timestamps ("2 hours ago") to actual dates
- Comment content is generated automatically
- Post content combines title and description
- Tags are inserted separately for each post
