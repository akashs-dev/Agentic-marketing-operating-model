import React, { useState } from 'react';
import Sidebar from './Sidebar';
import WorkflowDiagram from './WorkflowDiagram';
import { RefreshCw } from 'lucide-react';

const MarketingDashboard = () => {
  const [isAgenticMode, setIsAgenticMode] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#f8f9fc] overflow-hidden font-sans">
      <Sidebar />
      
      <main className="flex-1 relative overflow-hidden bg-dot-pattern flex flex-col">
        {/* Top Header Controls */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
          <div className="bg-white rounded-full shadow-sm px-4 py-2 flex items-center gap-2 border border-gray-100">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Process Time</span>
            <span className="text-teal-500 font-bold">1 Week</span>
          </div>
          
          <div className="bg-white rounded-full shadow-sm p-1 flex items-center border border-gray-100">
            <button 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${!isAgenticMode ? 'bg-[#5b32f9] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setIsAgenticMode(false)}
            >
              Legacy Mode
            </button>
            <button 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${isAgenticMode ? 'bg-[#5b32f9] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setIsAgenticMode(true)}
            >
              Agentic Mode
            </button>
          </div>
          
          <button className="bg-white rounded-full shadow-sm p-2.5 border border-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <RefreshCw size={18} />
          </button>
        </div>

        {/* Workflow Diagram Area */}
        <div className="flex-1 w-full h-full overflow-auto relative">
          <WorkflowDiagram isAgenticMode={isAgenticMode} />
        </div>
      </main>
    </div>
  );
};

export default MarketingDashboard;
