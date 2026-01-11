import { create } from "zustand";

export interface Template {
    id: number;
    name: string;
    description: string;
    subject_template: string;
    text_template: string;
    html_content: string;
    created_at: string;
}

export interface Newsletter {
    id: number;
    template_id: number;
    frequency: string;
    start_date: string;
    send_time: string;
    next_send_date: string;
    template?: { name: string };
    created_at: string;
}

interface NewsletterState {
    templates: Template[];
    newsletters: Newsletter[];
    loading: boolean;
    error: string | null;
    fetchTemplates: () => Promise<void>;
    fetchNewsletters: () => Promise<void>;
    createTemplate: (template: Partial<Template>) => Promise<boolean>;
    createNewsletter: (newsletter: Partial<Newsletter>) => Promise<boolean>;
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/api").replace(/\/$/, "");

export const useNewsletterStore = create<NewsletterState>((set, get) => ({
    templates: [],
    newsletters: [],
    loading: false,
    error: null,

    fetchTemplates: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${API_BASE_URL}/newsletters/templates`);
            if (!response.ok) throw new Error("Failed to fetch templates");
            const data = await response.json();
            set({ templates: data, loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },

    fetchNewsletters: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`${API_BASE_URL}/newsletters/campaigns`);
            if (!response.ok) throw new Error("Failed to fetch newsletters");
            const data = await response.json();
            set({ newsletters: data, loading: false });
        } catch (error) {
            set({ error: (error as Error).message, loading: false });
        }
    },

    createTemplate: async (template) => {
        try {
            const response = await fetch(`${API_BASE_URL}/newsletters/templates`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(template),
            });
            if (response.ok) {
                await get().fetchTemplates();
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error creating template:", error);
            return false;
        }
    },

    createNewsletter: async (newsletter) => {
        try {
            const response = await fetch(`${API_BASE_URL}/newsletters/campaigns`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newsletter),
            });
            if (response.ok) {
                await get().fetchNewsletters();
                return true;
            }
            return false;
        } catch (error) {
            console.error("Error creating newsletter:", error);
            return false;
        }
    },
}));
