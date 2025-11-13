-- Create visitor_messages table for portfolio visitor wall
-- Copy this entire script and paste it into Supabase SQL Editor, then click RUN

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

-- Insert sample data to verify it's working
INSERT INTO visitor_messages (name, mood, message) VALUES 
('Ankit kumar', '😊', 'nyc'),
('rishabh dubey', '😊', 'bhai ki official hai baki saar fake hai'),
('System', '🎉', 'Visitor wall is now ready!');

-- Verify the table was created successfully
SELECT COUNT(*) as total_messages FROM visitor_messages;