import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./layout/PageLayout";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    {/* <Route index element={<Home />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
