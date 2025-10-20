import {RoadmapsGrid}  from "./RoadMaps";

export function Home(){
    return (
        <div className="w-full h-screen">
            <div className="bg-white p-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Developer Roadmaps</h1>
                <p className="text-lg mt-2">Unlock your full potential with our comprehensive roadmap platform.</p>
                <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">Get Started</button>
            </div>
            <RoadmapsGrid />
        </div>
    )
}