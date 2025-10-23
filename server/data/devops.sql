INSERT INTO roadmap_metadata (roadmap_id, subtitle, total_items) 
VALUES (3, 'Beginner’s guide to becoming a DevOps Engineer in 2025', 35);

-- Insert main path nodes
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'Introduction to DevOps', 'main', NULL, 1),
(3, 'Linux Basics', 'main', NULL, 2),
(3, 'Version Control with Git', 'main', NULL, 3),
(3, 'Containerization', 'main', NULL, 4),
(3, 'CI/CD Fundamentals', 'main', NULL, 5),
(3, 'Cloud Basics', 'main', NULL, 6),
(3, 'Infrastructure as Code', 'main', NULL, 7),
(3, 'Monitoring and Logging', 'main', NULL, 8);

-- Insert sub-nodes (Introduction to DevOps - id: 1)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'What is DevOps?', 'sub', 1, 9),
(3, 'DevOps Principles', 'sub', 1, 10);

-- Insert sub-nodes (Linux Basics - id: 2)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'Command Line Basics', 'sub', 2, 11),
(3, 'File System Navigation', 'sub', 2, 12),
(3, 'Basic Scripting', 'sub', 2, 13);

-- Insert sub-nodes (Version Control with Git - id: 3)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'Git Commands', 'sub', 3, 14),
(3, 'GitHub Basics', 'sub', 3, 15);

-- Insert sub-nodes (Containerization - id: 4)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'Docker Basics', 'sub', 4, 16),
(3, 'Docker Images', 'sub', 4, 17),
(3, 'Docker Containers', 'sub', 4, 18);

-- Insert sub-nodes (CI/CD Fundamentals - id: 5)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'What is CI/CD?', 'sub', 5, 19),
(3, 'Jenkins Basics', 'sub', 5, 20),
(3, 'GitHub Actions', 'sub', 5, 21);

-- Insert sub-nodes (Cloud Basics - id: 6)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'AWS Overview', 'sub', 6, 22),
(3, 'EC2 Basics', 'sub', 6, 23),
(3, 'S3 Basics', 'sub', 6, 24);

-- Insert sub-nodes (Infrastructure as Code - id: 7)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'Terraform Basics', 'sub', 7, 25),
(3, 'Terraform Configuration', 'sub', 7, 26);

-- Insert sub-nodes (Monitoring and Logging - id: 8)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(3, 'Prometheus Basics', 'sub', 8, 27),
(3, 'Grafana Overview', 'sub', 8, 28);

-- Insert connections between main nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 1, 2),   -- Introduction to DevOps -> Linux Basics
(3, 2, 3),   -- Linux Basics -> Version Control with Git
(3, 3, 4),   -- Version Control with Git -> Containerization
(3, 4, 5),   -- Containerization -> CI/CD Fundamentals
(3, 5, 6),   -- CI/CD Fundamentals -> Cloud Basics
(3, 6, 7),   -- Cloud Basics -> Infrastructure as Code
(3, 7, 8);   -- Infrastructure as Code -> Monitoring and Logging

-- Insert connections from main nodes to sub-nodes (Introduction to DevOps)
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 1, 9), (3, 1, 10);

-- Linux Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 2, 11), (3, 2, 12), (3, 2, 13);

-- Version Control with Git to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 3, 14), (3, 3, 15);

-- Containerization to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 4, 16), (3, 4, 17), (3, 4, 18);

-- CI/CD Fundamentals to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 5, 19), (3, 5, 20), (3, 5, 21);

-- Cloud Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 6, 22), (3, 6, 23), (3, 6, 24);

-- Infrastructure as Code to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 7, 25), (3, 7, 26);

-- Monitoring and Logging to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(3, 8, 27), (3, 8, 28);