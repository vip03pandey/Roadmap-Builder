import { Linkedin, Youtube, Cookie } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top navigation links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm mb-16">
          <a href="#" className="hover:text-white transition-colors">Roadmaps</a>
          <a href="#" className="hover:text-white transition-colors">Best Practices</a>
          <a href="#" className="hover:text-white transition-colors">Guides</a>
          <a href="#" className="hover:text-white transition-colors">Videos</a>
          <a href="#" className="hover:text-white transition-colors">FAQs</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </nav>

        {/* Main footer content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Section - roadmap.sh */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-1.5 w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3C3.89543 3 3 3.89543 3 5V10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10V5C12 3.89543 11.1046 3 10 3H5Z" fill="black"/>
                  <path d="M14 3C12.8954 3 12 3.89543 12 5V10C12 11.1046 12.8954 12 14 12H19C20.1046 12 21 11.1046 21 10V5C21 3.89543 20.1046 3 19 3H14Z" fill="black"/>
                  <path d="M3 14C3 12.8954 3.89543 12 5 12H10C11.1046 12 12 12.8954 12 14V19C12 20.1046 11.1046 21 10 21H5C3.89543 21 3 20.1046 3 19V14Z" fill="black"/>
                  <circle cx="16.5" cy="16.5" r="4.5" fill="black"/>
                </svg>
              </div>
              <span className="font-semibold text-lg text-white">roadmap.sh</span>
              <span className="text-xs">by</span>
              <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                @vipul
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Community created roadmaps, best practices, projects, articles, resources and journeys to help you choose your path and grow in your career.
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>© roadmap.sh</span>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>·</span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-[#2d3748] text-gray-300 text-sm px-4 py-2 rounded-md hover:bg-[#374151] transition-colors">
              <Cookie className="w-4 h-4" />
              Cookie Settings
            </button>
          </div>

          {/* Right Section - The New Stack */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">
              <span className="text-cyan-400">THE</span>
              <span className="text-pink-500">NEW</span>
              <span className="text-cyan-400">STACK</span>
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              The top DevOps resource for Kubernetes, cloud-native computing, and large-scale development and deployment.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>DevOps</span>
              <span>·</span>
              <span>Kubernetes</span>
              <span>·</span>
              <span>Cloud-Native</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}