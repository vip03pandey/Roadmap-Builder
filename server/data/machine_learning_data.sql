INSERT INTO roadmap_metadata (roadmap_id, subtitle, total_items) 
VALUES (16, 'Step by step guide to becoming a Machine Learning Engineer in 2025', 150);

-- Insert main path nodes
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Introduction', 'main', NULL, 1),
(16, 'Discrete Mathematics', 'main', NULL, 2),
(16, 'Statistics', 'main', NULL, 3),
(16, 'Probability', 'main', NULL, 4),
(16, 'Programming Fundamentals', 'main', NULL, 5),
(16, 'Object Oriented Programming', 'main', NULL, 6),
(16, 'Essential Libraries', 'main', NULL, 7),
(16, 'Data Collection', 'main', NULL, 8),
(16, 'Data Sources', 'main', NULL, 9),
(16, 'Data Formats', 'main', NULL, 10),
(16, 'Data Cleaning', 'main', NULL, 11),
(16, 'Preprocessing Techniques', 'main', NULL, 12);

-- Insert sub-nodes (Introduction - id: 1)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'What is an ML Engineer?', 'sub', 1, 13),
(16, 'ML Engineer vs AI Engineer', 'sub', 1, 14),
(16, 'Skills and Responsibilities', 'sub', 1, 15);

-- Insert sub-nodes (Discrete Mathematics - id: 2)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Sets and Logic', 'sub', 2, 16),
(16, 'Graph Theory', 'sub', 2, 17);

-- Insert sub-nodes (Statistics - id: 3)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Basic concepts', 'sub', 3, 18),
(16, 'Descriptive Statistics', 'sub', 3, 19),
(16, 'Graphs & Charts', 'sub', 3, 20),
(16, 'Inferential Statistics', 'sub', 3, 21);

-- Insert sub-nodes (Probability - id: 4)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Random Variables, PDFs', 'sub', 4, 22),
(16, 'Types of Distribution', 'sub', 4, 23),
(16, 'Bayes Theorem', 'sub', 4, 24);

-- Insert sub-nodes (Programming Fundamentals - id: 5)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Basic Syntax', 'sub', 5, 25),
(16, 'Variables and Data Types', 'sub', 5, 26),
(16, 'Data Structures', 'sub', 5, 27),
(16, 'Loops', 'sub', 5, 28),
(16, 'Conditionals', 'sub', 5, 29),
(16, 'Exceptions', 'sub', 5, 30),
(16, 'Functions', 'sub', 5, 31);

-- Insert sub-nodes (Object Oriented Programming - id: 6)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Classes and Objects', 'sub', 6, 32),
(16, 'Inheritance', 'sub', 6, 33),
(16, 'Polymorphism', 'sub', 6, 34);

-- Insert sub-nodes (Essential Libraries - id: 7)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Numpy', 'sub', 7, 35),
(16, 'Pandas', 'sub', 7, 36),
(16, 'Matplotlib', 'sub', 7, 37),
(16, 'Seaborn', 'sub', 7, 38);

-- Insert sub-nodes (Data Sources - id: 9)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Databases (SQL, No-SQL)', 'sub', 9, 39),
(16, 'Internet/APIs', 'sub', 9, 40),
(16, 'Mobile Apps', 'sub', 9, 41),
(16, 'IoT', 'sub', 9, 42);

-- Insert sub-nodes (Data Formats - id: 10)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'CSV', 'sub', 10, 43),
(16, 'Excel', 'sub', 10, 44),
(16, 'JSON', 'sub', 10, 45),
(16, 'XML', 'sub', 10, 46);

-- Insert sub-nodes (Preprocessing Techniques - id: 12)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(16, 'Data Cleaning', 'sub', 12, 47),
(16, 'Feature Engineering', 'sub', 12, 48),
(16, 'Feature Scaling', 'sub', 12, 49);


INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 1, 2),   -- Introduction -> Discrete Mathematics
(16, 2, 3),   -- Discrete Mathematics -> Statistics
(16, 3, 4),   -- Statistics -> Probability
(16, 4, 5),   -- Probability -> Programming Fundamentals
(16, 5, 6),   -- Programming Fundamentals -> OOP
(16, 6, 7),   -- OOP -> Essential Libraries
(16, 7, 8),   -- Essential Libraries -> Data Collection
(16, 8, 9),   -- Data Collection -> Data Sources
(16, 9, 10),  -- Data Sources -> Data Formats
(16, 10, 11), -- Data Formats -> Data Cleaning
(16, 11, 12); -- Data Cleaning -> Preprocessing Techniques

-- Insert connections from main nodes to sub-nodes (Introduction)
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 1, 13), (16, 1, 14), (16, 1, 15);

-- Discrete Mathematics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 2, 16), (16, 2, 17);

-- Statistics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 3, 18), (16, 3, 19), (16, 3, 20), (16, 3, 21);

-- Probability to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 4, 22), (16, 4, 23), (16, 4, 24);

-- Programming Fundamentals to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 5, 25), (16, 5, 26), (16, 5, 27), (16, 5, 28),
(16, 5, 29), (16, 5, 30), (16, 5, 31);

-- Object Oriented Programming to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 6, 32), (16, 6, 33), (16, 6, 34);

-- Essential Libraries to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 7, 35), (16, 7, 36), (16, 7, 37), (16, 7, 38);

-- Data Sources to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 9, 39), (16, 9, 40), (16, 9, 41), (16, 9, 42);

-- Data Formats to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 10, 43), (16, 10, 44), (16, 10, 45), (16, 10, 46);

-- Preprocessing Techniques to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(16, 12, 47), (16, 12, 48), (16, 12, 49);