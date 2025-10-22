import { useEffect } from "react";
import { Bookmark } from "lucide-react";
import { useRoadmapsStore, type TabType } from "../store/roadmapsStore";
import { useNavigate } from "react-router-dom";

const tabs: { value: TabType; label: string }[] = [
  { value: "ROLE_BASED", label: "ROLE BASED ROADMAPS" },
  { value: "SKILL_BASED", label: "SKILL BASED ROADMAPS" },
];

export function RoadmapsGrid() {
  const navigate = useNavigate();
  const {
    categories,
    roleRoadmaps,
    skillRoadmaps,
    selectedCategory,
    activeTab,
    roleLoading,
    skillLoading,
    error,
    setSelectedCategory,
    setActiveTab,
    fetchRoleRoadmaps,
    fetchSkillRoadmaps,
  } = useRoadmapsStore();

  useEffect(() => {
    void fetchRoleRoadmaps();
  }, [fetchRoleRoadmaps]);

  const categoryList = categories.length > 0 ? categories : [selectedCategory];
  const isRoleTab = activeTab === "ROLE_BASED";
  const currentRoadmaps = isRoleTab ? roleRoadmaps : skillRoadmaps;
  const isLoading = isRoleTab ? roleLoading : skillLoading;

  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) return;
    setSelectedCategory(category);
    void fetchRoleRoadmaps(category);
  };

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    if (tab === "ROLE_BASED") {
      void fetchRoleRoadmaps(selectedCategory);
    } else {
      void fetchSkillRoadmaps();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Categories */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
              <nav className="space-y-1">
                {categoryList.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
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
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => handleTabChange(tab.value)}
                  className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                    activeTab === tab.value
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.value && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Roadmaps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentRoadmaps.map((roadmap) => (
                <div
                  key={roadmap.id ?? roadmap.name}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
                  onClick={() => navigate(`/roadmap-planner/${roadmap.id}`)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      {roadmap.name}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {isLoading && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
            )}

            {!isLoading && error && (
              <div className="text-center py-12 text-red-500">
                {error}
              </div>
            )}

            {!isLoading && currentRoadmaps.length === 0 && !error && (
              <div
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                      Loading...
                    </span>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}