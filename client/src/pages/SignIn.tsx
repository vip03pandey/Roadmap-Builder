import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "../lib/supabaseClient";

interface Message {
    type: string;
    text: string;
}

const supabase = createClient();

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState<Message | null>(null);
    const [message, setMessage] = useState<Message | null>(null);
    const navigate = useNavigate();

    async function handleAuth(e:any) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setMessage(null);

        if (isSignUp) {
            const trimmedName = name.trim();
            if (!trimmedName) {
                setIsLoading(false);
                setError({ type: "error", text: "Please enter your full name." });
                return;
            }

            const { error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: trimmedName,
                        display_name: trimmedName,
                        name: trimmedName,
                    },
                },
            });

            if (signUpError) {
                setIsLoading(false);
                setError({ type: "error", text: signUpError.message });
                return;
            }

            setIsLoading(false);
            setMessage({ type: "success", text: "Check your email for the confirmation link!" });
            return;
        }

        const { error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (signInError) {
            setIsLoading(false);
            setError({ type: "error", text: signInError.message });
            return;
        }

        setIsLoading(false);
        setMessage({ type: "success", text: "Login successful!" });
        navigate("/");
    }

    const handleAuthModeSwitch = () => {
        setIsSignUp(!isSignUp);
        setError(null);
        setMessage(null);
        if (!isSignUp) {
            setName("");
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#0f1419] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl mb-3">
                        MapWise
                    </h1>
                    <p className="text-lg text-gray-400">
                        {isSignUp ? "Create your account" : "Sign in to your account"}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Unlock your full potential with our comprehensive roadmap platform.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-[#1a2332] border border-gray-800 rounded-xl p-8 space-y-6">
                    <form className="space-y-5" onSubmit={handleAuth}>
                        
                        {error && (
                            <div className="bg-red-900/30 text-red-400 text-sm px-4 py-3 rounded-lg border border-red-800">
                                {error.text}
                            </div>
                        )}
                        {message && (
                            <div className="bg-green-900/30 text-green-400 text-sm px-4 py-3 rounded-lg border border-green-800">
                                {message.text}
                            </div>
                        )}

                        {/* Name Input - Only show during signup */}
                        {isSignUp && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required={isSignUp}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0f1419] text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        )}

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0f1419] text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0f1419] text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:outline-none transition"
                                placeholder="Enter password"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-4 rounded-lg font-semibold transition shadow-lg ${
                                isLoading
                                    ? "bg-gray-700 cursor-not-allowed text-gray-400"
                                    : "bg-purple-600 hover:bg-purple-700 text-white"
                            }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3 1.1 5.8 3 7.9l3-2.6z"
                                        />
                                    </svg>
                                    {isSignUp ? "Creating..." : "Signing in..."}
                                </div>
                            ) : isSignUp ? (
                                "Create Account"
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Switch Auth Mode */}
                    <div className="mt-4 text-center">
                        <button
                            type="button"
                            onClick={handleAuthModeSwitch}
                            className="text-sm text-gray-400 hover:text-purple-400 underline font-medium transition"
                        >
                            {isSignUp
                                ? "Already have an account? Sign in"
                                : "Don't have an account? Sign up"}
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-sm text-gray-500">
                    <p>© 2024 Developer Roadmaps. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}