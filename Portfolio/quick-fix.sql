-- Quick fix SQL - Run this in your Supabase SQL Editor
-- This will create the table and set proper permissions

CREATE TABLE IF NOT EXISTS visitor_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mood VARCHAR(10) NOT NULL DEFAULT '😊',
    message TEXT NOT NULL CHECK (length(message) <= 500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE visitor_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can read visitor messages" ON visitor_messages;
DROP POLICY IF EXISTS "Anyone can insert visitor messages" ON visitor_messages;

-- Create new policies
CREATE POLICY "Anyone can read visitor messages" ON visitor_messages
    FOR SELECT USING (true);

CREATE POLICY "Anyone can insert visitor messages" ON visitor_messages
    FOR INSERT WITH CHECK (true);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_visitor_messages_created_at ON visitor_messages(created_at DESC);

-- Test with sample data
INSERT INTO visitor_messages (name, mood, message) VALUES 
('System Test', '🧪', 'Database connection successful!')
ON CONFLICT DO NOTHING;