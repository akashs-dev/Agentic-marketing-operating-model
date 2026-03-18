import React from 'react';
import AgentCard from './AgentCard';
import { Users, Target, Zap, BarChart2 } from 'lucide-react';

const WorkflowDiagram = ({ isAgenticMode }) => {
  // Logic for the connected bezier curves
  // To keep it simple, we use a static SVG background with absolute positioning for lines.
  const cards = [
    {
      id: 'audience',
      icon: Users,
      title: 'Audience Strategy Lead',
      subtitle: 'RTCDP',
      copilotText: 'Segmentation Agent proposes cohorts (S1/S2/S3), suppression logic, and propensity-based models using RTCDP and banking attributes.',
      humanText: 'Reviews/adjusts segmentation logic and approves targeting definitions.',
      themeColor: '#5b32f9',
      style: { top: '80px', left: '10%' }
    },
    {
      id: 'campaign',
      icon: Zap,
      title: 'Campaign Strategy Lead',
      subtitle: 'ADOBE CAMPAIGN',
      copilotText: 'Campaign Agent generates omnichannel journey blueprint (mix: cadence, trigger events) based on performance history.',
      humanText: 'Adjusts frequency, timing, and offers.',
      themeColor: '#5b32f9',
      style: { top: '420px', left: '10%' }
    },
    {
      id: 'analytics',
      icon: BarChart2,
      title: 'Analytics Strategy Lead',
      subtitle: 'CJA',
      copilotText: 'Insights Agent provides attribution insights, funnel diagnostics, and anomaly detection.',
      humanText: 'Defines measurement frameworks and dashboards goals.',
      themeColor: '#5b32f9',
      style: { top: '740px', left: '10%' }
    },
    {
      id: 'personalisation',
      icon: Target,
      title: 'Personalisation Strategy Lead',
      subtitle: 'ADOBE TARGET',
      copilotText: 'Personalisation Agent recommends A/B test ideas and rules based on behavioral signals from Adobe Analytics and CJA.',
      humanText: 'Approves personalization experiments.',
      actionButton: 'Approve & Push',
      themeColor: '#5b32f9',
      style: { top: '80px', left: '55%' }
    }
  ];

  return (
    <div className="relative w-[1200px] h-[1100px] p-10">
      {/* Flow Lines SVG Background */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d1d5db" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        
        {/* Sample connection lines to mimic the image */}
        {/* Input lines on the left */}
        <path d="M 0,200 C 50,200 80,180 120,180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        <path d="M 0,400 C 50,400 80,180 120,180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        <path d="M 0,600 C 50,600 80,180 120,180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        
        <path d="M 0,550 C 50,550 80,500 120,500" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        <path d="M 0,850 C 50,850 80,820 120,820" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        
        {/* Cross connection lines */}
        <path d="M 460,200 C 550,200 580,200 660,200" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        <path d="M 460,500 C 550,500 580,280 660,280" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
        <path d="M 460,820 C 600,820 620,350 780,350" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
      </svg>

      {/* Cards Overlay */}
      <div className="relative w-full h-full">
        {cards.map(card => (
          <div key={card.id} className="absolute" style={card.style}>
            <AgentCard
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              copilotText={card.copilotText}
              humanText={card.humanText}
              actionButton={card.actionButton}
              themeColor={card.themeColor}
            />
          </div>
        ))}
      </div>
      
      {/* Non-Agentic Mode overlay if toggled off */}
      {!isAgenticMode && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legacy Workflow</h2>
            <p className="text-gray-600 mb-6">In legacy mode, tasks take significantly longer without Agent Co-Pilots. Switch to Agentic Mode to view the optimized flow.</p>
            <button 
              className="bg-[#5b32f9] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#4722d4] transition-colors"
              onClick={() => document.querySelector('button:contains("Agentic Mode")')?.click()}
            >
              Switch to Agentic Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowDiagram;
