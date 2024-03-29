-- Counter Table
CREATE TABLE IF NOT EXISTS Count (
    countId INT AUTO_INCREMENT PRIMARY KEY,
    count INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=INNODB;

-- Select
SELECT * FROM Count 
WHERE countId=1;

-- Update
UPDATE Count 
SET count=0
WHERE countId=1;

-- Insert
INSERT INTO Count (count)
VALUES (0);