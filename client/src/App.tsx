import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import {Home} from "./components/Home";
import {SignIn} from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
import RoadmapPlanner from "./pages/DetailedRoadmap"

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="roadmap-planner/:roadmapId" element={<RoadmapPlanner />} />
                </Route>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
