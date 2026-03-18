import React from 'react';
import { Bot, User } from 'lucide-react';

const AgentCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  copilotText, 
  humanText, 
  actionButton,
  themeColor = '#5b32f9'
}) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 w-[340px] overflow-hidden flex flex-col relative z-10 transition-transform duration-300 hover:-translate-y-1">
      {/* Top Section */}
      <div className="p-6 bg-[#f8f9ff]">
        <div className="flex items-start gap-4">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
            style={{ backgroundColor: themeColor }}
          >
            <Icon size={20} color="white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 leading-tight">{title}</h3>
            <p className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: themeColor }}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="h-[2px] w-full bg-gray-200"></div>

      {/* Body Content */}
      <div className="p-6 flex flex-col gap-6 bg-white">
        
        {/* Agent section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-400">
            <Bot size={14} />
            <span className="text-[11px] font-bold uppercase tracking-wider">Agent Co-Pilot</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {copilotText}
          </p>
        </div>

        {/* Divider dotted */}
        <div className="border-t border-dashed border-gray-200"></div>

        {/* Human section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-400">
            <User size={14} />
            <span className="text-[11px] font-bold uppercase tracking-wider">Human Action</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {humanText}
          </p>
          
          {/* Optional Action Button */}
          {actionButton && (
            <div className="mt-2">
              <button className="w-full bg-[#f0f2f5] hover:bg-[#e4e6eb] text-gray-700 font-medium py-2 rounded-lg text-sm transition-colors">
                {actionButton}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
