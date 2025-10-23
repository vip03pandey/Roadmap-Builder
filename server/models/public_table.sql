CREATE TABLE public.categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);


CREATE TABLE public.roadmaps (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('ROLE_BASED', 'SKILL_BASED'))
);


CREATE TABLE public.roadmap_category_map (
  id SERIAL PRIMARY KEY,
  roadmap_id INT NOT NULL REFERENCES roadmaps(id) ON DELETE CASCADE,
  category_id INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  UNIQUE (roadmap_id, category_id)
);

-- Speed up lookups
CREATE INDEX idx_categories_name ON categories(name);
CREATE INDEX idx_roadmaps_name ON roadmaps(name);
CREATE INDEX idx_map_roadmap_id ON roadmap_category_map(roadmap_id);
CREATE INDEX idx_map_category_id ON roadmap_category_map(category_id);



-- Store roadmap nodes (topics/sections)
CREATE TABLE public.roadmap_nodes (
  id SERIAL PRIMARY KEY,
  roadmap_id INTEGER NOT NULL REFERENCES public.roadmaps(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  node_type VARCHAR(10) NOT NULL CHECK (node_type IN ('main', 'sub')),
  parent_id INTEGER REFERENCES public.roadmap_nodes(id) ON DELETE CASCADE,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT parent_check CHECK (
    (node_type = 'main' AND parent_id IS NULL) OR 
    (node_type = 'sub' AND parent_id IS NOT NULL)
  )
);

-- Store connections between nodes
CREATE TABLE public.roadmap_connections (
  id SERIAL PRIMARY KEY,
  roadmap_id INTEGER NOT NULL REFERENCES public.roadmaps(id) ON DELETE CASCADE,
  from_node_id INTEGER NOT NULL REFERENCES public.roadmap_nodes(id) ON DELETE CASCADE,
  to_node_id INTEGER NOT NULL REFERENCES public.roadmap_nodes(id) ON DELETE CASCADE,
  
  CONSTRAINT unique_connection UNIQUE(roadmap_id, from_node_id, to_node_id),
  CONSTRAINT no_self_connection CHECK (from_node_id != to_node_id)
);

-- Store roadmap metadata
CREATE TABLE public.roadmap_metadata (
  roadmap_id INTEGER PRIMARY KEY REFERENCES public.roadmaps(id) ON DELETE CASCADE,
  subtitle TEXT,
  total_items INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_roadmap_nodes_roadmap ON roadmap_nodes(roadmap_id);
CREATE INDEX idx_roadmap_nodes_parent ON roadmap_nodes(parent_id);
CREATE INDEX idx_roadmap_connections_roadmap ON roadmap_connections(roadmap_id);