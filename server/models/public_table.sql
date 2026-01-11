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



-- ================================
-- NEWSLETTER TEMPLATES
-- ================================
CREATE TABLE IF NOT EXISTS public.newsletter_templates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  subject_template VARCHAR(500) NOT NULL,
  text_template TEXT NOT NULL,
  html_content TEXT NOT NULL,
  preview_data JSONB DEFAULT '{}',
  template_variables JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT TRUE,

  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_templates_name
  ON public.newsletter_templates(name);


-- ================================
-- NEWSLETTER CAMPAIGNS
-- ================================
CREATE TABLE IF NOT EXISTS public.newsletter_campaigns (
  id SERIAL PRIMARY KEY,
  template_id INTEGER REFERENCES public.newsletter_templates(id) ON DELETE CASCADE,

  frequency VARCHAR(20) NOT NULL
    CHECK (frequency IN ('DAILY', 'WEEKLY', 'MONTHLY')),

  start_date DATE NOT NULL,
  send_time TIME NOT NULL,
  next_send_date TIMESTAMP NOT NULL,

  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_campaigns_template
  ON public.newsletter_campaigns(template_id);


-- ================================
-- CAMPAIGN EXECUTIONS (SEND RUNS)
-- ================================
CREATE TABLE IF NOT EXISTS public.newsletter_campaigns_executions (
  id SERIAL PRIMARY KEY,
  campaign_id INTEGER REFERENCES public.newsletter_campaigns(id) ON DELETE CASCADE,

  execution_time TIMESTAMP NOT NULL,
  status VARCHAR(20) NOT NULL
    CHECK (status IN ('pending', 'in_progress', 'completed', 'failed')),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_campaigns_executions_campaign
  ON public.newsletter_campaigns_executions(campaign_id);


-- ================================
-- NEWSLETTER RECIPIENTS
-- ================================
CREATE TABLE IF NOT EXISTS public.newsletter_recipients (
  id SERIAL PRIMARY KEY,

  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  newsletter_campaign_id INTEGER
    REFERENCES public.newsletter_campaigns(id) ON DELETE CASCADE,

  is_subscribed BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  unsubscribe_token VARCHAR(255) UNIQUE,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_recipients_user
  ON public.newsletter_recipients(user_id);

CREATE INDEX IF NOT EXISTS idx_newsletter_recipients_campaign
  ON public.newsletter_recipients(newsletter_campaign_id);

CREATE INDEX IF NOT EXISTS idx_newsletter_recipients_unsubscribe_token
  ON public.newsletter_recipients(unsubscribe_token);


-- ================================
-- RECIPIENT SEND HISTORY
-- ================================
CREATE TABLE IF NOT EXISTS public.newsletter_recipient_history (
  id SERIAL PRIMARY KEY,

  recipient_id INTEGER
    REFERENCES public.newsletter_recipients(id) ON DELETE CASCADE,

  campaign_execution_id INTEGER
    REFERENCES public.newsletter_campaigns_executions(id) ON DELETE CASCADE,

  sent_at TIMESTAMP NOT NULL,
  status VARCHAR(20) NOT NULL
    CHECK (
      status IN (
        'sent',
        'failed',
        'delivered',
        'opened',
        'clicked',
        'unsubscribed'
      )
    ),

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_newsletter_recipient_history_recipient
  ON public.newsletter_recipient_history(recipient_id);

CREATE INDEX IF NOT EXISTS idx_newsletter_recipient_history_campaign
  ON public.newsletter_recipient_history(campaign_execution_id);
