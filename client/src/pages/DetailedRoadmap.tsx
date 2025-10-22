import { useMemo, useState } from 'react';
import { Share, Download, Calendar, Bookmark, ChevronLeft } from 'lucide-react';

type RoadmapNode = {
  id: number;
  title: string;
  type: 'main' | 'sub';
  parent?: number;
};

type PositionedNode = RoadmapNode & {
  x: number;
  y: number;
};

type RoadmapConnection = {
  from: number;
  to: number;
};

const RoadmapPlanner = () => {
  const [roadmapTitle] = useState('Machine Learning');
  const [roadmapSubtitle] = useState('Step by step guide to becoming a Machine Learning Engineer in 2025');
  const [totalItems] = useState(150);
  const [completedItems] = useState(0);

  // Main path nodes - these form the vertical spine
  const mainPathNodes: RoadmapNode[] = [
    { id: 1, title: 'Introduction', type: 'main' },
    { id: 2, title: 'Discrete Mathematics', type: 'main' },
    { id: 3, title: 'Statistics', type: 'main' },
    { id: 4, title: 'Probability', type: 'main' },
    { id: 5, title: 'Programming Fundamentals', type: 'main' },
    { id: 6, title: 'Object Oriented Programming', type: 'main' },
    { id: 7, title: 'Essential Libraries', type: 'main' },
    { id: 8, title: 'Data Collection', type: 'main' },
    { id: 9, title: 'Data Sources', type: 'main' },
    { id: 10, title: 'Data Formats', type: 'main' },
    { id: 11, title: 'Data Cleaning', type: 'main' },
    { id: 12, title: 'Preprocessing Techniques', type: 'main' },
  ];

  // Sub-items that branch off from main path
  const [nodes] = useState<RoadmapNode[]>([
    ...mainPathNodes,
    // Introduction sub-items
    { id: 13, title: 'What is an ML Engineer?', type: 'sub', parent: 1 },
    { id: 14, title: 'ML Engineer vs AI Engineer', type: 'sub', parent: 1 },
    { id: 15, title: 'Skills and Responsibilities', type: 'sub', parent: 1 },
    
    // Discrete Mathematics sub-items
    { id: 16, title: 'Sets and Logic', type: 'sub', parent: 2 },
    { id: 17, title: 'Graph Theory', type: 'sub', parent: 2 },
    
    // Statistics sub-items
    { id: 18, title: 'Basic concepts', type: 'sub', parent: 3 },
    { id: 19, title: 'Descriptive Statistics', type: 'sub', parent: 3 },
    { id: 20, title: 'Graphs & Charts', type: 'sub', parent: 3 },
    { id: 21, title: 'Inferential Statistics', type: 'sub', parent: 3 },
    
    // Probability sub-items
    { id: 22, title: 'Random Variables, PDFs', type: 'sub', parent: 4 },
    { id: 23, title: 'Types of Distribution', type: 'sub', parent: 4 },
    { id: 24, title: 'Bayes Theorem', type: 'sub', parent: 4 },
    
    // Programming Fundamentals sub-items
    { id: 25, title: 'Basic Syntax', type: 'sub', parent: 5 },
    { id: 26, title: 'Variables and Data Types', type: 'sub', parent: 5 },
    { id: 27, title: 'Data Structures', type: 'sub', parent: 5 },
    { id: 28, title: 'Loops', type: 'sub', parent: 5 },
    { id: 29, title: 'Conditionals', type: 'sub', parent: 5 },
    { id: 30, title: 'Exceptions', type: 'sub', parent: 5 },
    { id: 31, title: 'Functions', type: 'sub', parent: 5 },
    
    // OOP sub-items
    { id: 32, title: 'Classes and Objects', type: 'sub', parent: 6 },
    { id: 33, title: 'Inheritance', type: 'sub', parent: 6 },
    { id: 34, title: 'Polymorphism', type: 'sub', parent: 6 },
    
    // Essential Libraries sub-items
    { id: 35, title: 'Numpy', type: 'sub', parent: 7 },
    { id: 36, title: 'Pandas', type: 'sub', parent: 7 },
    { id: 37, title: 'Matplotlib', type: 'sub', parent: 7 },
    { id: 38, title: 'Seaborn', type: 'sub', parent: 7 },
    
    // Data Sources sub-items
    { id: 39, title: 'Databases (SQL, No-SQL)', type: 'sub', parent: 9 },
    { id: 40, title: 'Internet/APIs', type: 'sub', parent: 9 },
    { id: 41, title: 'Mobile Apps', type: 'sub', parent: 9 },
    { id: 42, title: 'IoT', type: 'sub', parent: 9 },
    
    // Data Formats sub-items
    { id: 43, title: 'CSV', type: 'sub', parent: 10 },
    { id: 44, title: 'Excel', type: 'sub', parent: 10 },
    { id: 45, title: 'JSON', type: 'sub', parent: 10 },
    { id: 46, title: 'XML', type: 'sub', parent: 10 },
    
    // Preprocessing Techniques sub-items
    { id: 47, title: 'Data Cleaning', type: 'sub', parent: 12 },
    { id: 48, title: 'Feature Engineering', type: 'sub', parent: 12 },
    { id: 49, title: 'Feature Scaling', type: 'sub', parent: 12 },
  ]);

  const [connections] = useState<RoadmapConnection[]>([
    // Main vertical path connections
    { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
    { from: 7, to: 8 }, { from: 8, to: 9 }, { from: 9, to: 10 },
    { from: 10, to: 11 }, { from: 11, to: 12 },
    
    // Sub-item connections (from main to sub)
    { from: 1, to: 13 }, { from: 1, to: 14 }, { from: 1, to: 15 },
    { from: 2, to: 16 }, { from: 2, to: 17 },
    { from: 3, to: 18 }, { from: 3, to: 19 }, { from: 3, to: 20 }, { from: 3, to: 21 },
    { from: 4, to: 22 }, { from: 4, to: 23 }, { from: 4, to: 24 },
    { from: 5, to: 25 }, { from: 5, to: 26 }, { from: 5, to: 27 }, { from: 5, to: 28 },
    { from: 5, to: 29 }, { from: 5, to: 30 }, { from: 5, to: 31 },
    { from: 6, to: 32 }, { from: 6, to: 33 }, { from: 6, to: 34 },
    { from: 7, to: 35 }, { from: 7, to: 36 }, { from: 7, to: 37 }, { from: 7, to: 38 },
    { from: 9, to: 39 }, { from: 9, to: 40 }, { from: 9, to: 41 }, { from: 9, to: 42 },
    { from: 10, to: 43 }, { from: 10, to: 44 }, { from: 10, to: 45 }, { from: 10, to: 46 },
    { from: 12, to: 47 }, { from: 12, to: 48 }, { from: 12, to: 49 },
  ]);

  const NODE_WIDTH = 220;
  const NODE_HEIGHT = 60;
  const VERTICAL_SPACING = 120;
  const HORIZONTAL_SPACING = 300;
  const CENTER_X = 500;

  const layout = useMemo(() => {
    const positionedNodes: PositionedNode[] = [];
    let currentY = 150;

    const mainNodes = nodes.filter(n => n.type === 'main');
    
    mainNodes.forEach((node) => {
      const subCount = nodes.filter(n => n.type === 'sub' && n.parent === node.id).length;
      const leftCount = Math.ceil(subCount / 2);
      const rightCount = Math.floor(subCount / 2);
      const maxSideCount = Math.max(leftCount, rightCount);
      
      const minSpacing = maxSideCount * 75 + 50;
      const spacing = Math.max(VERTICAL_SPACING, minSpacing);
      
      positionedNodes.push({
        ...node,
        x: CENTER_X,
        y: currentY,
      });
      
      currentY += spacing;
    });

    nodes.forEach((node) => {
      if (node.type === 'sub' && node.parent) {
        const parent = positionedNodes.find(n => n.id === node.parent);
        if (parent) {
          const siblings = nodes.filter(
            n => n.type === 'sub' && n.parent === node.parent
          );
          
          const currentIndex = siblings.findIndex(n => n.id === node.id);
          const totalSiblings = siblings.length;
          const leftCount = Math.ceil(totalSiblings / 2);
          
          let x, y;
          
          if (currentIndex < leftCount) {
            x = parent.x - HORIZONTAL_SPACING;
            y = parent.y - ((leftCount - 1) * 37.5) + (currentIndex * 75);
          } else {
            const rightIndex = currentIndex - leftCount;
            const rightCount = totalSiblings - leftCount;
            x = parent.x + HORIZONTAL_SPACING;
            y = parent.y - ((rightCount - 1) * 37.5) + (rightIndex * 75);
          }
          
          positionedNodes.push({
            ...node,
            x: x,
            y: y,
          });
        }
      }
    });

    const maxY = Math.max(...positionedNodes.map(n => n.y)) + 200;
    const minY = Math.min(...positionedNodes.map(n => n.y)) - 100;
    const svgWidth = CENTER_X + HORIZONTAL_SPACING + NODE_WIDTH + 200;
    const svgHeight = maxY - minY;
    positionedNodes.forEach(node => {
      node.y = node.y - minY + 100;
    });

    return { positionedNodes, svgWidth, svgHeight };
  }, [nodes]);

  const positionedNodeMap = useMemo(() => {
    const map = new Map<number, PositionedNode>();
    layout.positionedNodes.forEach((node) => {
      map.set(node.id, node);
    });
    return map;
  }, [layout.positionedNodes]);

  const drawConnection = (from: number, to: number) => {
    const fromNode = positionedNodeMap.get(from);
    const toNode = positionedNodeMap.get(to);

    if (!fromNode || !toNode) return null;

    const x1 = fromNode.x + NODE_WIDTH / 2;
    const y1 = fromNode.y + NODE_HEIGHT / 2;
    const x2 = toNode.x + NODE_WIDTH / 2;
    const y2 = toNode.y + NODE_HEIGHT / 2;

    const isMainToMain = fromNode.type === 'main' && toNode.type === 'main';
    const isDotted = fromNode.type === 'main' && toNode.type === 'sub';

    if (isMainToMain) {
      return (
        <line
          key={`${from}-${to}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#3b82f6"
          strokeWidth="3"
        />
      );
    }

    // Curved connection for sub-items
    const midX = (x1 + x2) / 2;
    const path = `M ${x1} ${y1} Q ${midX} ${y1} ${x2} ${y2}`;

    return (
      <path
        key={`${from}-${to}`}
        d={path}
        stroke={isDotted ? '#60a5fa' : '#3b82f6'}
        strokeWidth="2"
        strokeDasharray={isDotted ? '5,5' : '0'}
        fill="none"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ChevronLeft size={20} />
                <span>All Roadmaps</span>
              </button>
              <Bookmark size={20} className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Calendar size={18} />
                <span>Schedule Learning Time</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                <Download size={18} />
                <span>Download</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500">
                <Share size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold mb-3">{roadmapTitle}</h1>
        <p className="text-gray-600 text-lg mb-6">{roadmapSubtitle}</p>
        <div className="flex gap-6 border-b mb-6">
          <button className="pb-3 px-1 border-b-2 border-black font-medium">
            Roadmap
          </button>
          <button className="pb-3 px-1 text-gray-500 hover:text-gray-700">
            AI Tutor
          </button>
          <div className="ml-auto flex items-center gap-2">
            <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">
              Personalize
            </button>
            <span className="px-2 py-1 text-xs bg-yellow-200 text-yellow-800 rounded">New</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-yellow-300 text-yellow-900 font-medium rounded">
              {Math.round((completedItems / totalItems) * 100)}% DONE
            </span>
            <span className="text-gray-700">{completedItems} of {totalItems} Done</span>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Share size={16} />
              Share Progress
            </button>
            <button className="text-gray-600 hover:text-gray-900">Track Progress</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 space-y-4">
            <div className="border rounded-lg p-4 bg-white">
              <h3 className="font-semibold mb-3">Pre-requisites</h3>
              <div className="bg-gray-200 p-3 rounded text-center text-sm">
                Python Roadmap
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-white">
              <h3 className="font-semibold mb-3">Related Roadmaps</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked readOnly className="rounded" />
                  <span>AI Engineer Roadmap</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked readOnly className="rounded" />
                  <span>MLOps Roadmap</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked readOnly className="rounded" />
                  <span>AI and Data Scientist Roadmap</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-yellow-100 border border-yellow-300 p-3 rounded text-sm">
                Derivatives, Partial Derivatives
              </div>
              <div className="bg-yellow-100 border border-yellow-300 p-3 rounded text-sm">
                Chain rule of derivation
              </div>
              <div className="bg-yellow-100 border border-yellow-300 p-3 rounded text-sm">
                Gradient Jacobian, Hessian
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white border rounded-lg px-8 py-1 overflow-auto" style={{ maxHeight: '1200px' }}>

            <svg 
              width={layout.svgWidth} 
              height={layout.svgHeight} 
              className="mx-auto"
              style={{ minWidth: '1000px' }}
            >
              <g>
                {connections.map(conn => drawConnection(conn.from, conn.to))}
              </g>
              <g>
                {layout.positionedNodes.map(node => (
                  <g key={node.id}>
                    <rect
                      x={node.x}
                      y={node.y}
                      width={NODE_WIDTH}
                      height={NODE_HEIGHT}
                      rx="8"
                      fill={node.type === 'main' ? '#fde047' : '#fef3c7'}
                      stroke={node.type === 'main' ? '#facc15' : '#fbbf24'}
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    <text
                      x={node.x + NODE_WIDTH / 2}
                      y={node.y + NODE_HEIGHT / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-sm font-medium select-none pointer-events-none"
                      fill="#000"
                    >
                      {node.title.length > 25 
                        ? node.title.substring(0, 25) + '...' 
                        : node.title}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* AI Tutor Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 flex items-center gap-2">
          <span className="text-yellow-400">✨</span>
          <span className="font-medium">AI Tutor</span>
          <span className="text-gray-400">Have a question? Type here</span>
        </button>
      </div>
    </div>
  );
};

export default RoadmapPlanner;