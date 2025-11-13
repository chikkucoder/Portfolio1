# Supabase Setup for Visitor Wall

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - Name: `portfolio-visitor-wall`
   - Database Password: Create a strong password
   - Region: Choose closest to your location
6. Click "Create new project"

## Step 2: Create the Database Table

1. In your Supabase dashboard, go to the "SQL Editor"
2. Run this SQL command to create the visitor_messages table:

```sql
-- Create the visitor_messages table
CREATE TABLE visitor_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mood VARCHAR(10) NOT NULL DEFAULT '😊',
    message TEXT NOT NULL CHECK (length(message) <= 500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE visitor_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read messages
CREATE POLICY "Anyone can read visitor messages" ON visitor_messages
    FOR SELECT USING (true);

-- Create policy to allow anyone to insert messages
CREATE POLICY "Anyone can insert visitor messages" ON visitor_messages
    FOR INSERT WITH CHECK (true);

-- Create an index for better performance
CREATE INDEX idx_visitor_messages_created_at ON visitor_messages(created_at DESC);
```

## Step 3: Get Your Supabase Credentials

1. In your Supabase dashboard, go to "Settings" > "API"
2. Copy the following:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **Anon public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## Step 4: Update Your Portfolio Code

1. Open `d:\portfolio\Portfolio\assets\js\script.js`
2. Find these lines at the top of the visitor wall section:

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

3. Replace them with your actual Supabase credentials:

```javascript
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

## Step 5: Test Your Visitor Wall

1. Open your portfolio website
2. Click the "Visitor Wall" button
3. Try sending a message
4. Refresh the page and check if the message persists

## Features Included

✅ **Persistent Storage**: Messages are stored in Supabase and persist after page refresh
✅ **Real-time Feel**: New messages appear immediately
✅ **Automatic Time Formatting**: Shows "just now", "5m ago", "2h ago", "3d ago"
✅ **Message Validation**: Prevents empty messages and enforces character limits
✅ **Mood Selection**: Users can pick emojis to express their mood
✅ **Responsive Design**: Works on all device sizes
✅ **Error Handling**: Graceful fallback if Supabase is unavailable
✅ **Loading States**: Visual feedback during message sending

## Security Notes

- The table uses Row Level Security (RLS)
- Public read/write access is intentionally enabled for the visitor wall feature
- Messages are limited to 500 characters
- No sensitive data should be stored in visitor messages

## Optional: Add Moderation

If you want to add message moderation later, you can:

1. Remove the public INSERT policy
2. Create a moderation system
3. Add an `approved` column to filter messages

## Troubleshooting

**Messages not saving?**
- Check browser console for errors
- Verify your Supabase URL and key are correct
- Ensure the table was created successfully

**Old messages not showing?**
- The system automatically falls back to sample data if Supabase isn't configured
- Once configured, it will load real messages from the database

**Need help?**
- Check the Supabase documentation: https://supabase.com/docs
- Verify your project is active in the Supabase dashboard