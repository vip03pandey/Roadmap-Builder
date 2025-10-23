INSERT INTO roadmap_metadata (roadmap_id, subtitle, total_items) 
VALUES (2, 'Beginner’s guide to becoming a Backend Developer in 2025', 35);

-- Insert main path nodes
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'Introduction to Backend', 'main', NULL, 1),
(2, 'Programming Basics', 'main', NULL, 2),
(2, 'Databases', 'main', NULL, 3),
(2, 'APIs and Web Services', 'main', NULL, 4),
(2, 'Version Control with Git', 'main', NULL, 5),
(2, 'Web Servers', 'main', NULL, 6),
(2, 'Authentication and Authorization', 'main', NULL, 7),
(2, 'Deployment Basics', 'main', NULL, 8);

-- Insert sub-nodes (Introduction to Backend - id: 1)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'What is Backend Development?', 'sub', 1, 9),
(2, 'Backend vs Frontend', 'sub', 1, 10);

-- Insert sub-nodes (Programming Basics - id: 2)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'Python or Node.js Basics', 'sub', 2, 11),
(2, 'Variables and Data Types', 'sub', 2, 12),
(2, 'Functions and Loops', 'sub', 2, 13);

-- Insert sub-nodes (Databases - id: 3)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'SQL Basics', 'sub', 3, 14),
(2, 'NoSQL Overview', 'sub', 3, 15),
(2, 'Database Design', 'sub', 3, 16);

-- Insert sub-nodes (APIs and Web Services - id: 4)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'REST API Basics', 'sub', 4, 17),
(2, 'Building APIs', 'sub', 4, 18),
(2, 'Testing APIs', 'sub', 4, 19);

-- Insert sub-nodes (Version Control with Git - id: 5)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'Git Commands', 'sub', 5, 20),
(2, 'GitHub Basics', 'sub', 5, 21);

-- Insert sub-nodes (Web Servers - id: 6)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'Express.js or Flask Basics', 'sub', 6, 22),
(2, 'Routing', 'sub', 6, 23);

-- Insert sub-nodes (Authentication and Authorization - id: 7)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'JWT Basics', 'sub', 7, 24),
(2, 'User Login', 'sub', 7, 25);

-- Insert sub-nodes (Deployment Basics - id: 8)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(2, 'Hosting Platforms', 'sub', 8, 26),
(2, 'Basic Deployment', 'sub', 8, 27);

-- Insert connections between main nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 1, 2),   -- Introduction to Backend -> Programming Basics
(2, 2, 3),   -- Programming Basics -> Databases
(2, 3, 4),   -- Databases -> APIs and Web Services
(2, 4, 5),   -- APIs and Web Services -> Version Control with Git
(2, 5, 6),   -- Version Control with Git -> Web Servers
(2, 6, 7),   -- Web Servers -> Authentication and Authorization
(2, 7, 8);   -- Authentication and Authorization -> Deployment Basics

-- Insert connections from main nodes to sub-nodes (Introduction to Backend)
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 1, 9), (2, 1, 10);

-- Programming Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 2, 11), (2, 2, 12), (2, 2, 13);

-- Databases to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 3, 14), (2, 3, 15), (2, 3, 16);

-- APIs and Web Services to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 4, 17), (2, 4, 18), (2, 4, 19);

-- Version Control with Git to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 5, 20), (2, 5, 21);

-- Web Servers to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 6, 22), (2, 6, 23);

-- Authentication and Authorization to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 7, 24), (2, 7, 25);

-- Deployment Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(2, 8, 26), (2, 8, 27);




INSERT INTO roadmap_metadata (roadmap_id, subtitle, total_items) 
VALUES (5, 'Comprehensive guide to becoming a Backend Developer in 2025', 100);

-- Insert main path nodes
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Introduction to Backend Development', 'main', NULL, 1),
(5, 'Programming Fundamentals', 'main', NULL, 2),
(5, 'Databases', 'main', NULL, 3),
(5, 'APIs and Web Services', 'main', NULL, 4),
(5, 'Version Control with Git', 'main', NULL, 5),
(5, 'Web Servers and Frameworks', 'main', NULL, 6),
(5, 'Authentication and Authorization', 'main', NULL, 7),
(5, 'Testing and Debugging', 'main', NULL, 8),
(5, 'Cloud and Deployment', 'main', NULL, 9),
(5, 'Scalability and Performance', 'main', NULL, 10),
(5, 'Security Basics', 'main', NULL, 11),
(5, 'Advanced Topics', 'main', NULL, 12);

-- Insert sub-nodes (Introduction to Backend Development - id: 1)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'What is Backend Development?', 'sub', 1, 13),
(5, 'Backend vs Frontend', 'sub', 1, 14),
(5, 'Key Responsibilities and Skills', 'sub', 1, 15);

-- Insert sub-nodes (Programming Fundamentals - id: 2)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Choose a Language (Python/Node.js/Java)', 'sub', 2, 16),
(5, 'Variables and Data Types', 'sub', 2, 17),
(5, 'Control Structures (Loops, Conditionals)', 'sub', 2, 18),
(5, 'Functions and Modular Code', 'sub', 2, 19),
(5, 'Data Structures (Arrays, Lists, Dictionaries)', 'sub', 2, 20),
(5, 'Error Handling', 'sub', 2, 21);

-- Insert sub-nodes (Databases - id: 3)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Relational Databases (SQL)', 'sub', 3, 22),
(5, 'NoSQL Databases (MongoDB)', 'sub', 3, 23),
(5, 'Database Design and Normalization', 'sub', 3, 24),
(5, 'ORMs (e.g., SQLAlchemy, Mongoose)', 'sub', 3, 25),
(5, 'Basic Queries (CRUD Operations)', 'sub', 3, 26);

-- Insert sub-nodes (APIs and Web Services - id: 4)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'REST API Fundamentals', 'sub', 4, 27),
(5, 'Building REST APIs', 'sub', 4, 28),
(5, 'API Authentication (API Keys, OAuth)', 'sub', 4, 29),
(5, 'GraphQL Basics', 'sub', 4, 30),
(5, 'Testing APIs (Postman)', 'sub', 4, 31);

-- Insert sub-nodes (Version Control with Git - id: 5)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Git Commands (clone, commit, push)', 'sub', 5, 32),
(5, 'Branching and Merging', 'sub', 5, 33),
(5, 'GitHub/GitLab Workflows', 'sub', 5, 34),
(5, 'Resolving Merge Conflicts', 'sub', 5, 35);

-- Insert sub-nodes (Web Servers and Frameworks - id: 6)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Express.js (Node.js) or Flask (Python)', 'sub', 6, 36),
(5, 'Routing and Middleware', 'sub', 6, 37),
(5, 'MVC Architecture', 'sub', 6, 38),
(5, 'RESTful Routing', 'sub', 6, 39),
(5, 'Server Configuration', 'sub', 6, 40);

-- Insert sub-nodes (Authentication and Authorization - id: 7)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'JWT and Token-Based Authentication', 'sub', 7, 41),
(5, 'OAuth 2.0', 'sub', 7, 42),
(5, 'Role-Based Access Control', 'sub', 7, 43),
(5, 'Session Management', 'sub', 7, 44);

-- Insert sub-nodes (Testing and Debugging - id: 8)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Unit Testing (Jest, Pytest)', 'sub', 8, 45),
(5, 'Integration Testing', 'sub', 8, 46),
(5, 'Debugging Techniques', 'sub', 8, 47),
(5, 'Test-Driven Development', 'sub', 8, 48);

-- Insert sub-nodes (Cloud and Deployment - id: 9)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Cloud Platforms (AWS, Azure, GCP)', 'sub', 9, 49),
(5, 'Deploying to Heroku', 'sub', 9, 50),
(5, 'Docker Basics', 'sub', 9, 51),
(5, 'CI/CD Pipelines (GitHub Actions)', 'sub', 9, 52);

-- Insert sub-nodes (Scalability and Performance - id: 10)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Load Balancing', 'sub', 10, 53),
(5, 'Caching (Redis, Memcached)', 'sub', 10, 54),
(5, 'Database Optimization', 'sub', 10, 55),
(5, 'Horizontal vs Vertical Scaling', 'sub', 10, 56);

-- Insert sub-nodes (Security Basics - id: 11)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'HTTPS and SSL/TLS', 'sub', 11, 57),
(5, 'SQL Injection Prevention', 'sub', 11, 58),
(5, 'Cross-Site Scripting (XSS)', 'sub', 11, 59),
(5, 'Secure API Design', 'sub', 11, 60);

-- Insert sub-nodes (Advanced Topics - id: 12)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(5, 'Microservices Architecture', 'sub', 12, 61),
(5, 'Message Queues (RabbitMQ, Kafka)', 'sub', 12, 62),
(5, 'Serverless Computing', 'sub', 12, 63),
(5, 'GraphQL Advanced Concepts', 'sub', 12, 64);

-- Insert connections between main nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 1, 2),   -- Introduction to Backend Development -> Programming Fundamentals
(5, 2, 3),   -- Programming Fundamentals -> Databases
(5, 3, 4),   -- Databases -> APIs and Web Services
(5, 4, 5),   -- APIs and Web Services -> Version Control with Git
(5, 5, 6),   -- Version Control with Git -> Web Servers and Frameworks
(5, 6, 7),   -- Web Servers and Frameworks -> Authentication and Authorization
(5, 7, 8),   -- Authentication and Authorization -> Testing and Debugging
(5, 8, 9),   -- Testing and Debugging -> Cloud and Deployment
(5, 9, 10),  -- Cloud and Deployment -> Scalability and Performance
(5, 10, 11), -- Scalability and Performance -> Security Basics
(5, 11, 12); -- Security Basics -> Advanced Topics

-- Insert connections from main nodes to sub-nodes (Introduction to Backend Development)
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 1, 13), (5, 1, 14), (5, 1, 15);

-- Programming Fundamentals to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 2, 16), (5, 2, 17), (5, 2, 18), (5, 2, 19), (5, 2, 20), (5, 2, 21);

-- Databases to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 3, 22), (5, 3, 23), (5, 3, 24), (5, 3, 25), (5, 3, 26);

-- APIs and Web Services to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 4, 27), (5, 4, 28), (5, 4, 29), (5, 4, 30), (5, 4, 31);

-- Version Control with Git to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 5, 32), (5, 5, 33), (5, 5, 34), (5, 5, 35);

-- Web Servers and Frameworks to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 6, 36), (5, 6, 37), (5, 6, 38), (5, 6, 39), (5, 6, 40);

-- Authentication and Authorization to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 7, 41), (5, 7, 42), (5, 7, 43), (5, 7, 44);

-- Testing and Debugging to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 8, 45), (5, 8, 46), (5, 8, 47), (5, 8, 48);

-- Cloud and Deployment to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 9, 49), (5, 9, 50), (5, 9, 51), (5, 9, 52);

-- Scalability and Performance to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 10, 53), (5, 10, 54), (5, 10, 55), (5, 10, 56);

-- Security Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 11, 57), (5, 11, 58), (5, 11, 59), (5, 11, 60);

-- Advanced Topics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(5, 12, 61), (5, 12, 62), (5, 12, 63), (5, 12, 64);