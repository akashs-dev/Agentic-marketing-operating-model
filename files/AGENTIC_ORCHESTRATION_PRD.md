# Agentic Marketing Orchestration - Interactive Flow Diagram
## Product Requirements Document (PRD) & Implementation Guide

---

## 1. EXECUTIVE SUMMARY

**Product:** Interactive Canvas-based Flow Diagram for Agentic Marketing Orchestration  
**Purpose:** Enable users to visualize, understand, and interact with the complete end-to-end agentic marketing workflow  
**User Base:** Marketing strategists, product managers, business owners, technical teams  
**Key Value:** Interactive exploration of complex orchestration flows with real-time node information

---

## 2. PRODUCT OVERVIEW

### 2.1 What is the Agentic Marketing Orchestration Flow?

The system represents the complete journey of transforming a business owner's marketing use case into an automated, optimized campaign execution through AI agents coordinated via MCP (Model Context Protocol).

```
User Input → MCP Agents Process → Strategy Review → Operations Setup → Execution → Optimization
```

### 2.2 Core Concept: Single Pillar (Pillar A)

- **Input:** Business owner defines use case through Adobe Workfront
- **Processing:** Three MCP agents process in parallel (Segment, Analytics, Campaign)
- **Strategy:** Strategy leads review and refine recommendations
- **Execution:** Operations teams deploy to Adobe tools
- **Optimization:** Real-time monitoring and continuous learning

---

## 3. USER STORIES & INTERACTIONS

### 3.1 User Story 1: First-Time Explorer
**As a** marketing manager unfamiliar with agentic systems  
**I want to** explore the flow step-by-step and understand each component  
**So that** I can grasp how AI agents orchestrate my marketing campaigns

**Interaction:**
- User starts at "Business Owner" node
- Clicks to see description and what inputs are needed
- Follows arrows to next phase
- Each node is clickable, revealing:
  - Component name & icon
  - MCP access (which APIs/tools it connects to)
  - Agent co-pilot responsibilities
  - Human actions required
  - Output/deliverables

### 3.2 User Story 2: Deep Diver
**As a** technical lead implementing this system  
**I want to** see detailed MCP connections and data flow  
**So that** I can architect the actual backend implementation

**Interaction:**
- Toggle "Show MCP Connections" to highlight API connections
- Hover over agents to see their MCP access details
- Click on "Data Flow" tab to see data schema
- View feedback loops and optimization cycles
- Access technical specifications for each agent

### 3.3 User Story 3: Process Validator
**As a** business process owner  
**I want to** validate that the flow matches our actual workflow  
**So that** I can identify gaps or improvements

**Interaction:**
- Compare flow against their documented process
- Mark nodes as "completed", "in progress", "not implemented"
- Add custom notes to nodes
- Export customized flow for team review
- Generate checklist of implementation items

### 3.4 User Story 4: Stakeholder Presenter
**As a** an executive presenter  
**I want to** show key stakeholders the orchestration model  
**So that** they understand the business impact of agentic marketing

**Interaction:**
- Simplify view (hide technical MCP details)
- Highlight key business phases
- Show value props at each stage (time saved, automation %, quality improvement)
- Generate executive summary slides
- Link to ROI calculator

---

## 4. FEATURE REQUIREMENTS

### 4.1 Core Canvas Features

#### 4.1.1 Interactive Node System
**Requirements:**
- Each phase/component is a clickable node
- Nodes contain:
  - Icon + Title + Subtitle
  - Background color by category (gray=input, purple=agent, teal=strategy, coral=ops)
  - Border indicating status (normal, active, highlighted)
  
**Nodes in Flow:**
```
Phase 1: Business Owner Input
├── Business Owner (Pillar A) - Gray node
├── Use Case Definition Output - Gray node

Phase 2: MCP Agents (Parallel Processing)
├── Segment Agent - Purple node
├── Analytics Agent - Purple node
├── Campaign Agent - Purple node
├── MCP Convergence Output - Gray node

Phase 3: Strategy Review
├── Audience Strategy Lead - Teal node
├── Creative Director - Teal node
├── Creative Designer - Teal node
├── Approval Checkpoint - Teal node

Phase 4: Operations Setup
├── CDP Operations - Coral node
├── Campaign Operations - Coral node
├── Creative Delivery - Coral node
├── Deployment Ready - Coral node

Phase 5: Execution
├── Multi-channel Delivery - Coral node
├── Real-time Monitoring - Teal node

Phase 6: Learning
├── Continuous Optimization - Purple node
└── Feedback Loops - Purple node (connects back to agents)
```

#### 4.1.2 Node Detail Panel
When user clicks a node, a side panel appears showing:

```
┌─────────────────────────────────┐
│ Node Name                   [X]  │
├─────────────────────────────────┤
│ CATEGORY                        │
│ Component Type | Status         │
│                                 │
│ OVERVIEW                        │
│ [2-3 sentence description]      │
│                                 │
│ INPUT/OUTPUT                    │
│ Receives from:                  │
│  • Previous component           │
│  • Data type                    │
│                                 │
│ Produces:                       │
│  • Output component             │
│  • Data type                    │
│                                 │
│ KEY RESPONSIBILITIES            │
│ ☐ Responsibility 1              │
│ ☐ Responsibility 2              │
│ ☐ Responsibility 3              │
│                                 │
│ MCP ACCESS                      │
│ [Icon] Adobe RTCDP API          │
│ [Icon] Adobe CJA API            │
│ [Icon] Adobe Campaign API       │
│                                 │
│ AGENT CO-PILOT                  │
│ [Agent name & capabilities]     │
│                                 │
│ HUMAN ACTION REQUIRED           │
│ • [Action 1]                    │
│ • [Action 2]                    │
│ • [Action 3]                    │
│                                 │
│ TIME TO COMPLETE                │
│ ⏱ 1-2 hours                    │
│                                 │
│ [Learn More] [Mark Complete]    │
└─────────────────────────────────┘
```

#### 4.1.3 Connection Lines & Arrows
**Requirements:**
- Solid arrows: Sequential flow (Phase 1 → Phase 2)
- Dashed arrows: Feedback loops (optimization back to agents)
- Arrow colors:
  - Blue: Data flow forward
  - Purple: MCP connections
  - Green: Feedback loops
  - Red/Yellow: Alerts/optimizations

**Interactive:** 
- Hover over connection → shows data type being passed
- Click connection → shows sample data schema
- Highlight flow path from start to end

#### 4.1.4 Phase Headers & Sections
**Requirements:**
- Clear visual separation of 6 phases
- Each phase has:
  - Title bar with phase number
  - Subtitle describing phase purpose
  - Visual container/background
  - Time estimate for phase completion

---

### 4.2 View Modes

#### 4.2.1 View Toggle: Beginner vs. Technical
**Beginner View:**
- Hide MCP technical details
- Simplify data flow
- Focus on human interactions
- High-level descriptions

**Technical View:**
- Show all MCP connections
- Display data schemas
- Show API calls and responses
- Low-level technical specifications

#### 4.2.2 View Toggle: Full vs. Simplified
**Full View:**
- All 6 phases visible
- All feedback loops shown
- Detailed node information
- All connections labeled

**Simplified View:**
- Only main path (no feedback loops initially)
- Hide internal details
- Key decisions highlighted
- Executive summary view

#### 4.2.3 Phase-Focused View
- Filter to show only Phase N
- Hide other phases (greyed out/collapsed)
- Show zoomed-in detail of one phase
- Highlight connections to previous/next phases

---

### 4.3 Interaction Features

#### 4.3.1 Click Interactions
- **Click Node:** Open detail panel (side view)
- **Click Arrow:** Show data flowing through connection
- **Click Phase Title:** Expand/collapse phase
- **Double-click Node:** Open full-screen view
- **Right-click Node:** Context menu (mark status, add note, link resource)

#### 4.3.2 Hover Interactions
- **Hover Node:** Highlight incoming/outgoing connections
- **Hover Arrow:** Show tooltip with data type
- **Hover Phase:** Highlight all nodes in that phase

#### 4.3.3 Drag/Pan Interactions
- Drag canvas to pan (if zoomed in)
- Pinch-to-zoom (mobile)
- Mouse wheel zoom (desktop)
- Double-click to reset view

#### 4.3.4 Search & Filter
- Search bar to find nodes by name
- Filter by:
  - Phase (show only Phase 2)
  - Category (show only agents)
  - Type (show only MCP nodes)
  - Status (show only incomplete items)

---

### 4.4 Information Display

#### 4.4.1 Node Information Schema

Each node should display:

```javascript
{
  id: 'segment_agent',
  phase: 2,
  title: 'Segment Agent',
  category: 'agent', // 'input', 'agent', 'strategy', 'ops', 'execution', 'optimization'
  icon: 'CircleIcon', // or image URL
  backgroundColor: '#7F77DD', // purple for agents
  
  description: 'Segment Agent analyzes audience definition and creates customer cohorts (S1/S2/S3) with propensity-based models using RTCDP data.',
  
  capabilities: [
    'Query RTCDP customer segments',
    'Create audience cohorts (S1/S2/S3)',
    'Calculate propensity scores',
    'Define suppression logic',
    'Configure activation specs'
  ],
  
  mcpAccess: [
    { tool: 'Adobe RTCDP', api: 'RTCDP API v2', icon: 'database-icon' },
  ],
  
  agentCoPilot: 'Segment Agent powered by LLM with MCP connection to RTCDP',
  
  inputs: [
    { from: 'use_case_definition', dataType: 'UseCaseDefinition', description: 'Business objectives and target audience' }
  ],
  
  outputs: [
    { dataType: 'SegmentDefinitions', to: 'mcp_convergence', description: 'S1/S2/S3 cohorts with propensity scores' }
  ],
  
  humanAction: [
    'Reviews segment definitions for accuracy',
    'Validates propensity scores',
    'Approves cohort creation'
  ],
  
  timeEstimate: '2-3 hours',
  
  relatedResources: [
    { title: 'RTCDP Setup Guide', url: '/docs/rtcdp-setup' },
    { title: 'Propensity Model Training', url: '/docs/propensity' }
  ]
}
```

#### 4.4.2 Data Flow Information

When hovering over arrows:

```
Data Type: SegmentDefinitions
├── S1_Nurture: {
│   ├── audience_size: 250000,
│   ├── propensity_score: 0.15,
│   ├── eligibility_rules: [...]
│   └── suppression_rules: [...]
│ }
├── S2_Engage: { ... }
└── S3_Convert: { ... }

Direction: From Segment Agent → To MCP Convergence
Frequency: Single transfer at end of Phase 2
Human Approval: Yes (Strategy Lead validates)
```

#### 4.4.3 MCP Connection Information

When clicking on MCP node:

```
MCP: Model Context Protocol Connection
API: Adobe RTCDP API v2
Authentication: OAuth 2.0
Endpoints Used:
  • GET /segments - Query available segments
  • POST /segments - Create new segment
  • PUT /segments/{id} - Update segment
  • POST /segments/{id}/activate - Activate segment

Rate Limits: 1000 req/min
Data Privacy: GDPR-compliant, all data encrypted
Scope: Read customer data, write segment definitions

Agent Capabilities:
  ✓ Query real-time customer data
  ✓ Create propensity-based segments
  ✓ Manage activation schedules
  ✓ Configure suppression rules
```

---

### 4.5 Status Tracking

#### 4.5.1 Node Status Indicators
Each node can have status:
- **Not Started** - Gray, disabled
- **In Progress** - Blue, pulsing border
- **Ready for Review** - Orange, solid border
- **Approved** - Green, checkmark
- **Blocked** - Red, with alert icon

**Visual:**
```
Node Status = 'approved'
├── Visual: Green checkmark overlay
├── Border: Solid green
├── Label: "✓ Approved by Sarah Chen"
└── Timestamp: "2024-03-17 2:30 PM"
```

#### 4.5.2 Implementation Checklist
Right sidebar shows:
```
┌─────────────────────────┐
│ Implementation Status   │
├─────────────────────────┤
│ Phase 1: Input         │
│ ☑ Business Owner Input │
│ ☑ Use Case Definition  │
│                        │
│ Phase 2: MCP Agents    │
│ ☐ Segment Agent       │
│ ☑ Analytics Agent     │
│ ☐ Campaign Agent      │
│                        │
│ Overall: 5/12 Complete │
│ Progress: ████░░░░░░░ 42%
│                        │
│ [Export Checklist]     │
└─────────────────────────┘
```

---

### 4.6 Collaboration Features

#### 4.6.1 Comments & Notes
- Click node → "Add Note" button
- Users can leave comments
- Notes show:
  - Author name
  - Timestamp
  - Text content
- Notes visible to team members

#### 4.6.2 Sharing & Export
- Share link to specific node/phase
- Export as:
  - PNG/SVG image
  - PDF report
  - JSON for integration
  - CSV checklist
  
**Export Example:**
```
Share Link: https://orchestration.example.com/flow?phase=2&node=segment_agent
PDF Export: [Business Owner→ MCP Agents→ Strategy Review flow chart with descriptions]
CSV Checklist: [All nodes with status, owner, due date, notes]
```

#### 4.6.3 User Permissions
- View Only: See flow, can't edit
- Contributor: Can add notes, mark status
- Admin: Can edit flow structure, manage access

---

## 5. TECHNICAL SPECIFICATIONS

### 5.1 Technology Stack

**Frontend:**
- React.js with TypeScript
- Canvas Library: Konva.js or React Flow
- State Management: Redux or Zustand
- Styling: Tailwind CSS
- Icons: Lucide React or custom SVGs

**Data Structure:**
- JSON-based flow definition
- Real-time sync with backend (WebSocket)
- Local caching for performance

**Backend:**
- Node.js/Express API
- Database: MongoDB/PostgreSQL
- Real-time: Socket.io
- Authentication: JWT + OAuth

### 5.2 Data Model

```typescript
interface FlowDiagram {
  id: string;
  name: string;
  version: string;
  phases: Phase[];
  connections: Connection[];
  metadata: FlowMetadata;
}

interface Phase {
  id: string;
  phaseNumber: number;
  title: string;
  description: string;
  nodes: Node[];
  backgroundColor: string;
  timeEstimate: string;
}

interface Node {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  category: 'input' | 'agent' | 'strategy' | 'ops' | 'execution' | 'optimization';
  icon: string;
  backgroundColor: string;
  inputs: Connection[];
  outputs: Connection[];
  details: NodeDetails;
  status: 'not_started' | 'in_progress' | 'ready_for_review' | 'approved' | 'blocked';
  assignee?: string;
  notes: Note[];
  relatedResources: Resource[];
}

interface NodeDetails {
  agentCoPilot: string;
  mcpAccess: MCPConnection[];
  capabilities: string[];
  humanActions: string[];
  timeEstimate: string;
  successCriteria: string[];
}

interface MCPConnection {
  toolName: string;
  apiEndpoint: string;
  authentication: string;
  requiredScopes: string[];
  dataExchanged: string;
}

interface Connection {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  dataType: string;
  label: string;
  connectionType: 'sequential' | 'feedback' | 'parallel';
  arrowColor: string;
}

interface Note {
  id: string;
  author: string;
  timestamp: Date;
  content: string;
  pinned: boolean;
}
```

---

## 6. USER EXPERIENCE FLOW

### 6.1 First-Time User Journey

```
1. User lands on flow diagram
   ↓
2. Sees all 6 phases laid out horizontally
   ↓
3. Reads "Start here" prompt pointing to Business Owner node
   ↓
4. Clicks Business Owner node
   ↓
5. Detail panel opens on right side
   ↓
6. User reads:
   - What is this component?
   - What inputs are needed?
   - What MCP/tools does it use?
   - What outputs does it produce?
   - Who approves it?
   ↓
7. User clicks arrow to next component
   ↓
8. Follows flow sequentially
   ↓
9. Reaches MCP Agents section
   ↓
10. Toggles "Technical View" to see MCP connections
   ↓
11. Explores each of 3 agents in parallel
   ↓
12. Continues through remaining phases
   ↓
13. At end, sees feedback loops
   ↓
14. Clicks feedback loop to understand optimization cycle
   ↓
15. User has now understood complete flow
```

---

## 7. SPECIFIC INTERACTIONS BY PHASE

### Phase 1: Business Owner Input
**Interactions:**
- Click "Business Owner" → See Workfront integration details
- Click "Use Case Definition" → See what outputs are generated
- Highlight path → Shows data flowing to Phase 2

### Phase 2: MCP Agents
**Interactions:**
- Click "Segment Agent" → See RTCDP MCP connection, capabilities
- Hover between 3 agents → Show parallel execution
- Click convergence point → See data merging from 3 agents
- Toggle "MCP View" → Show API calls and data schemas

### Phase 3: Strategy Review
**Interactions:**
- Click "Audience Strategy Lead" → See RTCDP validation steps
- Click "Creative Director" → See CJA analytics review
- Click "Creative Designer" → See DAM asset creation
- Hover over approval checkpoint → Show go/no-go criteria

### Phase 4: Operations
**Interactions:**
- Click "CDP Operations" → See RTCDP segment activation
- Click "Campaign Operations" → See Adobe Campaign setup
- Click "Creative Delivery" → See DAM operations
- Show deployment ready → All green checkmarks

### Phase 5: Execution
**Interactions:**
- Click "Multi-channel Delivery" → See email/SMS/push flow
- Click "Monitoring" → See real-time metrics dashboard
- Hover over metrics → Show example data

### Phase 6: Learning
**Interactions:**
- Click "Optimization" → See feedback loop process
- Hover over feedback arrows → Show data flowing back
- Click "Learning" → See ML model improvements

---

## 8. DETAILED NODE CONTENT

### Example: Segment Agent Node

**Title:** Segment Agent  
**Category:** MCP Agent  
**Phase:** 2  

**Overview:**
"The Segment Agent analyzes the business use case and customer data to create targeted audience cohorts (S1 Nurture, S2 Engage, S3 Convert) with propensity-based scoring. It uses MCP to connect to Adobe RTCDP in real-time."

**Key Capabilities:**
- ✓ Query RTCDP for available customer segments
- ✓ Analyze customer attributes (demographics, behavior, propensity)
- ✓ Create cohorts with propensity scoring (S1/S2/S3)
- ✓ Define suppression logic (existing customers, bounced emails, opt-outs)
- ✓ Configure real-time segment activation specs

**MCP Access:**
- **Tool:** Adobe Real-Time Customer Data Platform (RTCDP)
- **API:** RTCDP Segmentation API v2
- **Authentication:** OAuth 2.0
- **Key Endpoints:**
  - `GET /segments` - Query available segments
  - `GET /segment-definitions` - Fetch segment definitions
  - `POST /segments` - Create new segment
  - `PUT /segments/{id}` - Update segment
  - `POST /segments/{id}/activate` - Activate to channels

**Agent Co-Pilot:**
"An AI agent powered by LLM with MCP connection to RTCDP. It understands customer data structures, can reason about propensity scoring, and makes autonomous decisions about segment definitions while respecting data governance policies."

**Inputs:**
- **From:** Use Case Definition (Phase 1)
- **Data Type:** UseCaseDefinition (audience demographics, goals, constraints)
- **Required Fields:**
  - `targetAudience`: string[]
  - `budget`: number
  - `timeline`: DateRange
  - `kpis`: KPI[]

**Outputs:**
- **To:** MCP Convergence (Phase 2)
- **Data Type:** SegmentDefinitions
- **Contains:**
  ```json
  {
    "segments": [
      {
        "id": "s1_nurture",
        "name": "S1 - Nurture Cohort",
        "audienceSize": 250000,
        "propensityScore": 0.15,
        "eligibilityRules": [...],
        "suppressionRules": [...]
      },
      // ... S2, S3
    ],
    "activationSpec": {...}
  }
  ```

**Human Actions Required:**
1. **Review Segment Definitions**
   - Are the cohort sizes reasonable?
   - Do propensity scores match expectations?
   - Are suppression rules legally compliant?
   - Status: Approve / Modify / Reject

2. **Validate Data Quality**
   - Check data completeness (% of records with all fields)
   - Verify attribute accuracy
   - Confirm no data leakage
   - Status: Pass / Remediate

3. **Approve Activation**
   - Review channel activation settings
   - Confirm RTCDP sync cadence
   - Approve real-time vs. batch activation
   - Status: Approve / Hold

**Success Criteria:**
- ✓ S1/S2/S3 cohorts created with >90% data completeness
- ✓ Propensity scores validated by Strategy Lead
- ✓ Suppression rules cover all compliance requirements
- ✓ Segments activated in RTCDP and synced to channels
- ✓ Audience sizes match projections (±10%)

**Time Estimate:** 2-3 hours  
(1hr agent processing + 1-2hr human review/approval)

**Blockers:**
- ❌ If RTCDP API unavailable → Escalate to data team
- ❌ If data quality issues → Return to agent for remediation
- ❌ If propensity scores invalid → Request retraining

**Related Resources:**
- [RTCDP Segmentation Guide](https://docs.adobe.com/rtcdp-segments)
- [Propensity Model Training](https://docs.adobe.com/propensity-models)
- [Data Quality Framework](https://docs.adobe.com/data-quality)
- [MCP Connection Setup](https://docs.adobe.com/mcp-rtcdp)

**Feedback Loop:**
After campaign execution (Phase 5), this agent receives:
- Actual segment engagement rates
- Propensity score accuracy metrics
- Performance by segment
- Uses to improve next cycle's scoring

---

## 9. IMPLEMENTATION ROADMAP

### Phase 1: MVP (Week 1-2)
- ✓ Basic canvas with 6 phases
- ✓ 20 core nodes (1-2 per phase)
- ✓ Click to expand node details
- ✓ Static flow diagram (no backend)
- ✓ Read-only mode

### Phase 2: Interactions (Week 3-4)
- ✓ Highlight flow paths
- ✓ Search/filter nodes
- ✓ MCP connection visualization
- ✓ Data flow tooltips
- ✓ View modes (Beginner/Technical)

### Phase 3: Collaboration (Week 5-6)
- ✓ Comments & notes on nodes
- ✓ Status tracking
- ✓ Checklist view
- ✓ Export as PDF/PNG/CSV
- ✓ User authentication

### Phase 4: Advanced (Week 7-8)
- ✓ Real-time backend sync
- ✓ Customization
- ✓ Template library
- ✓ Analytics & metrics
- ✓ Integration with actual Adobe APIs

---

## 10. SUCCESS METRICS

- **Adoption:** 80% of team uses flow diagram in first month
- **Understanding:** 90% comprehension of flow after first interaction
- **Time Saved:** 30% reduction in onboarding time
- **Quality:** 95% accuracy in identifying flow dependencies
- **Collaboration:** 50+ collaborative notes per campaign
- **Exports:** 100+ exports per month

---

## 11. APPENDIX: COMPLETE NODE INVENTORY

Total Nodes: 21

**Phase 1 (2 nodes):**
1. Business Owner (Pillar A)
2. Use Case Definition Output

**Phase 2 (4 nodes):**
3. Segment Agent
4. Analytics Agent
5. Campaign Agent
6. MCP Convergence Output

**Phase 3 (4 nodes):**
7. Audience Strategy Lead
8. Creative Director
9. Creative Designer
10. Strategy Approval Checkpoint

**Phase 4 (4 nodes):**
11. CDP Operations
12. Campaign Operations
13. Creative Delivery
14. Deployment Ready

**Phase 5 (2 nodes):**
15. Multi-channel Delivery
16. Real-time Monitoring

**Phase 6 (3 nodes):**
17. Continuous Optimization
18. Feedback Loop - Segment Refinement
19. Feedback Loop - Content Optimization
20. Feedback Loop - Journey Adjustment
21. Final Outcome Loop

**Connections:** 30+ (forward sequential + feedback loops)

---

**Document Version:** 1.0  
**Last Updated:** 2024-03-17  
**Owner:** Product Team  
**Status:** Ready for Development  
