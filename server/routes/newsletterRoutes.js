import express from 'express';
import { supabase } from '../config/supabaseClient.js';
const router = express.Router();

// ================================
// TEMPLATES
// ================================

// Fetch all templates
router.get("/templates", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("newsletter_templates")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("Error fetching templates:", error.message);
    res.status(500).json({ error: "Failed to fetch templates" });
  }
});

// Create a new template
router.post("/templates", async (req, res) => {
  const { name, description, subject_template, text_template, html_content } = req.body;
  try {
    const { data, error } = await supabase
      .from("newsletter_templates")
      .insert([
        { 
          name, 
          description, 
          subject_template, 
          text_template, 
          html_content 
        }
      ])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error creating template:", error.message);
    res.status(500).json({ error: "Failed to create template" });
  }
});

// ================================
// CAMPAIGNS (NEWSLETTERS)
// ================================

// Fetch all campaigns
router.get("/campaigns", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("newsletter_campaigns")
      .select(`
        *,
        template:template_id (name)
      `)
      .order("created_at", { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    console.error("Error fetching campaigns:", error.message);
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});

// Create a new campaign
router.post("/campaigns", async (req, res) => {
  const { template_id, frequency, start_date, send_time } = req.body;
  try {
    // Basic validation
    if (!template_id || !frequency || !start_date || !send_time) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // next_send_date is typically calculated based on start_date and frequency
    const next_send_date = `${start_date} ${send_time}`;

    const { data, error } = await supabase
      .from("newsletter_campaigns")
      .insert([
        { 
          template_id, 
          frequency, 
          start_date, 
          send_time,
          next_send_date
        }
      ])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    console.error("Error creating campaign:", error.message);
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

export default router;
