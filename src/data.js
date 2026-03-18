import { Users, Target, Zap, BarChart2, Briefcase, Settings, Palette, Server, FileText, LayoutTemplate, Database } from 'lucide-react';

export const NODES = [
  // Column 1
  {
    id: 'business_owner',
    title: 'Business Owner (PL)',
    adobeTool: 'WORKFRONT / COPILOT',
    icon: Briefcase,
    agentPush: 'Use Case PA drafts brief with Audience estimates. Cross-checks historical data.',
    humanAction: 'Business owner works with Use Case Co-pilot to define strategy and constraints.',
    x: 50,
    y: 50,
    lane: 'strategy',
    dependsOn: []
  },
  // Column 2
  {
    id: 'use_case_brief',
    title: 'Outcome: Detailed Brief',
    adobeTool: 'DOCUMENT',
    icon: FileText,
    agentPush: 'Contains defined KPIs, cohorts (S1/S2), and budget constraints securely.',
    humanAction: 'Final review before passing to automated MCP orchestration.',
    x: 480,
    y: 50,
    lane: 'strategy',
    dependsOn: ['business_owner']
  },
  // Column 3
  {
    id: 'mcp_initial',
    title: 'MCP Orchestrator',
    adobeTool: 'API BRIDGE',
    icon: Server,
    agentPush: 'Routes the use case brief to specialized agents based on context.',
    humanAction: 'No human action required. Automated secure API routing.',
    x: 910,
    y: 50,
    lane: 'strategy',
    dependsOn: ['use_case_brief']
  },
  // Column 4 (Parallel Agents)
  {
    id: 'seg_agent',
    title: 'Seg Agent',
    adobeTool: 'RTCDP AI',
    icon: Users,
    agentPush: 'Analyzes big query data for audience segmentation & propensities.',
    humanAction: 'None (Autonomous).',
    x: 1340,
    y: -100,
    lane: 'strategy',
    dependsOn: ['mcp_initial']
  },
  {
    id: 'an_agent',
    title: 'An Agent (CJA)',
    adobeTool: 'CJA AI',
    icon: BarChart2,
    agentPush: 'Analyzes historical insights, performance loops, and attribution.',
    humanAction: 'None (Autonomous).',
    x: 1340,
    y: 100,
    lane: 'strategy',
    dependsOn: ['mcp_initial']
  },
  {
    id: 'camp_agent',
    title: 'Camp Agent',
    adobeTool: 'CAMPAIGN AI',
    icon: Zap,
    agentPush: 'Drafts initial journey cadences and frequency limits.',
    humanAction: 'None (Autonomous).',
    x: 1340,
    y: 300,
    lane: 'strategy',
    dependsOn: ['mcp_initial']
  },
  // Column 5 (Main Leads)
  {
    id: 'audience_lead',
    title: 'Audience Strategy Lead',
    adobeTool: 'RTCDP / CJA',
    icon: Users,
    agentPush: 'Segmentation Agent proposes list S1, S2, S3, S4 cohorts and propensity scores.',
    humanAction: 'Reviews use case detailed brief and adjusts segmentation logic.',
    x: 1770,
    y: 100,
    lane: 'strategy',
    dependsOn: ['seg_agent', 'an_agent', 'camp_agent']
  },
  {
    id: 'creative_lead',
    title: 'Creative Strategy Lead',
    adobeTool: 'GENSTUDIO / CJA',
    icon: Target,
    agentPush: 'Content Agent uses Analytic Agent insights to draft messaging hierarchy.',
    humanAction: 'Reviews performance insights and finalizes the brand narrative.',
    x: 1770,
    y: 400,
    lane: 'strategy',
    dependsOn: ['audience_lead']
  },
  {
    id: 'campaign_lead',
    title: 'Campaign Strategy Lead',
    adobeTool: 'ADOBE CAMPAIGN',
    icon: Zap,
    agentPush: 'Campaign Agent generates omnichannel journey blueprint (cadence, triggers).',
    humanAction: 'Adjusts frequency, timing, and approves the journey logic template.',
    x: 1770,
    y: 700,
    lane: 'strategy',
    dependsOn: ['creative_lead']
  },
  // Right Side Operations
  {
    id: 'mcp_rtcdp',
    title: 'MCP',
    adobeTool: 'API TO RTCDP',
    icon: Server,
    agentPush: 'Routes segment definitions mapping schemas directly to RTCDP.',
    humanAction: 'Automated transfer.',
    x: 2200,
    y: 100,
    lane: 'ops',
    dependsOn: ['audience_lead']
  },
  {
    id: 'cdp_ops',
    title: 'CDP Audience Operator',
    adobeTool: 'ADOBE RTCDP',
    icon: Settings,
    agentPush: 'Drafts segments S1, S2, S3, S4 autonomously in Adobe RTCDP via MCP.',
    humanAction: 'Validates customer eligibility, data quality, and approves segment creation.',
    x: 2630,
    y: 100,
    lane: 'ops',
    dependsOn: ['mcp_rtcdp']
  },
  {
    id: 'mcp_creative',
    title: 'MCP',
    adobeTool: 'API TO AEM/DAM',
    icon: Server,
    agentPush: 'Routes creative variants directly to CMS systems.',
    humanAction: 'Automated transfer.',
    x: 2200,
    y: 400,
    lane: 'design',
    dependsOn: ['creative_lead']
  },
  {
    id: 'creative_designer',
    title: 'Creative Designer',
    adobeTool: 'AEM / DAM',
    icon: Palette,
    agentPush: 'Content Agent suggests top variants, copy, and image placeholders via MCP.',
    humanAction: 'Finalizes templates in AEM and assets in DAM with proper metadata.',
    x: 2630,
    y: 400,
    lane: 'design',
    dependsOn: ['mcp_creative']
  },
  {
    id: 'aem_tool',
    title: 'AEM (Templates)',
    adobeTool: 'ADOBE AEM',
    icon: LayoutTemplate,
    agentPush: 'Stores finalized email/page templates.',
    humanAction: 'Designer structures the layout here.',
    x: 3060,
    y: 250,
    lane: 'design',
    dependsOn: ['creative_designer']
  },
  {
    id: 'dam_tool',
    title: 'DAM (Assets)',
    adobeTool: 'ADOBE DAM',
    icon: Database,
    agentPush: 'Stores finalized images, copy, and creative assets.',
    humanAction: 'Designer uploads tagged assets here.',
    x: 3060,
    y: 550,
    lane: 'design',
    dependsOn: ['creative_designer']
  },
  {
    id: 'campaign_ops',
    title: 'Campaign Operations',
    adobeTool: 'ADOBE CAMPAIGN',
    icon: Settings,
    agentPush: 'Configures email workflows, asset references, and channel sync automatically.',
    humanAction: 'Tests workflow logic and triggers. Approves the final campaign launch.',
    x: 2200,
    y: 700,
    lane: 'ops',
    dependsOn: ['campaign_lead']
  }
];

export const CONNECTIONS = [
  { source: 'business_owner', target: 'use_case_brief' },
  { source: 'use_case_brief', target: 'mcp_initial' },
  { source: 'mcp_initial', target: 'seg_agent' },
  { source: 'mcp_initial', target: 'an_agent' },
  { source: 'mcp_initial', target: 'camp_agent' },
  { source: 'seg_agent', target: 'audience_lead' },
  { source: 'an_agent', target: 'audience_lead' },
  { source: 'camp_agent', target: 'audience_lead' },
  { source: 'audience_lead', target: 'mcp_rtcdp' },
  { source: 'mcp_rtcdp', target: 'cdp_ops' },
  { source: 'audience_lead', target: 'creative_lead' },
  { source: 'creative_lead', target: 'mcp_creative' },
  { source: 'mcp_creative', target: 'creative_designer' },
  { source: 'creative_designer', target: 'aem_tool' },
  { source: 'creative_designer', target: 'dam_tool' },
  { source: 'creative_lead', target: 'campaign_lead' },
  { source: 'campaign_lead', target: 'campaign_ops' }
];

export const AGENTS = [
  {
    id: 'planning_agent',
    name: 'Use Case Planning Agent',
    description: 'Analyzes inputs, pulls historical campaign data, and drafts comprehensive use case briefs.',
    icon: Briefcase,
    bg: 'bg-indigo-50',
    color: 'text-indigo-600',
    border: 'border-indigo-100',
    agentType: 'brief_generator',
    replaces: 'Initial Strategy Planning & Research',
    adobeTool: 'Adobe Workfront'
  },
  {
    id: 'segmentation_agent',
    name: 'Segmentation Agent',
    description: 'Proposes cohorts, suppression logic, and propensity-based models using banking attributes.',
    icon: Users,
    bg: 'bg-emerald-50',
    color: 'text-emerald-600',
    border: 'border-emerald-100',
    agentType: 'segment_builder',
    replaces: 'Manual Audience Querying & Sizing',
    adobeTool: 'RTCDP / Adobe Audience Manager'
  },
  {
    id: 'campaign_agent',
    name: 'Campaign Agent',
    description: 'Generates omnichannel journey blueprints based on past performance history and benchmarks.',
    icon: Zap,
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    border: 'border-blue-100',
    agentType: 'journey_orchestrator',
    replaces: 'Journey Mapping & Workflow Building',
    adobeTool: 'Adobe Campaign'
  },
  {
    id: 'personalisation_agent',
    name: 'Personalisation Agent',
    description: 'Recommends A/B test ideas and targeting rules based on real-time behavioral signals.',
    icon: Target,
    bg: 'bg-purple-50',
    color: 'text-purple-600',
    border: 'border-purple-100',
    agentType: 'variant_generator',
    replaces: 'Manual Test Design & Variable Selection',
    adobeTool: 'Adobe Target / GenStudio'
  },
  {
    id: 'insights_agent',
    name: 'Insights Agent',
    description: 'Provides attribution insights, funnel diagnostics, and real-time anomaly detection.',
    icon: BarChart2,
    bg: 'bg-rose-50',
    color: 'text-rose-600',
    border: 'border-rose-100',
    agentType: 'anomaly_detector',
    replaces: 'Manual Dashboarding & Data Extraction',
    adobeTool: 'Customer Journey Analytics (CJA)'
  }
];
