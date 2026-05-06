/* This is user table created on 06-05-2026 13:00*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

/* To Insert the user first we do:
CREATE EXTENSION IF NOT EXISTS pgcrypto;
then inserting hash password using:
INSERT INTO users (email, password)
VALUES (
    'test@gmail.com',
    crypt('mypassword123', gen_salt('bf'))
);
After check the password using:
SELECT *
FROM users
WHERE email = 'test@gmail.com'
AND password = crypt('mypassword123', password);
*/