import { useState } from "react";
import { Bookmark } from "lucide-react";

export function RoadmapsGrid() {
  const categories = [
    "All Roadmaps",
    "Absolute Beginners",
    "Web Development",
    "Frameworks",
    "Languages / Platforms",
    "DevOps",
    "Mobile Development",
    "Databases",
    "Computer Science",
    "Machine Learning",
    "Management",
    "Game Development",
    "Design",
    "Blockchain",
    "Cyber Security"
  ] as const;

  type Category = typeof categories[number];

  const [selectedCategory, setSelectedCategory] = useState<Category>("All Roadmaps");
  const [activeTab, setActiveTab] = useState("ROLE BASED ROADMAPS");

  const roleBasedRoadmaps: Record<Category, string[]> = {
    "All Roadmaps": [
      "Frontend Beginner", "Backend Beginner", "DevOps Beginner",
      "Frontend", "Backend", "Full Stack",
      "API Design", "QA", "DevOps",
      "Android", "iOS", "PostgreSQL",
      "Software Architect", "Technical Writer", "DevRel Engineer",
      "Machine Learning", "AI and Data Scientist", "AI Engineer",
      "AI Agents", "Data Analyst", "BI Analyst",
      "Data Engineer", "MLOps", "Product Manager",
      "Engineering Manager", "Client Side Game Dev.", "Server Side Game Dev.",
      "UX Design", "Blockchain", "Cyber Security"
    ],
    "Absolute Beginners": [
      "Frontend Beginner", "Backend Beginner", "DevOps Beginner"
    ],
    "Web Development": [
      "Frontend", "Backend", "Full Stack", "API Design"
    ],
    "Frameworks": [
      "React", "Angular", "Vue", "Next.js", "Spring Boot"
    ],
    "Languages / Platforms": [
      "JavaScript", "TypeScript", "Python", "Java", "Go", "Rust", "C++", "PHP", "Kotlin"
    ],
    "DevOps": [
      "DevOps", "Docker", "Kubernetes", "AWS", "Terraform", "Linux"
    ],
    "Mobile Development": [
      "Android", "iOS", "React Native", "Flutter"
    ],
    "Databases": [
      "PostgreSQL", "MongoDB", "Redis", "SQL"
    ],
    "Computer Science": [
      "Computer Science", "Data Structures", "Design and Architecture", "System Design"
    ],
    "Machine Learning": [
      "Machine Learning", "AI and Data Scientist", "AI Engineer", "AI Agents", "AI Red Teaming", "Prompt Engineering"
    ],
    "Management": [
      "Product Manager", "Engineering Manager"
    ],
    "Game Development": [
      "Client Side Game Dev.", "Server Side Game Dev."
    ],
    "Design": [
      "UX Design", "Design System"
    ],
    "Blockchain": [
      "Blockchain"
    ],
    "Cyber Security": [
      "Cyber Security"
    ]
  };

  const skillBasedRoadmaps = [
    "GraphQL", "Git and GitHub", "React",
    "Vue", "Angular", "Next.js",
    "Spring Boot", "ASP.NET Core", "HTML",
    "CSS", "JavaScript", "Kotlin",
    "TypeScript", "Node.js", "PHP",
    "C++", "Go", "Rust",
    "Python", "Java", "SQL",
    "Docker", "Kubernetes", "AWS",
    "Cloudflare", "Linux", "Terraform",
    "React Native", "Flutter", "MongoDB",
    "Redis", "Computer Science", "Data Structures",
    "System Design", "Design and Architecture", "Code Review",
    "AI Red Teaming", "Prompt Engineering", "Design System"
  ];

  const currentRoadmaps = activeTab === "ROLE BASED ROADMAPS" 
    ? roleBasedRoadmaps[selectedCategory] || []
    : skillBasedRoadmaps;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Categories */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-right px-4 py-2.5 rounded-lg transition-colors text-sm ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content - Roadmaps Grid */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-6 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("ROLE BASED ROADMAPS")}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === "ROLE BASED ROADMAPS"
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                ROLE BASED ROADMAPS
                {activeTab === "ROLE BASED ROADMAPS" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("SKILL BASED ROADMAPS")}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === "SKILL BASED ROADMAPS"
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                SKILL BASED ROADMAPS
                {activeTab === "SKILL BASED ROADMAPS" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                )}
              </button>
            </div>

            {/* Roadmaps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentRoadmaps.map((roadmap, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      {roadmap}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {currentRoadmaps.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No roadmaps found for this category
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}