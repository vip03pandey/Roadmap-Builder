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
