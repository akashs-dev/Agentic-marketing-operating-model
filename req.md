# Business Owner (Pillar A) → MCP Orchestration → Execution Flow

## System Architecture Overview

This document describes the complete agentic marketing orchestration flow starting from a single Business Owner pillar input through MCP agent processing to campaign execution and continuous optimization.

**Key Principle:** MCP (Model Context Protocol) acts as the standardized bridge that allows AI agents to seamlessly connect to Adobe marketing tools and execute campaigns autonomously without human-to-human handoffs.

---

## PHASE 1: BUSINESS OWNER USE CASE DEFINITION

### Input: Business Owner (Pillar A)
**Tool:** Adobe Workfront  
**Role:** Business Owner defines campaign strategy

**What the Business Owner provides:**
- **Campaign Goals:** Conversion targets, engagement objectives, business KPIs
- **Target Audience:** Demographics, segments to target, industries, behaviors
- **Budget & Timeline:** Campaign spend, start/end dates, frequency caps
- **Performance Expectations:** ROI targets, volume expectations, success metrics

**Agent Co-Pilot Involvement:**
- **Use Case Planning Agent** analyzes all inputs
- Pulls historical campaign data and benchmarks
- Applies historical/behavioral data patterns
- Drafts comprehensive use case brief with:
  - Audience estimates (list sizes, engagement predictions)
  - ROI projections based on similar past campaigns
  - Channel recommendations prioritized by historical performance
  - Suggested messaging angles and themes
  - Expected volume and engagement curves

**Output:**
```
Use Case Brief containing:
├── Audience estimates & propensity predictions
├── ROI & revenue projections
├── Recommended channel mix (Email, SMS, Push, Web)
├── Historical benchmarks for this audience type
├── Baseline engagement rate assumptions
└── Suggested personalization strategy framework
```

**Human Action:** Business owner reviews and approves/modifies the brief

---

## PHASE 2: MCP AGENTS ORCHESTRATION (Parallel Processing)

**Architecture:** Three specialized MCP agents process the use case in parallel, each with secure API access to their respective systems via MCP protocol.

### How MCP Works Here:
Model Context Protocol standardizes how AI agents talk to the tools marketers use every day, allowing AI agents to pull real-time customer data and match it with content libraries to deliver messages tailored to micro-segments.

The orchestrator agent coordinates all three agents simultaneously:

---

### AGENT 1: SEGMENT AGENT
**MCP Access:** RTCDP (Real-Time Customer Data Platform)  
**Tool:** Adobe Audience Manager + RTCDP API

**Process:**
1. Receives audience definition from use case brief
2. **MCP call to RTCDP:** Queries available customer segments
3. Analyzes customer attributes:
   - Demographic data (age, location, industry)
   - Behavioral signals (browsing, purchase history, engagement)
   - Propensity scores (likelihood to convert, churn risk)
4. Creates/refines audience cohorts:
   - **S1 (Nurture):** Cold prospects, low engagement history
   - **S2 (Engage):** Warm leads, moderate engagement
   - **S3 (Convert):** Hot prospects, high purchase intent
5. Defines suppression logic:
   - Already customers (exclude from acquisition)
   - Bounced emails (exclude temporarily)
   - Opt-out list (legal compliance)
6. Calculates propensity-based models:
   - Likelihood to open email
   - Likelihood to click CTA
   - Likelihood to convert
   - Churn risk score

**Output:**
```
Segment Definitions:
├── S1 Nurture Cohort: 250,000 prospects (propensity: 15% conversion)
├── S2 Engage Cohort: 85,000 warm leads (propensity: 28% conversion)
├── S3 Convert Cohort: 12,000 hot prospects (propensity: 45% conversion)
├── Suppression Rules: [existing customers, bounced, opt-outs]
├── RTCDP Activation Specs: [field mapping, sync cadence]
└── Audience Quality Report: [data completeness, missing attributes]
```

---

### AGENT 2: ANALYTICS AGENT
**MCP Access:** CJA (Customer Journey Analytics) + Adobe Analytics  
**Tool:** Adobe Analytics API + CJA API

**Process:**
1. Receives use case brief and segment definitions
2. **MCP call to CJA:** Pulls historical campaign performance data
3. Analyzes past campaigns targeting similar audiences:
   - Which channels performed best? (Email 3.2% CTR, SMS 5.8% CTR)
   - Which messaging themes resonated? (Product demos > feature lists)
   - Which send times optimal for this audience? (Tuesday 2pm best)
   - What was the conversion path? (Email → website → signup)
4. Performs attribution analysis:
   - Which channels drove conversion?
   - What was the customer journey sequence?
   - How many touchpoints before conversion?
5. Calculates benchmarks for recommendations:
   - Expected open rate based on audience segment
   - Expected click-through rate by channel
   - Expected conversion rate by message type
6. Identifies performance gaps:
   - Areas where this audience underperforms vs. average
   - High-opportunity messaging angles
   - Channel underutilization

**Output:**
```
Analytics Insights:
├── Historical Performance by Segment:
│  ├── S1: Avg open 18%, CTR 2.1%, Conv 0.8%
│  ├── S2: Avg open 28%, CTR 4.2%, Conv 2.5%
│  └── S3: Avg open 35%, CTR 7.8%, Conv 6.2%
├── Channel Performance Ranking:
│  ├── Email (primary): 3.2% CTR, 1.8% conversion
│  ├── SMS (secondary): 5.8% CTR, 2.1% conversion
│  └── Push (tertiary): 2.1% CTR, 0.9% conversion
├── Optimal Send Times: Tuesday 2PM, Wednesday 10AM
├── Message Themes That Won: [product demo, case study, free trial]
├── Expected Lift vs. Control: +22% if using best practices
└── Attribution Model: 60% email, 25% SMS, 15% push
```

---

### AGENT 3: CAMPAIGN AGENT
**MCP Access:** CJA (Journey data) + Past campaign histories  
**Tool:** Adobe Analytics API + Campaign history

**Process:**
1. Receives use case brief, segments, and analytics insights
2. **MCP call to CJA:** Pulls journey template library (past successful campaigns)
3. Analyzes proven journey structures for this audience:
   - What sequence of messages drives highest conversion?
   - How many emails before opt-out increases?
   - What's the optimal frequency cap?
   - When should sequences branch vs. stay linear?
4. Generates personalized journey blueprint:
   - Email 1 (Day 1): Introduction + value prop
   - Email 2 (Day 3): Product demo or case study
   - Email 3 (Day 5): Offer/CTA or social proof
   - Email 4 (Day 10): Urgency/closing (only if S3)
5. Defines trigger-based orchestration:
   - When user clicks email → advance to next sequence
   - When user abandons cart → send win-back email
   - When user browses pricing → send ROI calculator
6. Creates cadence rules:
   - S1 cohort: 1 email every 3 days (low frequency)
   - S2 cohort: 1 email every 2 days (medium)
   - S3 cohort: 1 email daily + SMS (high frequency)

**Output:**
```
Campaign Blueprint:
├── Journey Structure (4-week campaign):
│  ├── S1 Journey: [Email] → [Wait 3 days] → [Email] → [Wait 3 days] → [Email]
│  ├── S2 Journey: [Email] → [SMS] → [Wait 2 days] → [Email] → [Push]
│  └── S3 Journey: [Email] → [SMS] → [Email] → [Push] → [Email + Offer]
├── Message Sequence:
│  ├── Email 1: "Why [Audience] chooses us" (demo)
│  ├── Email 2: "See [specific result] in 30 days" (case study)
│  └── Email 3: "Limited offer ends [date]" (urgency)
├── Trigger Logic:
│  ├── Email open → advance sequence
│  ├── Link click → advance sequence
│  ├── No engagement after 7 days → send re-engagement email
│  └── Already customer → suppress from campaign
├── Frequency Rules: [S1: 1/3 days, S2: 1/2 days, S3: daily + SMS]
├── Expected Performance: 28% open, 4.5% CTR, 2.1% conversion
└── Estimated Revenue Impact: $245,000 projected revenue
```

---

## PHASE 3: STRATEGY LEADS REVIEW & REFINEMENT

The outputs from the three MCP agents converge into a comprehensive use case brief. Strategy leads from three disciplines review and refine:

### Role 1: Audience Strategy Lead
**Tool:** Adobe Target / RTCDP  
**MCP Access:** RTCDP API

**Responsibilities:**
- Validates audience segments from Segment Agent
- Reviews propensity scores for accuracy
- Checks for audience overlap or gaps
- Confirms RTCDP eligibility rules are correct
- Ensures data quality and completeness
- **Human Action:** "Segmentation Agent proposes cohorts (S1/S2/S3), suppression logic, and propensity-based models using RTCDP and banking attributes."
  - Validates: Are propensity scores reasonable?
  - Checks: Are suppression rules legally compliant?
  - Approves: Cohort definitions and activation specs

**Output:** Validated segment definitions ready for CDP operations

---

### Role 2: Creative Director & Insights
**Tool:** Adobe GenStudio / CJA  
**MCP Access:** CJA API for attribution insights

**Responsibilities:**
- Reviews analytics insights from Analytics Agent
- Defines final messaging narrative
- Approves key message themes and angles
- Creates messaging hierarchy (primary/secondary/tertiary)
- **Human Action:** "Insights Agent provides attribution on past performance, messaging themes by segment, and content gaps."
  - Reviews: What messaging themes actually won?
  - Defines: Final brand narrative and voice
  - Approves: Messaging strategy document

**Output:** Final messaging framework & narrative strategy

---

### Role 3: Creative Designer
**Tool:** Adobe AEM / DAM (Asset Management)  
**MCP Access:** DAM API for asset management

**Responsibilities:**
- Reviews campaign blueprint from Campaign Agent
- Designs email templates and creative assets
- Aligns assets with messaging framework
- **Human Action:** "Creative Agent suggests copy variations, image placeholders, and metadata tags aligned to channels."
  - Designs: Final email templates and layouts
  - Creates: Copy variations (3-5 per email)
  - Uploads: All assets to Adobe DAM with metadata
  - Links: Assets to sequences in campaign

**Output:** All creative assets in DAM, ready for deployment

---

### APPROVAL CHECKPOINT
**Question:** Are all strategy components validated and approved?
- ✅ Segments defined and validated
- ✅ Messaging narrative finalized
- ✅ Creative assets designed and uploaded
- ✅ Journey blueprint approved

**Decision:** Proceed to Operations Setup

---

## PHASE 4: OPERATIONS SETUP & DEPLOYMENT

Three operations teams prepare the technical infrastructure for execution:

### Operations 1: CDP Operations
**Tool:** RTCDP  
**MCP Access:** RTCDP API, segment activation APIs

**Responsibility:**
- "CDP Operations - RTCDP - Agent Co-pilot: Drafts RTCDP segment definitions, eligibility rules, and pre-configured channel sync."
- Creates segment definitions in RTCDP matching Agent output
- Configures eligibility rules and data quality checks
- Sets up real-time segment refresh cadence
- Pre-configures channel sync (email, SMS, push)

**Human Action:** "Validates customer eligibility, data quality, and manually triggers creation."
- Validates: Are segments properly configured?
- Tests: Can segments be activated?
- Approves: Segment creation in RTCDP

**Output:** Activated audience segments in RTCDP, ready to push to execution channels

---

### Operations 2: Campaign Operations
**Tool:** Adobe Campaign  
**MCP Access:** Campaign API, workflow APIs

**Responsibility:**
- Creates campaign structure in Adobe Campaign
- Configures journey workflows (matching blueprint)
- Links segments to offers and sequences
- Sets up delivery pipelines and rate limiting
- Pre-loads creative assets into campaign

**Human Action:** "Configures email workflows, asset references, and channel sync."
- Sets up: Campaign workflows with sequences
- Tests: Workflow logic and triggers
- Approves: Campaign ready for launch

**Output:** Adobe Campaign configured with all workflows, ready to send

---

### Operations 3: Creative Delivery
**Tool:** Adobe AEM / DAM  
**MCP Access:** DAM/AEM APIs

**Responsibility:**
- Finalizes all creative assets in DAM
- Tags assets with metadata for personalization
- Links assets to email templates in Adobe Campaign
- Sets up dynamic content blocks (personalization logic)

**Human Action:** "Designs final assets and uploads to Adobe DAM and AEM."
- Finalizes: All creative variations
- Uploads: To DAM with proper metadata
- Links: To campaign sequences
- Approves: Creative deployment

**Output:** All assets in DAM linked to campaign sequences

---

## PHASE 5: CAMPAIGN EXECUTION & OPTIMIZATION

### Execution Start
**Trigger:** Business owner clicks "Launch Campaign"

**What Happens:**
1. RTCDP activates segments across all channels
2. Adobe Campaign begins sending sequences
3. Emails go out to S1/S2/S3 cohorts on optimized send times
4. SMS/Push triggered based on email engagement
5. Web personalization rules apply to site visitors

### Real-Time Monitoring
With agentic systems, your analytics agent can alert your campaign agent when something goes off track, which then pings the creative agent to generate a new ad or adjust the call-to-action, all through automated communication.

**Metrics Tracked (Real-time):**
- Email metrics: Open rate, click rate, unsubscribe rate
- Conversion metrics: Form fills, purchases, signups
- Segment performance: Which cohort performs best?
- Channel performance: Email vs SMS vs Push
- Anomalies: Unexpected drops in engagement

**Automated Actions:**
- If CTR drops >20% → pause segment
- If early A/B winner evident → shift more traffic to winner
- If unsubscribe rate >2% → reduce frequency
- If conversion rate >5% → increase budget to segment

---

## PHASE 6: CONTINUOUS OPTIMIZATION & LEARNING

### Feedback Loops to MCP Agents

**Segment Agent receives:**
- Engagement data: Which segment performed best?
- Propensity accuracy: Were predictions correct?
- Recommendations: Refine segments for next campaign

**Analytics Agent receives:**
- What actually worked: Which channels/messages drove conversion?
- Attribution data: What was the actual customer journey?
- Learning: Update benchmarks and predictions

**Campaign Agent receives:**
- Sequence performance: Which emails drove conversions?
- Timing data: Did send time optimization work?
- Recommendations: Optimize journey for next campaign

**Output:** ML models improve, next campaign starts with better predictions and strategies

---

## Key MCP Capabilities Used

### What MCP Enables:
MCP creates universal agency—the ability for AI to act seamlessly across any compatible tool in your marketing stack. This means seamless tool integration, contextual awareness across tools, adaptive workflows, and progressive automation.

In this flow, MCP enables:

1. **Segment Agent → RTCDP** (real-time data access)
   - Query available segments
   - Check data quality
   - Activate segments

2. **Analytics Agent → CJA** (historical performance access)
   - Pull campaign history
   - Analyze customer journeys
   - Calculate benchmarks

3. **Campaign Agent → CJA + Adobe Campaign** (workflow access)
   - Design journey blueprints
   - Configure sequences
   - Activate campaigns

4. **CDP Operations → RTCDP** (segment management)
   - Create segments at scale
   - Manage eligibility rules
   - Monitor activation

5. **Campaign Operations → Adobe Campaign** (workflow execution)
   - Launch sequences
   - Monitor delivery
   - Adjust in real-time

6. **Creative Delivery → Adobe DAM** (asset management)
   - Upload and tag assets
   - Link to campaigns
   - Version control

---

## Data Flow Architecture

```
Business Owner Input
        ↓
Use Case Brief (planning agent output)
        ↓
    ┌───┴───┬───────┬───────┐
    ↓       ↓       ↓       ↓
  Segment  Analytics Campaign
   Agent    Agent    Agent
  (RTCDP)  (CJA)    (CJA)
    ↓       ↓       ↓
    └───┬───┴───────┴───┘
        ↓
   Strategy Brief
        ↓
  (Strategy Leads Review)
        ↓
    ┌───┴───┬───────┬───────┐
    ↓       ↓       ↓       ↓
   CDP    Campaign Creative
   Ops      Ops    Delivery
  (RTCDP) (Campaign) (DAM)
    ↓       ↓       ↓
    └───┬───┴───────┴───┘
        ↓
   Campaign Live
        ↓
 Multi-channel Execution
        ↓
Real-time Monitoring
        ↓
      Learning
        ↓
    Optimization
```

---

## Summary: Time to Value

**Traditional Approach:** 2-3 weeks (manual briefs, creative reviews, testing)
- Week 1: Planning & strategy alignment
- Week 2: Creative development & approval
- Week 3: Technical setup, QA, launch

**Agentic Orchestration (this flow):** 2-3 days
- Day 1: Business owner defines use case → MCP agents process in parallel
- Day 2: Strategy leads refine → Operations setup
- Day 3: Launch → Monitor → Optimize

**Impact:** Instead of spending 80% of time building campaigns and 20% analyzing them, agentic systems allow marketers to spend 80% on strategy and creativity while AI agents handle 100% of execution and optimization.

---

## Governance & Controls

**Who has authority:**
- Business Owner: Sets goals and approves strategy
- Strategy Leads: Review and approve creative direction
- Operations Teams: Responsible for technical accuracy
- Monitoring System: Alerts on anomalies, escalates to humans

**What's automated:**
- Data analysis and recommendations (agents)
- Segment creation and activation (agents)
- Campaign workflow configuration (agents)
- Creative asset management (agents)
- Real-time optimization (agents)
- Anomaly detection (agents)

**What requires human approval:**
- Use case strategy
- Creative narrative and assets
- Segment eligibility and suppression rules
- Campaign launch
- Budget and frequency cap overrides

---

## Compliance & Data Privacy

**MCP Architecture ensures:**
- APIs enforce governance—who can access what data and what actions they're authorized to perform.
- Agents operate only with authorized API permissions
- All data accessed through secure MCP protocols
- No raw data export—agents query and transform only
- Audit logs track all agent actions
- GDPR/CCPA compliance via RTCDP privacy rules
- Suppression lists automatically enforced

---

**End of Flow Documentation**