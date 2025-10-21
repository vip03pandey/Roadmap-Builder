import { create } from "zustand";

type Category = {
  id: number;
  name: string;
};

type Roadmap = {
  id: number;
  name: string;
  type: string;
};

export type TabType = "ROLE_BASED" | "SKILL_BASED";

interface RoleBasedResponse {
  selectedCategory: string;
  categories: Category[];
  roadmaps: Roadmap[];
}

interface SkillsResponse {
  skills: Roadmap[];
}

interface RoadmapsState {
  categories: string[];
  roleRoadmaps: Roadmap[];
  skillRoadmaps: Roadmap[];
  selectedCategory: string;
  activeTab: TabType;
  roleLoading: boolean;
  skillLoading: boolean;
  error: string | null;
  setSelectedCategory: (category: string) => void;
  setActiveTab: (tab: TabType) => void;
  fetchRoleRoadmaps: (category?: string) => Promise<void>;
  fetchSkillRoadmaps: () => Promise<void>;
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/api").replace(/\/$/, "");

export const useRoadmapsStore = create<RoadmapsState>((set, get) => ({
  categories: [],
  roleRoadmaps: [],
  skillRoadmaps: [],
  selectedCategory: "All Roadmaps",
  activeTab: "ROLE_BASED",
  roleLoading: false,
  skillLoading: false,
  error: null,
  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
  },
  setActiveTab: (tab) => {
    set({ activeTab: tab });
  },
  fetchRoleRoadmaps: async (category) => {
    const targetCategory = category ?? get().selectedCategory ?? "All Roadmaps";
    set({ roleLoading: true, error: null });
    try {
      const params = new URLSearchParams();
      if (targetCategory) {
        params.set("category", targetCategory);
      }
      const response = await fetch(`${API_BASE_URL}/roadmaps${params.toString() ? `?${params.toString()}` : ""}`);
      if (!response.ok) {
        throw new Error("Failed to fetch role based roadmaps");
      }
      const data: RoleBasedResponse = await response.json();
      const categoryNames = Array.isArray(data.categories)
        ? data.categories.map((item) => item.name)
        : [];
      set({
        categories: categoryNames,
        selectedCategory: data.selectedCategory ?? targetCategory,
        roleRoadmaps: Array.isArray(data.roadmaps) ? data.roadmaps : [],
        roleLoading: false,
        error: null,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to fetch role based roadmaps";
      set({ roleLoading: false, error: message });
    }
  },
  fetchSkillRoadmaps: async () => {
    if (get().skillRoadmaps.length > 0) {
      return;
    }
    set({ skillLoading: true, error: null });
    try {
      const response = await fetch(`${API_BASE_URL}/roadmaps/skills`);
      if (!response.ok) {
        throw new Error("Failed to fetch skill based roadmaps");
      }
      const data: SkillsResponse = await response.json();
      set({
        skillRoadmaps: Array.isArray(data.skills) ? data.skills : [],
        skillLoading: false,
        error: null,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to fetch skill based roadmaps";
      set({ skillLoading: false, error: message });
    }
  },
}));
