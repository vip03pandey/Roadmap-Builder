INSERT INTO public.categories (name) VALUES
('All Roadmaps'),
('Absolute Beginners'),
('Web Development'),
('Frameworks'),
('Languages / Platforms'),
('DevOps'),
('Mobile Development'),
('Databases'),
('Computer Science'),
('Machine Learning'),
('Management'),
('Game Development'),
('Design'),
('Blockchain'),
('Cyber Security');


INSERT INTO public.roadmaps (name, type) VALUES
('Frontend Beginner', 'ROLE_BASED'),
('Backend Beginner', 'ROLE_BASED'),
('DevOps Beginner', 'ROLE_BASED'),
('Frontend', 'ROLE_BASED'),
('Backend', 'ROLE_BASED'),
('Full Stack', 'ROLE_BASED'),
('API Design', 'ROLE_BASED'),
('QA', 'ROLE_BASED'),
('DevOps', 'ROLE_BASED'),
('Android', 'ROLE_BASED'),
('iOS', 'ROLE_BASED'),
('PostgreSQL', 'ROLE_BASED'),
('Software Architect', 'ROLE_BASED'),
('Technical Writer', 'ROLE_BASED'),
('DevRel Engineer', 'ROLE_BASED'),
('Machine Learning', 'ROLE_BASED'),
('AI and Data Scientist', 'ROLE_BASED'),
('AI Engineer', 'ROLE_BASED'),
('AI Agents', 'ROLE_BASED'),
('Data Analyst', 'ROLE_BASED'),
('BI Analyst', 'ROLE_BASED'),
('Data Engineer', 'ROLE_BASED'),
('MLOps', 'ROLE_BASED'),
('Product Manager', 'ROLE_BASED'),
('Engineering Manager', 'ROLE_BASED'),
('Client Side Game Dev.', 'ROLE_BASED'),
('Server Side Game Dev.', 'ROLE_BASED'),
('UX Design', 'ROLE_BASED'),
('Blockchain', 'ROLE_BASED'),
('Cyber Security', 'ROLE_BASED');


INSERT INTO public.roadmaps (name, type) VALUES
('GraphQL', 'SKILL_BASED'),
('Git and GitHub', 'SKILL_BASED'),
('React', 'SKILL_BASED'),
('Vue', 'SKILL_BASED'),
('Angular', 'SKILL_BASED'),
('Next.js', 'SKILL_BASED'),
('Spring Boot', 'SKILL_BASED'),
('ASP.NET Core', 'SKILL_BASED'),
('HTML', 'SKILL_BASED'),
('CSS', 'SKILL_BASED'),
('JavaScript', 'SKILL_BASED'),
('Kotlin', 'SKILL_BASED'),
('TypeScript', 'SKILL_BASED'),
('Node.js', 'SKILL_BASED'),
('PHP', 'SKILL_BASED'),
('C++', 'SKILL_BASED'),
('Go', 'SKILL_BASED'),
('Rust', 'SKILL_BASED'),
('Python', 'SKILL_BASED'),
('Java', 'SKILL_BASED'),
('SQL', 'SKILL_BASED'),
('Docker', 'SKILL_BASED'),
('Kubernetes', 'SKILL_BASED'),
('AWS', 'SKILL_BASED'),
('Cloudflare', 'SKILL_BASED'),
('Linux', 'SKILL_BASED'),
('Terraform', 'SKILL_BASED'),
('React Native', 'SKILL_BASED'),
('Flutter', 'SKILL_BASED'),
('MongoDB', 'SKILL_BASED'),
('Redis', 'SKILL_BASED'),
('Computer Science', 'SKILL_BASED'),
('Data Structures', 'SKILL_BASED'),
('System Design', 'SKILL_BASED'),
('Design and Architecture', 'SKILL_BASED'),
('Code Review', 'SKILL_BASED'),
('AI Red Teaming', 'SKILL_BASED'),
('Prompt Engineering', 'SKILL_BASED'),
('Design System', 'SKILL_BASED');



-- === ALL ROADMAPS ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN (
  'Frontend Beginner', 'Backend Beginner', 'DevOps Beginner',
  'Frontend', 'Backend', 'Full Stack',
  'API Design', 'QA', 'DevOps',
  'Android', 'iOS', 'PostgreSQL',
  'Software Architect', 'Technical Writer', 'DevRel Engineer',
  'Machine Learning', 'AI and Data Scientist', 'AI Engineer',
  'AI Agents', 'Data Analyst', 'BI Analyst',
  'Data Engineer', 'MLOps', 'Product Manager',
  'Engineering Manager', 'Client Side Game Dev.', 'Server Side Game Dev.',
  'UX Design', 'Blockchain', 'Cyber Security'
) AND c.name = 'All Roadmaps';

-- === ABSOLUTE BEGINNERS ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Frontend Beginner', 'Backend Beginner', 'DevOps Beginner')
AND c.name = 'Absolute Beginners';

-- === WEB DEVELOPMENT ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Frontend', 'Backend', 'Full Stack', 'API Design')
AND c.name = 'Web Development';

-- === FRAMEWORKS ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('React', 'Angular', 'Vue', 'Next.js', 'Spring Boot')
AND c.name = 'Frameworks';

-- === LANGUAGES / PLATFORMS ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'PHP', 'Kotlin')
AND c.name = 'Languages / Platforms';

-- === DEVOPS ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('DevOps', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Linux')
AND c.name = 'DevOps';

-- === MOBILE DEVELOPMENT ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Android', 'iOS', 'React Native', 'Flutter')
AND c.name = 'Mobile Development';

-- === DATABASES ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('PostgreSQL', 'MongoDB', 'Redis', 'SQL')
AND c.name = 'Databases';

-- === COMPUTER SCIENCE ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Computer Science', 'Data Structures', 'Design and Architecture', 'System Design')
AND c.name = 'Computer Science';

-- === MACHINE LEARNING ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Machine Learning', 'AI and Data Scientist', 'AI Engineer', 'AI Agents', 'AI Red Teaming', 'Prompt Engineering')
AND c.name = 'Machine Learning';

-- === MANAGEMENT ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Product Manager', 'Engineering Manager')
AND c.name = 'Management';

-- === GAME DEVELOPMENT ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('Client Side Game Dev.', 'Server Side Game Dev.')
AND c.name = 'Game Development';

-- === DESIGN ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name IN ('UX Design', 'Design System')
AND c.name = 'Design';

-- === BLOCKCHAIN ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name = 'Blockchain' AND c.name = 'Blockchain';

-- === CYBER SECURITY ===
INSERT INTO public.roadmap_category_map (roadmap_id, category_id)
SELECT r.id, c.id FROM public.roadmaps r, public.categories c
WHERE r.name = 'Cyber Security' AND c.name = 'Cyber Security';
