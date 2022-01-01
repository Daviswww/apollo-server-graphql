-- User Table
CREATE TABLE IF NOT EXISTS User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=INNODB;

-- Select
SELECT * FROM User 
WHERE user_id=1;

-- Insert
INSERT INTO User (user_name)
VALUES ('Davis');

-- Update
UPDATE User 
SET user_name = 'kevin'
WHERE user_id = 1;

-- Delete
DELETE from User 
WHERE user_id = 16;