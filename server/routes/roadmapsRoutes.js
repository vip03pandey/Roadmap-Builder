import express from 'express';
import { supabase } from '../config/supabaseClient.js';
import { getRedisClient } from '../config/redisClient.js';
const router = express.Router();

router.get("/", async (req, res) => {
  const category = req.query.category || "All Roadmaps";
  const normalizedCategory = category.trim().toLowerCase() || "all roadmaps";
  const cacheKey = `roadmaps:${normalizedCategory}`;

  let redis;
  try {
    redis = await getRedisClient();
  } catch (error) {
    console.error("Redis connection error:", error.message);
  }

  if (redis) {
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
    } catch (error) {
      console.error("Redis get error:", error.message);
    }
  }

  try {
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("id, name")
      .order("id");

    if (categoriesError) throw categoriesError;
    if (category === "All Roadmaps") {
      const { data: roadmaps, error: roadmapsError } = await supabase
        .from("roadmaps")
        .select("id, name, type")
        .eq("type", "ROLE_BASED")
        .order("id");

      if (roadmapsError) throw roadmapsError;

      const responsePayload = {
        selectedCategory: category,
        categories,
        roadmaps,
      };

      if (redis) {
        try {
          await redis.set(cacheKey, JSON.stringify(responsePayload));
        } catch (error) {
          console.error("Redis set error:", error.message);
        }
      }

      return res.json(responsePayload);
    }
    const { data: categoryData, error: catError } = await supabase
      .from("categories")
      .select("id")
      .eq("name", category)
      .single();

    if (catError || !categoryData) throw new Error("Category not found");

    const categoryId = categoryData.id;

    const { data: roadmaps, error: roadmapsError } = await supabase
      .from("roadmaps")
      .select("id, name, type, roadmap_category_map!inner(category_id)")
      .eq("roadmap_category_map.category_id", categoryId)
      .order("id");

    if (roadmapsError) throw roadmapsError;

    const responsePayload = {
      selectedCategory: category,
      categories,
      roadmaps,
    };

    if (redis) {
      try {
        await redis.set(cacheKey, JSON.stringify(responsePayload));
      } catch (error) {
        console.error("Redis set error:", error.message);
      }
    }

    res.json(responsePayload);
  } catch (error) {
    console.error("Error fetching roadmaps:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.get("/skills", async (req, res) => {
    const cacheKey='skills';
      let redis;
      try {
        redis = await getRedisClient();
      } catch (error) {
        console.error("Redis connection error:", error.message);
      }

      if (redis) {
        try {
          const cached = await redis.get(cacheKey);
          if (cached) {
            return res.json(JSON.parse(cached));
          }
        } catch (error) {
          console.error("Redis get error:", error.message);
        }
      }

      const {data:skills,error:skillsError}=await supabase.from('roadmaps').select('*').eq('type','SKILL_BASED').order('id');

      if (skillsError) throw skillsError;

      const responsePayload={
        skills
      }
       if (redis) {
      try {
        await redis.set(cacheKey, JSON.stringify(responsePayload));
      } catch (error) {
        console.error("Redis set error:", error.message);
      }
    }

    res.json(responsePayload);

})






export default router;