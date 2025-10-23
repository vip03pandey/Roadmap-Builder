INSERT INTO roadmap_metadata (roadmap_id, subtitle, total_items) 
VALUES (1, 'Beginner’s guide to becoming a Frontend Developer in 2025', 40);


-- frontend beginner
-- Insert main path nodes
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Introduction', 'main', NULL, 1),
(1, 'HTML Basics', 'main', NULL, 2),
(1, 'CSS Basics', 'main', NULL, 3),
(1, 'JavaScript Basics', 'main', NULL, 4),
(1, 'Version Control with Git', 'main', NULL, 5),
(1, 'Responsive Design', 'main', NULL, 6),
(1, 'Basic Frameworks', 'main', NULL, 7),
(1, 'Deployment', 'main', NULL, 8);

-- Insert sub-nodes (Introduction - id: 1)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'What is Frontend?', 'sub', 1, 9),
(1, 'Key Skills', 'sub', 1, 10);

-- Insert sub-nodes (HTML Basics - id: 2)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Tags and Elements', 'sub', 2, 11),
(1, 'Semantic HTML', 'sub', 2, 12);

-- Insert sub-nodes (CSS Basics - id: 3)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Selectors', 'sub', 3, 13),
(1, 'Box Model', 'sub', 3, 14),
(1, 'Flexbox', 'sub', 3, 15);

-- Insert sub-nodes (JavaScript Basics - id: 4)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Variables', 'sub', 4, 16),
(1, 'Functions', 'sub', 4, 17),
(1, 'Events', 'sub', 4, 18);

-- Insert sub-nodes (Version Control with Git - id: 5)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Basic Commands', 'sub', 5, 19),
(1, 'GitHub Basics', 'sub', 5, 20);

-- Insert sub-nodes (Responsive Design - id: 6)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Media Queries', 'sub', 6, 21),
(1, 'Mobile First', 'sub', 6, 22);

-- Insert sub-nodes (Basic Frameworks - id: 7)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'React Basics', 'sub', 7, 23),
(1, 'Components', 'sub', 7, 24);

-- Insert sub-nodes (Deployment - id: 8)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(1, 'Hosting Platforms', 'sub', 8, 25);

-- Insert connections between main nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 1, 2),   -- Introduction -> HTML Basics
(1, 2, 3),   -- HTML Basics -> CSS Basics
(1, 3, 4),   -- CSS Basics -> JavaScript Basics
(1, 4, 5),   -- JavaScript Basics -> Version Control with Git
(1, 5, 6),   -- Version Control with Git -> Responsive Design
(1, 6, 7),   -- Responsive Design -> Basic Frameworks
(1, 7, 8);   -- Basic Frameworks -> Deployment

-- Insert connections from main nodes to sub-nodes (Introduction)
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 1, 9), (1, 1, 10);

-- HTML Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 2, 11), (1, 2, 12);

-- CSS Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 3, 13), (1, 3, 14), (1, 3, 15);

-- JavaScript Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 4, 16), (1, 4, 17), (1, 4, 18);

-- Version Control with Git to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 5, 19), (1, 5, 20);

-- Responsive Design to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 6, 21), (1, 6, 22);

-- Basic Frameworks to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 7, 23), (1, 7, 24);

-- Deployment to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(1, 8, 25);




-- frontend
INSERT INTO roadmap_metadata (roadmap_id, subtitle, total_items) 
VALUES (4, 'Step by step guide to becoming a Frontend Developer in 2025', 100);

-- Insert main path nodes
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Introduction', 'main', NULL, 1),
(4, 'HTML Fundamentals', 'main', NULL, 2),
(4, 'CSS Basics', 'main', NULL, 3),
(4, 'JavaScript Essentials', 'main', NULL, 4),
(4, 'DOM Manipulation', 'main', NULL, 5),
(4, 'Version Control with Git', 'main', NULL, 6),
(4, 'Responsive Web Design', 'main', NULL, 7),
(4, 'CSS Preprocessors', 'main', NULL, 8),
(4, 'JavaScript Frameworks', 'main', NULL, 9),
(4, 'Build Tools and Bundlers', 'main', NULL, 10),
(4, 'Testing and Debugging', 'main', NULL, 11),
(4, 'Deployment and Hosting', 'main', NULL, 12);

-- Insert sub-nodes (Introduction - id: 1)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'What is Frontend Development?', 'sub', 1, 13),
(4, 'Frontend vs Backend', 'sub', 1, 14),
(4, 'Required Skills', 'sub', 1, 15);

-- Insert sub-nodes (HTML Fundamentals - id: 2)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Tags and Elements', 'sub', 2, 16),
(4, 'Attributes', 'sub', 2, 17),
(4, 'Semantic HTML', 'sub', 2, 18),
(4, 'Forms', 'sub', 2, 19);

-- Insert sub-nodes (CSS Basics - id: 3)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Selectors', 'sub', 3, 20),
(4, 'Box Model', 'sub', 3, 21),
(4, 'Flexbox', 'sub', 3, 22),
(4, 'Grid', 'sub', 3, 23);

-- Insert sub-nodes (JavaScript Essentials - id: 4)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Variables and Data Types', 'sub', 4, 24),
(4, 'Operators', 'sub', 4, 25),
(4, 'Control Structures', 'sub', 4, 26),
(4, 'Functions', 'sub', 4, 27),
(4, 'Arrays and Objects', 'sub', 4, 28);

-- Insert sub-nodes (DOM Manipulation - id: 5)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Selecting Elements', 'sub', 5, 29),
(4, 'Event Listeners', 'sub', 5, 30),
(4, 'Manipulating Content', 'sub', 5, 31);

-- Insert sub-nodes (Version Control with Git - id: 6)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Basic Commands', 'sub', 6, 32),
(4, 'Branching', 'sub', 6, 33),
(4, 'Remote Repos', 'sub', 6, 34);

-- Insert sub-nodes (Responsive Web Design - id: 7)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Media Queries', 'sub', 7, 35),
(4, 'Mobile First', 'sub', 7, 36);

-- Insert sub-nodes (CSS Preprocessors - id: 8)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Sass Basics', 'sub', 8, 37),
(4, 'Variables', 'sub', 8, 38),
(4, 'Mixins', 'sub', 8, 39);

-- Insert sub-nodes (JavaScript Frameworks - id: 9)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'React Introduction', 'sub', 9, 40),
(4, 'Components', 'sub', 9, 41),
(4, 'State and Props', 'sub', 9, 42),
(4, 'Vue or Angular Overview', 'sub', 9, 43);

-- Insert sub-nodes (Build Tools and Bundlers - id: 10)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Webpack Configuration', 'sub', 10, 44),
(4, 'Vite', 'sub', 10, 45);

-- Insert sub-nodes (Testing and Debugging - id: 11)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Unit Testing', 'sub', 11, 46),
(4, 'Jest', 'sub', 11, 47);

-- Insert sub-nodes (Deployment and Hosting - id: 12)
INSERT INTO roadmap_nodes (roadmap_id, title, node_type, parent_id, display_order) VALUES
(4, 'Hosting Platforms', 'sub', 12, 48),
(4, 'CI/CD', 'sub', 12, 49);

-- Insert connections between main nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 1, 2),   -- Introduction -> HTML Fundamentals
(4, 2, 3),   -- HTML Fundamentals -> CSS Basics
(4, 3, 4),   -- CSS Basics -> JavaScript Essentials
(4, 4, 5),   -- JavaScript Essentials -> DOM Manipulation
(4, 5, 6),   -- DOM Manipulation -> Version Control with Git
(4, 6, 7),   -- Version Control with Git -> Responsive Web Design
(4, 7, 8),   -- Responsive Web Design -> CSS Preprocessors
(4, 8, 9),   -- CSS Preprocessors -> JavaScript Frameworks
(4, 9, 10),  -- JavaScript Frameworks -> Build Tools and Bundlers
(4, 10, 11), -- Build Tools and Bundlers -> Testing and Debugging
(4, 11, 12); -- Testing and Debugging -> Deployment and Hosting

-- Insert connections from main nodes to sub-nodes (Introduction)
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 1, 13), (4, 1, 14), (4, 1, 15);

-- HTML Fundamentals to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 2, 16), (4, 2, 17), (4, 2, 18), (4, 2, 19);

-- CSS Basics to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 3, 20), (4, 3, 21), (4, 3, 22), (4, 3, 23);

-- JavaScript Essentials to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 4, 24), (4, 4, 25), (4, 4, 26), (4, 4, 27), (4, 4, 28);

-- DOM Manipulation to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 4, 29), (4, 4, 30), (4, 4, 31);

-- Version Control with Git to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 6, 32), (4, 6, 33), (4, 6, 34);

-- Responsive Web Design to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 7, 35), (4, 7, 36);

-- CSS Preprocessors to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 8, 37), (4, 8, 38), (4, 8, 39);

-- JavaScript Frameworks to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 9, 40), (4, 9, 41), (4, 9, 42), (4, 9, 43);

-- Build Tools and Bundlers to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 10, 44), (4, 10, 45);

-- Testing and Debugging to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 11, 46), (4, 11, 47);

-- Deployment and Hosting to sub-nodes
INSERT INTO roadmap_connections (roadmap_id, from_node_id, to_node_id) VALUES
(4, 12, 48), (4, 12, 49);