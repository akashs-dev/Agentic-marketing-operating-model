import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: '1. Strategy' },
    { id: 2, label: '2. Creative' },
    { id: 3, label: '3. Operations' },
    { id: 4, label: '4. Overall Workflow (Current)' },
    { id: 5, label: '5. Overall Workflow (Future)', isActive: true },
    { id: 6, label: '6. Agents' },
    { id: 7, label: '7. Documentation' },
  ];

  return (
    <aside className="w-[300px] bg-white h-full border-r border-gray-100 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-20">
      <div className="p-8">
        <h1 className="text-xl font-bold text-[#321c8c] leading-tight">
          Agentic marketing<br />
          <span className="text-[#5b32f9]">operating model</span>
        </h1>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.label.replace(/\s+/g, '-').toLowerCase()}`}
                className={`block px-8 py-3 text-sm ${
                  item.isActive 
                    ? 'bg-[#f0edff] text-[#5b32f9] border-l-4 border-[#5b32f9] font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Bottom element (purple button) */}
      <div className="p-8 mt-auto">
        <div className="w-12 h-10 bg-[#5b32f9] rounded-md shadow-md opacity-20"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
