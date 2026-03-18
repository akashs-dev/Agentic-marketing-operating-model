# Agentic Marketing Orchestration - Interactive Canvas Flow Diagram

## README & Developer Guide

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Architecture](#architecture)
4. [Setup & Installation](#setup--installation)
5. [Component Structure](#component-structure)
6. [Feature Implementation](#feature-implementation)
7. [Data Model](#data-model)
8. [Integration Points](#integration-points)
9. [API Specifications](#api-specifications)
10. [Styling & UI](#styling--ui)
11. [Testing](#testing)
12. [Deployment](#deployment)
13. [Contributing](#contributing)

---

## 🚀 Quick Start

### For Users
1. Open the application
2. See the complete agentic orchestration flow
3. Click any node to see details
4. Hover over connections to see data flow
5. Use view toggles to switch between beginner/technical views

### For Developers
```bash
# Clone repository
git clone https://github.com/company/agentic-orchestration-flow.git
cd agentic-orchestration-flow

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

---

## 📊 Project Overview

### What is This?

An interactive canvas-based visualization of the complete agentic marketing orchestration workflow. Users can explore how AI agents, MCP connections, and human actions orchestrate marketing campaigns from definition through execution.

### Key Features

✅ **Interactive Flow Diagram**
- 6 phases, 21 nodes representing complete workflow
- Click nodes to see detailed information
- Hover to see data flowing through connections
- Drag to pan, scroll to zoom

✅ **View Modes**
- Beginner View: Simplified, focus on concepts
- Technical View: Show MCP APIs and data schemas
- Full View: All details and feedback loops
- Simplified View: Main path only, executive summary

✅ **Details Panel**
- Node information (title, description, category)
- MCP connections and API access
- Agent capabilities and responsibilities
- Human actions required
- Time estimates and dependencies
- Related resources and documentation

✅ **Interactivity**
- Click to expand/collapse
- Drag to pan canvas
- Scroll/pinch to zoom
- Search and filter nodes
- Status tracking and progress
- Comments and notes
- Export as PDF/PNG/CSV

✅ **Collaboration**
- Add notes and comments
- Track implementation status
- Assign owners to components
- Share flow with team members
- View change history

---

## 🏗️ Architecture

### System Design

```
┌─────────────────────────────────────────────────┐
│          React Canvas Application               │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │     Canvas Layer (Konva.js / React Flow) │  │
│  │                                          │  │
│  │  • Render nodes & connections           │  │
│  │  • Handle zoom/pan                      │  │
│  │  • Detect clicks & hover                │  │
│  └──────────────────────────────────────────┘  │
│                    ↕                            │
│  ┌──────────────────────────────────────────┐  │
│  │    State Management (Redux/Zustand)     │  │
│  │                                          │  │
│  │  • Flow data (nodes, connections)       │  │
│  │  • UI state (selected node, zoom level) │  │
│  │  • User interactions (clicks, drags)    │  │
│  │  • View mode (beginner/technical)       │  │
│  └──────────────────────────────────────────┘  │
│                    ↕                            │
│  ┌──────────────────────────────────────────┐  │
│  │        Data Layer (JSON/API)             │  │
│  │                                          │  │
│  │  • Flow definition (21 nodes, paths)    │  │
│  │  • Node details (capabilities, MCPs)    │  │
│  │  • User data (status, notes, comments)  │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
         ↕
┌─────────────────────────────────────────────────┐
│         Backend API (Node.js/Express)           │
├─────────────────────────────────────────────────┤
│  • GET /api/flow - Fetch flow definition       │
│  • GET /api/nodes/{id} - Fetch node details    │
│  • POST /api/notes - Create comment/note       │
│  • PUT /api/status/{id} - Update status        │
│  • POST /api/export - Export as PDF/PNG/CSV    │
│  • WebSocket - Real-time sync                  │
└─────────────────────────────────────────────────┘
         ↕
┌─────────────────────────────────────────────────┐
│         Database (MongoDB/PostgreSQL)           │
├─────────────────────────────────────────────────┤
│  • Flow definitions & versions                 │
│  • User notes and comments                     │
│  • Status tracking                             │
│  • Change history & audit logs                 │
└─────────────────────────────────────────────────┘
```

---

## 🔧 Setup & Installation

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0 or yarn >= 3.0.0
- Modern browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

```bash
# 1. Clone repository
git clone https://github.com/company/agentic-orchestration-flow.git
cd agentic-orchestration-flow

# 2. Install dependencies
npm install

# 3. Create environment variables
cp .env.example .env.local
# Edit .env.local with your configuration:
# REACT_APP_API_URL=http://localhost:3001
# REACT_APP_ENVIRONMENT=development

# 4. Start development server
npm run dev
# Server will run on http://localhost:3000

# 5. (Optional) Start backend server in separate terminal
cd backend
npm install
npm run dev
# Backend will run on http://localhost:3001
```

### Project Structure

```
agentic-orchestration-flow/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Canvas/
│   │   │   ├── Canvas.tsx           # Main canvas component
│   │   │   ├── Node.tsx             # Individual node
│   │   │   ├── Connection.tsx       # Connection lines & arrows
│   │   │   └── Canvas.styles.ts     # Canvas styling
│   │   │
│   │   ├── DetailPanel/
│   │   │   ├── DetailPanel.tsx      # Right side detail panel
│   │   │   ├── NodeDetails.tsx      # Node information display
│   │   │   ├── MCPDisplay.tsx       # MCP connection display
│   │   │   └── DetailPanel.styles.ts
│   │   │
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx          # Left sidebar controls
│   │   │   ├── ViewModeToggle.tsx   # Beginner/Technical view
│   │   │   ├── SearchBar.tsx        # Search & filter
│   │   │   └── Sidebar.styles.ts
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.tsx           # Top header
│   │   │   ├── Controls.tsx         # Zoom, pan controls
│   │   │   └── Header.styles.ts
│   │   │
│   │   ├── Modals/
│   │   │   ├── NodeDetailsModal.tsx # Full-screen node view
│   │   │   ├── ExportModal.tsx      # Export options
│   │   │   ├── CommentsModal.tsx    # Add comments
│   │   │   └── Modals.styles.ts
│   │   │
│   │   └── Common/
│   │       ├── Badge.tsx            # Status badge
│   │       ├── Icon.tsx             # Icon component
│   │       ├── Tooltip.tsx          # Hover tooltips
│   │       └── Common.styles.ts
│   │
│   ├── hooks/
│   │   ├── useCanvas.ts             # Canvas interactions
│   │   ├── useNodeSelection.ts      # Node selection logic
│   │   ├── useViewMode.ts           # View mode management
│   │   ├── useZoomPan.ts            # Zoom/pan logic
│   │   └── useApi.ts                # API calls
│   │
│   ├── store/
│   │   ├── flowStore.ts             # Flow data state
│   │   ├── uiStore.ts               # UI state
│   │   ├── userStore.ts             # User & auth
│   │   └── actions/
│   │       ├── flowActions.ts
│   │       ├── uiActions.ts
│   │       └── userActions.ts
│   │
│   ├── data/
│   │   ├── flowDefinition.json      # Flow structure (21 nodes)
│   │   ├── nodeDetails.json         # Node information
│   │   └── mcpConnections.json      # MCP API specs
│   │
│   ├── services/
│   │   ├── api.ts                   # API client
│   │   ├── flowService.ts           # Flow operations
│   │   ├── exportService.ts         # PDF/PNG/CSV export
│   │   └── websocketService.ts      # Real-time sync
│   │
│   ├── types/
│   │   ├── flow.types.ts            # Flow interfaces
│   │   ├── node.types.ts            # Node interfaces
│   │   ├── mcp.types.ts             # MCP interfaces
│   │   └── api.types.ts             # API response types
│   │
│   ├── utils/
│   │   ├── canvas.utils.ts          # Canvas math utilities
│   │   ├── zoom.utils.ts            # Zoom calculations
│   │   ├── storage.ts               # LocalStorage helpers
│   │   └── formatting.ts            # Text formatting
│   │
│   ├── styles/
│   │   ├── globals.css              # Global styles
│   │   ├── variables.css            # CSS variables (colors, sizes)
│   │   ├── tailwind.config.ts       # Tailwind configuration
│   │   └── themes/
│   │       ├── light.css
│   │       └── dark.css
│   │
│   ├── App.tsx                      # Main app component
│   ├── App.styles.ts
│   └── index.tsx                    # App entry point
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── flow.routes.ts       # Flow endpoints
│   │   │   ├── nodes.routes.ts      # Node endpoints
│   │   │   └── auth.routes.ts       # Auth endpoints
│   │   │
│   │   ├── controllers/
│   │   │   ├── flowController.ts
│   │   │   ├── nodeController.ts
│   │   │   └── authController.ts
│   │   │
│   │   ├── models/
│   │   │   ├── Flow.ts
│   │   │   ├── Node.ts
│   │   │   ├── User.ts
│   │   │   └── Note.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── cors.ts
│   │   │   └── errorHandler.ts
│   │   │
│   │   └── server.ts                # Express server
│   │
│   ├── package.json
│   └── .env
│
├── tests/
│   ├── components/
│   │   ├── Canvas.test.tsx
│   │   ├── Node.test.tsx
│   │   └── DetailPanel.test.tsx
│   │
│   ├── services/
│   │   ├── api.test.ts
│   │   └── flowService.test.ts
│   │
│   ├── utils/
│   │   ├── canvas.utils.test.ts
│   │   └── zoom.utils.test.ts
│   │
│   └── setup.ts
│
├── docs/
│   ├── ARCHITECTURE.md              # Detailed architecture
│   ├── API.md                       # API documentation
│   ├── COMPONENTS.md                # Component documentation
│   └── CONTRIBUTING.md              # Contribution guidelines
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts (or webpack.config.js)
└── README.md
```

---

## 🎨 Component Structure

### Canvas Component

```typescript
// src/components/Canvas/Canvas.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import Node from './Node';
import Connection from './Connection';
import { useCanvas } from '../../hooks/useCanvas';
import { useNodeSelection } from '../../hooks/useNodeSelection';

interface CanvasProps {
  flowData: FlowData;
  selectedNodeId?: string;
  onNodeClick: (nodeId: string) => void;
  zoom: number;
  panX: number;
  panY: number;
}

const Canvas: React.FC<CanvasProps> = ({
  flowData,
  selectedNodeId,
  onNodeClick,
  zoom,
  panX,
  panY
}) => {
  const stageRef = useRef<Konva.Stage>(null);
  const { handleWheel, handleClick, handleDragMove } = useCanvas();

  return (
    <Stage
      ref={stageRef}
      width={window.innerWidth}
      height={window.innerHeight}
      scale={{ x: zoom, y: zoom }}
      position={{ x: panX, y: panY }}
      onWheel={handleWheel}
      onClick={handleClick}
      onDragMove={handleDragMove}
    >
      <Layer>
        {/* Render connections first (background) */}
        {flowData.connections.map((conn) => (
          <Connection
            key={conn.id}
            connection={conn}
            isHighlighted={
              selectedNodeId === conn.fromNodeId ||
              selectedNodeId === conn.toNodeId
            }
          />
        ))}

        {/* Render nodes on top */}
        {flowData.nodes.map((node) => (
          <Node
            key={node.id}
            node={node}
            isSelected={selectedNodeId === node.id}
            onClick={() => onNodeClick(node.id)}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;
```

### Node Component

```typescript
// src/components/Canvas/Node.tsx
import React from 'react';
import { Group, Rect, Text } from 'react-konva';
import { NodeData } from '../../types/node.types';

interface NodeProps {
  node: NodeData;
  isSelected: boolean;
  onClick: () => void;
}

const Node: React.FC<NodeProps> = ({ node, isSelected, onClick }) => {
  const borderWidth = isSelected ? 3 : 1;
  const borderColor = isSelected ? '#378ADD' : node.borderColor;

  return (
    <Group
      x={node.x}
      y={node.y}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.target.scale({ x: 1.05, y: 1.05 });
      }}
      onMouseLeave={(e) => {
        e.target.scale({ x: 1, y: 1 });
      }}
    >
      {/* Background rectangle */}
      <Rect
        width={node.width}
        height={node.height}
        fill={node.backgroundColor}
        stroke={borderColor}
        strokeWidth={borderWidth}
        cornerRadius={8}
      />

      {/* Icon or image */}
      {node.icon && (
        <Text
          x={12}
          y={8}
          fontSize={24}
          text={node.icon}
        />
      )}

      {/* Title text */}
      <Text
        x={12}
        y={40}
        width={node.width - 24}
        fontSize={14}
        fontStyle="bold"
        text={node.title}
        fill={node.titleColor}
        align="left"
      />

      {/* Subtitle text */}
      {node.subtitle && (
        <Text
          x={12}
          y={62}
          width={node.width - 24}
          fontSize={11}
          text={node.subtitle}
          fill={node.subtitleColor}
          align="left"
        />
      )}

      {/* Status indicator */}
      {node.status && (
        <Rect
          x={node.width - 20}
          y={node.height - 20}
          width={16}
          height={16}
          fill={getStatusColor(node.status)}
          cornerRadius={8}
        />
      )}
    </Group>
  );
};

function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    'not_started': '#9CA3AF',
    'in_progress': '#3B82F6',
    'ready_for_review': '#F59E0B',
    'approved': '#10B981',
    'blocked': '#EF4444'
  };
  return colors[status] || '#9CA3AF';
}

export default Node;
```

### Detail Panel Component

```typescript
// src/components/DetailPanel/DetailPanel.tsx
import React from 'react';
import { NodeData } from '../../types/node.types';
import NodeDetails from './NodeDetails';
import MCPDisplay from './MCPDisplay';
import styles from './DetailPanel.styles';

interface DetailPanelProps {
  node: NodeData | null;
  onClose: () => void;
  onMarkComplete: (nodeId: string) => void;
  onAddNote: (nodeId: string, note: string) => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({
  node,
  onClose,
  onMarkComplete,
  onAddNote
}) => {
  if (!node) return null;

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.header}>
        <h2>{node.title}</h2>
        <button onClick={onClose}>&times;</button>
      </div>

      {/* Scrollable content */}
      <div className={styles.content}>
        
        {/* Category & Status */}
        <div className={styles.section}>
          <div className={styles.badge}>{node.category}</div>
          <div className={styles.statusBadge}>{node.status}</div>
        </div>

        {/* Description */}
        <div className={styles.section}>
          <h3>Overview</h3>
          <p>{node.description}</p>
        </div>

        {/* Node Details */}
        <NodeDetails node={node} />

        {/* MCP Access */}
        {node.mcpAccess && node.mcpAccess.length > 0 && (
          <div className={styles.section}>
            <h3>MCP Access</h3>
            {node.mcpAccess.map((mcp) => (
              <MCPDisplay key={mcp.toolName} mcp={mcp} />
            ))}
          </div>
        )}

        {/* Agent Co-Pilot */}
        <div className={styles.section}>
          <h3>Agent Co-Pilot</h3>
          <p>{node.agentCoPilot}</p>
        </div>

        {/* Human Actions */}
        <div className={styles.section}>
          <h3>Human Actions Required</h3>
          <ul>
            {node.humanActions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </ul>
        </div>

        {/* Time Estimate */}
        <div className={styles.section}>
          <p><strong>Time Estimate:</strong> {node.timeEstimate}</p>
        </div>

        {/* Notes */}
        <div className={styles.section}>
          <h3>Notes ({node.notes?.length || 0})</h3>
          {node.notes && node.notes.map((note) => (
            <div key={note.id} className={styles.note}>
              <strong>{note.author}</strong>
              <small>{note.timestamp}</small>
              <p>{note.content}</p>
            </div>
          ))}
          <textarea
            placeholder="Add a note..."
            className={styles.noteInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey) {
                onAddNote(node.id, (e.target as HTMLTextAreaElement).value);
                (e.target as HTMLTextAreaElement).value = '';
              }
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => onMarkComplete(node.id)}
          >
            ✓ Mark Complete
          </button>
          <button className={styles.secondaryBtn}>
            📄 View Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;
```

---

## 📊 Feature Implementation

### Feature 1: Interactive Node Click

```typescript
// Hook for node selection
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedNode, addHighlightedPaths } from '../store/uiStore';

export const useNodeSelection = () => {
  const dispatch = useDispatch();
  const selectedNodeId = useSelector((state) => state.ui.selectedNodeId);

  const handleNodeClick = useCallback((nodeId: string) => {
    dispatch(setSelectedNode(nodeId));
    
    // Highlight incoming and outgoing connections
    const node = getNodeById(nodeId);
    const incomingPaths = getIncomingConnections(nodeId);
    const outgoingPaths = getOutgoingConnections(nodeId);
    
    dispatch(addHighlightedPaths([...incomingPaths, ...outgoingPaths]));
  }, [dispatch]);

  return { selectedNodeId, handleNodeClick };
};
```

### Feature 2: Zoom & Pan

```typescript
// Hook for zoom/pan functionality
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setZoom, setPan } from '../store/uiStore';

export const useZoomPan = () => {
  const dispatch = useDispatch();
  const { zoom, panX, panY } = useSelector((state) => state.ui);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    const scaleAmount = 1.1;
    const newZoom = e.deltaY < 0 ? zoom * scaleAmount : zoom / scaleAmount;
    
    // Constrain zoom between 0.5x and 3x
    const constrainedZoom = Math.max(0.5, Math.min(3, newZoom));
    
    dispatch(setZoom(constrainedZoom));
  }, [zoom, dispatch]);

  const handlePan = useCallback((dx: number, dy: number) => {
    dispatch(setPan(panX + dx, panY + dy));
  }, [panX, panY, dispatch]);

  return { zoom, panX, panY, handleWheel, handlePan };
};
```

### Feature 3: View Mode Toggle

```typescript
// Beginner vs Technical view
const beginner = node.category === 'agent' && !showTechnical
  ? {
      ...node,
      description: node.description.split('.')[0] + '.', // First sentence only
      mcpAccess: [], // Hide MCP details
      relatedResources: [] // Hide resources
    }
  : node;

// Simplified vs Full view
const simplified = hideDetails
  ? {
      ...node,
      description: node.shortDescription,
      humanActions: node.humanActions.slice(0, 2) // Only first 2 actions
    }
  : node;
```

### Feature 4: Search & Filter

```typescript
// Search implementation
const [searchTerm, setSearchTerm] = useState('');

const filteredNodes = flowData.nodes.filter((node) => {
  const matchesSearch = 
    node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    node.description.toLowerCase().includes(searchTerm.toLowerCase());
  
  const matchesFilter = 
    filterCategory ? node.category === filterCategory : true;
  
  return matchesSearch && matchesFilter;
});

// Highlight search results on canvas
const highlightedNodeIds = filteredNodes.map(n => n.id);
```

### Feature 5: Export Functionality

```typescript
// Export to PDF
import { PDFDocument, PDFPage, rgb } from 'pdf-lib';

export const exportToPDF = async (flowData: FlowData, fileName: string) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([800, 1200]);
  
  // Add title
  page.drawText('Agentic Marketing Orchestration Flow', {
    x: 50,
    y: 1100,
    size: 24,
  });

  // Add flow content
  let yOffset = 1050;
  
  flowData.nodes.forEach((node) => {
    page.drawText(node.title, { x: 50, y: yOffset, size: 14 });
    page.drawText(node.description, { x: 50, y: yOffset - 20, size: 10 });
    yOffset -= 60;
  });

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.pdf`;
  link.click();
};

// Export to CSV
export const exportToCSV = (nodes: NodeData[], fileName: string) => {
  const headers = ['Phase', 'Node ID', 'Title', 'Category', 'Status', 'Owner', 'Notes'];
  const rows = nodes.map((node) => [
    node.phaseNumber,
    node.id,
    node.title,
    node.category,
    node.status,
    node.assignee || '',
    node.notes.map(n => n.content).join('; ')
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.csv`;
  link.click();
};
```

---

## 📝 Data Model

### Flow Definition Schema

```json
{
  "id": "pillar_a_orchestration",
  "name": "Business Owner (Pillar A) → MCP Agents → Execution",
  "version": "1.0.0",
  "description": "Complete agentic marketing orchestration workflow",
  "phases": [
    {
      "id": "phase_1",
      "phaseNumber": 1,
      "title": "Business Owner Input",
      "description": "Business owner defines use case through Adobe Workfront",
      "nodes": ["business_owner", "use_case_output"],
      "backgroundColor": "#F3F4F6",
      "timeEstimate": "1-2 hours",
      "icon": "📋"
    },
    {
      "id": "phase_2",
      "phaseNumber": 2,
      "title": "MCP Agents Process",
      "description": "Three agents analyze in parallel via MCP connections",
      "nodes": ["segment_agent", "analytics_agent", "campaign_agent", "mcp_convergence"],
      "backgroundColor": "#F8F5FF",
      "timeEstimate": "1-2 hours",
      "icon": "🤖"
    }
    // ... more phases
  ],
  "nodes": [
    {
      "id": "business_owner",
      "phaseId": "phase_1",
      "title": "Business Owner (Pillar A)",
      "category": "input",
      "x": 100,
      "y": 150,
      "width": 560,
      "height": 88,
      "icon": "📋",
      "backgroundColor": "#F3F4F6",
      "borderColor": "#9CA3AF",
      "description": "Business owner defines campaign use case including goals, audience, budget, timeline through Adobe Workfront.",
      "details": {
        "mcpAccess": [
          {
            "toolName": "Adobe Workfront",
            "apiEndpoint": "https://api.workfront.com/v15",
            "authentication": "OAuth 2.0",
            "requiredScopes": ["projects:read", "tasks:read", "custom-forms:read"]
          }
        ],
        "agentCoPilot": "Use Case Planning Agent - Analyzes all inputs and creates comprehensive brief with audience estimates, ROI projections, and channel recommendations.",
        "capabilities": [
          "Retrieve project and campaign data from Workfront",
          "Parse custom form responses",
          "Extract stakeholder information",
          "Analyze historical campaign success patterns"
        ],
        "humanActions": [
          "Define campaign goals and KPIs",
          "Specify target audience demographics",
          "Set budget and timeline",
          "Provide brand guidelines and messaging pillars"
        ],
        "inputs": [],
        "outputs": [
          {
            "dataType": "UseCaseDefinition",
            "toNodeId": "use_case_output",
            "description": "Comprehensive use case brief with all business requirements"
          }
        ],
        "timeEstimate": "1-2 hours",
        "successCriteria": [
          "All required fields populated in Workfront",
          "Clear, measurable KPIs defined",
          "Target audience clearly specified",
          "Budget approved by finance team"
        ]
      },
      "status": "not_started",
      "notes": [],
      "relatedResources": [
        { "title": "Adobe Workfront Guide", "url": "/docs/workfront" },
        { "title": "Campaign Planning Template", "url": "/templates/campaign-planning" }
      ]
    },
    {
      "id": "segment_agent",
      "phaseId": "phase_2",
      "title": "Segment Agent",
      "category": "agent",
      "x": 70,
      "y": 510,
      "width": 150,
      "height": 100,
      "icon": "🎯",
      "backgroundColor": "#7F77DD",
      "borderColor": "#534AB7",
      "description": "Analyzes audience and creates customer cohorts (S1/S2/S3) with propensity models using RTCDP.",
      "details": {
        "mcpAccess": [
          {
            "toolName": "Adobe RTCDP",
            "apiEndpoint": "https://api.adobe.io/rtcdp",
            "authentication": "JWT",
            "requiredScopes": ["segments:read", "segments:write", "audiences:activate"]
          }
        ],
        "agentCoPilot": "Segment Agent - AI agent with real-time RTCDP access for audience analysis and cohort creation.",
        "capabilities": [
          "Query RTCDP for available customer segments",
          "Analyze customer attributes and behaviors",
          "Create propensity-based cohorts (S1/S2/S3)",
          "Define suppression logic (existing customers, bounced emails)",
          "Configure real-time segment activation"
        ],
        "humanActions": [
          "Review segment definitions for accuracy",
          "Validate propensity scores match expectations",
          "Approve suppression rules for compliance",
          "Activate segments in RTCDP"
        ],
        "inputs": [
          {
            "dataType": "UseCaseDefinition",
            "fromNodeId": "use_case_output",
            "description": "Business objectives and target audience specifications"
          }
        ],
        "outputs": [
          {
            "dataType": "SegmentDefinitions",
            "toNodeId": "mcp_convergence",
            "description": "S1/S2/S3 cohorts with propensity scores and activation specs"
          }
        ],
        "timeEstimate": "1-2 hours",
        "successCriteria": [
          "S1/S2/S3 cohorts created with >90% data completeness",
          "Propensity scores validated by Strategy Lead",
          "Suppression rules cover all compliance requirements",
          "Audience sizes match projections (±10%)"
        ]
      },
      "status": "not_started",
      "notes": [],
      "relatedResources": [
        { "title": "RTCDP Documentation", "url": "/docs/rtcdp" },
        { "title": "Propensity Model Guide", "url": "/docs/propensity-models" }
      ]
    }
    // ... more nodes
  ],
  "connections": [
    {
      "id": "conn_1",
      "fromNodeId": "business_owner",
      "toNodeId": "use_case_output",
      "dataType": "UseCaseDefinition",
      "label": "Campaign brief with audience estimates, ROI projections, channel recommendations",
      "connectionType": "sequential",
      "arrowColor": "#3B82F6"
    },
    {
      "id": "conn_2",
      "fromNodeId": "use_case_output",
      "toNodeId": "segment_agent",
      "dataType": "UseCaseDefinition",
      "label": "Audience definition",
      "connectionType": "sequential",
      "arrowColor": "#3B82F6"
    },
    {
      "id": "feedback_1",
      "fromNodeId": "continuous_optimization",
      "toNodeId": "segment_agent",
      "dataType": "LearningData",
      "label": "Segment performance feedback for next cycle",
      "connectionType": "feedback",
      "arrowColor": "#A855F7"
    }
    // ... more connections
  ],
  "metadata": {
    "createdDate": "2024-03-17",
    "lastModified": "2024-03-17",
    "createdBy": "product-team",
    "version": "1.0.0",
    "tags": ["agentic", "marketing", "orchestration", "mcp"]
  }
}
```

---

## 🔗 Integration Points

### 1. Adobe Workfront Integration

```typescript
// src/services/workfrontService.ts
import axios from 'axios';

const workfrontAPI = axios.create({
  baseURL: 'https://api.workfront.com/v15',
  headers: {
    'Authorization': `Bearer ${process.env.WORKFRONT_API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export const getProjectDetails = async (projectId: string) => {
  const response = await workfrontAPI.get(`/proj/${projectId}`);
  return response.data;
};

export const getCustomFormData = async (customFormId: string) => {
  const response = await workfrontAPI.get(`/ctgyp/${customFormId}`);
  return response.data;
};
```

### 2. Adobe RTCDP Integration

```typescript
// src/services/rtcdpService.ts
import axios from 'axios';

const rtcdpAPI = axios.create({
  baseURL: 'https://api.adobe.io/rtcdp',
  headers: {
    'Authorization': `Bearer ${process.env.RTCDP_JWT_TOKEN}`,
    'x-gw-ims-org-id': process.env.IMS_ORG_ID
  }
});

export const querySegments = async (segmentQuery: string) => {
  const response = await rtcdpAPI.post('/query', {
    query: segmentQuery
  });
  return response.data;
};

export const createSegment = async (segmentDef: SegmentDefinition) => {
  const response = await rtcdpAPI.post('/segments', segmentDef);
  return response.data;
};
```

### 3. Adobe CJA (Customer Journey Analytics) Integration

```typescript
// src/services/cjaService.ts
import axios from 'axios';

const cjaAPI = axios.create({
  baseURL: 'https://api.adobe.io/cja',
  headers: {
    'Authorization': `Bearer ${process.env.CJA_JWT_TOKEN}`,
    'x-gw-ims-org-id': process.env.IMS_ORG_ID
  }
});

export const getAttributionInsights = async (campaignId: string) => {
  const response = await cjaAPI.get(`/attribution/${campaignId}`);
  return response.data;
};

export const getPastCampaignPerformance = async (audienceSegment: string) => {
  const response = await cjaAPI.post('/analysis', {
    segment: audienceSegment,
    metrics: ['open_rate', 'click_rate', 'conversion_rate']
  });
  return response.data;
};
```

### 4. Adobe Campaign Integration

```typescript
// src/services/adobeCampaignService.ts
import axios from 'axios';

const campaignAPI = axios.create({
  baseURL: 'https://api.adobe.io/campaign',
  headers: {
    'Authorization': `Bearer ${process.env.CAMPAIGN_JWT_TOKEN}`,
    'x-gw-ims-org-id': process.env.IMS_ORG_ID
  }
});

export const createCampaignWorkflow = async (workflow: CampaignWorkflow) => {
  const response = await campaignAPI.post('/workflows', workflow);
  return response.data;
};

export const activateSegments = async (segmentIds: string[]) => {
  const response = await campaignAPI.post('/segments/activate', {
    segments: segmentIds
  });
  return response.data;
};
```

---

## 📡 API Specifications

### Backend Endpoints

#### Flow Endpoints
```
GET    /api/flow              # Get complete flow definition
GET    /api/flow/:id          # Get specific flow
POST   /api/flow              # Create new flow
PUT    /api/flow/:id          # Update flow
DELETE /api/flow/:id          # Delete flow
```

#### Node Endpoints
```
GET    /api/nodes             # List all nodes
GET    /api/nodes/:id         # Get node details
PUT    /api/nodes/:id         # Update node status/notes
GET    /api/nodes/:id/notes   # Get node comments
POST   /api/nodes/:id/notes   # Add comment to node
```

#### Export Endpoints
```
POST   /api/export/pdf        # Export flow as PDF
POST   /api/export/png        # Export flow as PNG
POST   /api/export/csv        # Export as CSV
POST   /api/export/json       # Export as JSON
```

#### Status Endpoints
```
PUT    /api/nodes/:id/status  # Update node status
GET    /api/status/summary    # Get overall progress
```

---

## 🎨 Styling & UI

### Color System

```css
/* Phase colors */
--phase-1-bg: #F3F4F6;      /* Gray - Input */
--phase-2-bg: #F8F5FF;      /* Purple - Agents */
--phase-3-bg: #E0F2FE;      /* Teal - Strategy */
--phase-4-bg: #FEF3E2;      /* Coral - Ops */
--phase-5-bg: #FEF3E2;      /* Coral - Execution */
--phase-6-bg: #F8F5FF;      /* Purple - Optimization */

/* Node colors */
--node-input: #F3F4F6;
--node-agent: #7F77DD;
--node-strategy: #0F6E56;
--node-ops: #D85A30;
--node-execution: #D85A30;
--node-optimization: #7F77DD;

/* Status colors */
--status-not-started: #9CA3AF;
--status-in-progress: #3B82F6;
--status-ready: #F59E0B;
--status-approved: #10B981;
--status-blocked: #EF4444;

/* Connection colors */
--connection-forward: #3B82F6;
--connection-mcp: #7C3AED;
--connection-feedback: #A855F7;
--connection-highlight: #EC4899;
```

### Responsive Design

```css
/* Desktop */
@media (min-width: 1280px) {
  .canvas { width: 100%; }
  .detail-panel { width: 400px; }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1279px) {
  .canvas { width: 70%; }
  .detail-panel { width: 30%; }
}

/* Mobile */
@media (max-width: 767px) {
  .canvas { width: 100%; }
  .detail-panel { 
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50%;
  }
}
```

---

## 🧪 Testing

### Unit Tests

```typescript
// tests/components/Canvas.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Canvas from '../../components/Canvas/Canvas';

describe('Canvas Component', () => {
  it('should render all nodes', () => {
    const flowData = {
      nodes: [
        { id: '1', title: 'Node 1', x: 100, y: 100 },
        { id: '2', title: 'Node 2', x: 200, y: 200 }
      ],
      connections: []
    };
    
    render(<Canvas flowData={flowData} />);
    
    expect(screen.getByText('Node 1')).toBeInTheDocument();
    expect(screen.getByText('Node 2')).toBeInTheDocument();
  });

  it('should handle node click', () => {
    const handleNodeClick = jest.fn();
    const flowData = {
      nodes: [{ id: '1', title: 'Node 1', x: 100, y: 100 }],
      connections: []
    };
    
    render(
      <Canvas 
        flowData={flowData} 
        onNodeClick={handleNodeClick}
      />
    );
    
    fireEvent.click(screen.getByText('Node 1'));
    expect(handleNodeClick).toHaveBeenCalledWith('1');
  });
});
```

### Integration Tests

```typescript
// tests/integration/flow.integration.test.ts
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Flow Diagram Integration', () => {
  it('should load and display complete flow', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Business Owner')).toBeInTheDocument();
      expect(screen.getByText('Segment Agent')).toBeInTheDocument();
      expect(screen.getByText('Analytics Agent')).toBeInTheDocument();
    });
  });

  it('should update detail panel when node clicked', async () => {
    render(<App />);
    
    const segmentAgent = screen.getByText('Segment Agent');
    userEvent.click(segmentAgent);
    
    await waitFor(() => {
      expect(screen.getByText(/MCP Access/i)).toBeInTheDocument();
    });
  });
});
```

---

## 🚀 Deployment

### Development

```bash
npm run dev
# Runs on http://localhost:3000
```

### Build for Production

```bash
npm run build
# Creates optimized build in dist/
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
```

```bash
# Build and run Docker container
docker build -t agentic-orchestration .
docker run -p 3000:3000 agentic-orchestration
```

---

## 📚 Documentation Files

Additional documentation:
- `docs/ARCHITECTURE.md` - Detailed system architecture
- `docs/API.md` - Complete API reference
- `docs/COMPONENTS.md` - Component API & usage
- `docs/CONTRIBUTING.md` - How to contribute

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE.md for details.

---

## 📧 Support

For questions or support:
- 📖 Read documentation in `/docs`
- 💬 Open an issue on GitHub
- 📧 Contact: support@example.com

---

**Version:** 1.0.0  
**Last Updated:** 2024-03-17  
**Maintained By:** Product Team
