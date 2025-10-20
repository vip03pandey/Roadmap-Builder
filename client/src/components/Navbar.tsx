import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Zap, Map, Sparkles, Globe } from "lucide-react";

export  function NavbarDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoadmapsOpen, setIsRoadmapsOpen] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);
  const roadmapsRef = useRef<HTMLDivElement | null>(null);
  const aiTutorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (roadmapsRef.current && event.target instanceof Node && !roadmapsRef.current.contains(event.target)) {
        setIsRoadmapsOpen(false);
      }
      if (aiTutorRef.current && event.target instanceof Node && !aiTutorRef.current.contains(event.target)) {
        setIsAITutorOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const roadmapOptions = [
    {
      icon: <Map className="w-5 h-5" />,
      title: "Official Roadmaps",
      description: "Made by subject matter experts",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "AI Roadmaps",
      description: "Generate roadmaps with AI",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Community Roadmaps",
      description: "Made by community members",
    },
  ];

  return (
    <div className="w-full bg-[#0a0e1a] text-white">
      {/* Yellow top bar */}
      <div className="w-full h-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                  <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" />
                </svg>
              </div>
              <button className="text-gray-400 hover:text-white lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Roadmaps Dropdown */}
              <div className="relative" ref={roadmapsRef}>
                <button 
                  onClick={() => setIsRoadmapsOpen(!isRoadmapsOpen)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                    isRoadmapsOpen 
                      ? 'bg-blue-600 text-white border-2 border-blue-400' 
                      : 'text-gray-300 hover:text-white border-2 border-transparent'
                  }`}
                >
                  Roadmaps
                  <ChevronDown className={`w-4 h-4 transition-transform ${isRoadmapsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isRoadmapsOpen && (
                  <div className="absolute top-full mt-3 left-0 w-80 bg-[#1e293b] rounded-xl shadow-2xl border border-gray-700 overflow-hidden z-50">
                    {roadmapOptions.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setIsRoadmapsOpen(false)}
                        className="flex items-start gap-4 w-full p-4 hover:bg-[#2d3b52] transition-colors text-left border-b border-gray-700 last:border-b-0"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#374151] flex items-center justify-center text-gray-300">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white mb-1">{option.title}</div>
                          <div className="text-sm text-gray-400">{option.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* AI Tutor Dropdown */}
              <div className="relative" ref={aiTutorRef}>
                <button 
                  onClick={() => setIsAITutorOpen(!isAITutorOpen)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                >
                  AI Tutor
                  <ChevronDown className={`w-4 h-4 transition-transform ${isAITutorOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                <Zap className="w-4 h-4 fill-yellow-400" />
                Upgrade to Pro
              </button>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 transition-colors">
              <Zap className="w-4 h-4" />
              <span>1</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-medium">
              Login
              <ChevronDown className="w-4 h-4" />
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-4 border-t border-gray-800 pt-4">
            <div className="space-y-2">
              <div className="text-sm text-gray-400 font-semibold px-2 mb-3">Roadmaps</div>
              {roadmapOptions.map((option, idx) => (
                <button
                  key={idx}
                  className="flex items-start gap-3 w-full p-3 hover:bg-[#1e293b] rounded-lg transition-colors text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#374151] flex items-center justify-center text-gray-300">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white text-sm">{option.title}</div>
                    <div className="text-xs text-gray-400">{option.description}</div>
                  </div>
                </button>
              ))}
            </div>

            <button className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2 px-2">
              AI Tutor
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 w-full text-yellow-400 hover:text-yellow-300 py-2 px-2">
              <Zap className="w-4 h-4 fill-yellow-400" />
              Upgrade to Pro
            </button>
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-purple-600/20 text-purple-300 hover:bg-purple-600/30">
                <Zap className="w-4 h-4" />
                <span>1</span>
              </button>
              <button className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-medium">
                <span>Login</span>
                <div className="flex items-center gap-2">
                  <ChevronDown className="w-4 h-4" />
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}