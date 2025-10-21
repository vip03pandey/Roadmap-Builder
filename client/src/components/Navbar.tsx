import { useState, useRef, useEffect } from "react";
import {ChevronDown, Zap , LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function NavbarDemo() {
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && event.target instanceof Node && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
    navigate('/');
    window.location.reload(); 
  };

  const getUserName = () => {
    if (!user) return 'Guest';
    return (
      user.user_metadata?.name ||
      user.user_metadata?.display_name ||
      user.user_metadata?.full_name || 
      user.user_metadata?.given_name || 
      user.email?.split('@')[0] ||
      'User'
    );
  };

  return (
    <div className="w-full bg-[#0a0e1a] text-white">
      <div className="w-full h-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md p-2 cursor-pointer" onClick={() => navigate('/')}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                  <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" />
                </svg>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-gray-300 hover:text-white transition-colors">
                Roadmaps
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">
                AI Tutor
              </button>
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
            
            {/* User Menu or Login Button */}
            {loading ? (
              <div className="px-4 py-2 text-gray-400">Loading...</div>
            ) : user ? (
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                    {getUserName()?.[0]?.toUpperCase() || '?'}
                  </div>
                  <span className="max-w-[120px] truncate">
                    {getUserName()}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute top-full mt-2 right-0 w-64 bg-[#1e293b] rounded-xl shadow-2xl border border-gray-700 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-700">
                      <div className="font-medium text-white">
                        {getUserName()}
                      </div>
                      <div className="text-sm text-gray-400 truncate">
                        {user.email || 'No email'}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        navigate('/dashboard');
                      }}
                      className="flex items-center gap-3 w-full p-3 hover:bg-[#2d3b52] transition-colors text-left"
                    >
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-white">Dashboard</span>
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-3 w-full p-3 hover:bg-[#2d3b52] transition-colors text-left text-red-400 hover:text-red-300 border-t border-gray-700"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-medium"
                onClick={() => navigate('/sign-in')}
              >
                Login
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}