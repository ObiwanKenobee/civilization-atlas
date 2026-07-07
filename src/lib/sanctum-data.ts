// Mock stewardship data for Atlas Sanctum. Presentation-only civic figures.

export type Trend = "up" | "down" | "flat";

export interface HealthDomain {
  key: string;
  name: string;
  score: number;
  trend: Trend;
  delta: string;
  insight: string;
  projected: number;
  confidence: number;
  accent: "gold" | "verdant" | "azure" | "amethyst" | "ember";
}

export const CIVILIZATION_HEALTH = 87.4;

export const healthDomains: HealthDomain[] = [
  {
    key: "trust",
    name: "Public Trust",
    score: 82.1,
    trend: "up",
    delta: "+4.0%",
    insight: "Transparency reforms lifted trust across three provinces.",
    projected: 85.6,
    confidence: 0.88,
    accent: "gold",
  },
  {
    key: "economy",
    name: "Economic Vitality",
    score: 79.4,
    trend: "up",
    delta: "+2.3%",
    insight: "SME formation accelerating; export diversity improving.",
    projected: 83.0,
    confidence: 0.81,
    accent: "azure",
  },
  {
    key: "environment",
    name: "Environmental Recovery",
    score: 74.8,
    trend: "up",
    delta: "+6.1%",
    insight: "Reforestation ahead of schedule; carbon balance nearing neutral.",
    projected: 80.2,
    confidence: 0.9,
    accent: "verdant",
  },
  {
    key: "education",
    name: "Education",
    score: 88.3,
    trend: "up",
    delta: "+1.5%",
    insight: "Literacy and STEM enrollment gains sustained nationwide.",
    projected: 90.1,
    confidence: 0.86,
    accent: "amethyst",
  },
  {
    key: "healthcare",
    name: "Healthcare",
    score: 84.0,
    trend: "flat",
    delta: "+0.2%",
    insight: "Access strong; procurement risk requires review this quarter.",
    projected: 85.4,
    confidence: 0.74,
    accent: "ember",
  },
  {
    key: "innovation",
    name: "Innovation",
    score: 76.9,
    trend: "up",
    delta: "+3.4%",
    insight: "Research grants yielding measurable patent and startup growth.",
    projected: 82.5,
    confidence: 0.79,
    accent: "azure",
  },
  {
    key: "infrastructure",
    name: "Infrastructure",
    score: 81.2,
    trend: "up",
    delta: "+2.8%",
    insight: "Road and water systems expanding; bridge program slightly delayed.",
    projected: 84.0,
    confidence: 0.83,
    accent: "gold",
  },
  {
    key: "justice",
    name: "Justice",
    score: 77.5,
    trend: "up",
    delta: "+1.1%",
    insight: "Case backlog reduced 12% through digital courts.",
    projected: 80.0,
    confidence: 0.77,
    accent: "amethyst",
  },
  {
    key: "security",
    name: "Security",
    score: 85.6,
    trend: "flat",
    delta: "-0.3%",
    insight: "Stable posture; localized climate-displacement pressures monitored.",
    projected: 86.0,
    confidence: 0.82,
    accent: "ember",
  },
];

export interface PulseStat {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
}

export const civilizationPulse: PulseStat[] = [
  { label: "Population", value: "58.2M", delta: "+1.4%", trend: "up" },
  { label: "GDP", value: "$412.8B", delta: "+3.1%", trend: "up" },
  { label: "Natural Capital", value: "$1.94T", delta: "+2.2%", trend: "up" },
  { label: "Tax Revenue", value: "$96.4B", delta: "+8.0%", trend: "up" },
  { label: "Public Debt", value: "48.6% GDP", delta: "-1.9%", trend: "down" },
  { label: "Budget Utilization", value: "78.3%", delta: "+2.6%", trend: "up" },
  { label: "Carbon Balance", value: "-2.1 Mt", delta: "improving", trend: "down" },
  { label: "Food Security", value: "91.2%", delta: "+0.9%", trend: "up" },
  { label: "Employment", value: "94.1%", delta: "+0.7%", trend: "up" },
  { label: "Innovation Index", value: "72.4", delta: "+3.4", trend: "up" },
];

export interface Ministry {
  name: string;
  utilization: number;
  approved: string;
  spent: string;
  remaining: string;
  impact: number;
  sentiment: number;
  risk: "Low" | "Moderate" | "Elevated";
}

export const ministries: Ministry[] = [
  { name: "Education", utilization: 74, approved: "$18.4B", spent: "$13.6B", remaining: "$4.8B", impact: 92, sentiment: 84, risk: "Low" },
  { name: "Healthcare", utilization: 91, approved: "$21.1B", spent: "$19.2B", remaining: "$1.9B", impact: 84, sentiment: 79, risk: "Elevated" },
  { name: "Agriculture", utilization: 61, approved: "$9.8B", spent: "$6.0B", remaining: "$3.8B", impact: 88, sentiment: 81, risk: "Moderate" },
  { name: "Transport", utilization: 82, approved: "$16.2B", spent: "$13.3B", remaining: "$2.9B", impact: 79, sentiment: 72, risk: "Moderate" },
  { name: "Energy", utilization: 68, approved: "$12.5B", spent: "$8.5B", remaining: "$4.0B", impact: 86, sentiment: 77, risk: "Low" },
  { name: "Justice", utilization: 57, approved: "$6.1B", spent: "$3.5B", remaining: "$2.6B", impact: 80, sentiment: 74, risk: "Low" },
];

export interface RevenueStream {
  name: string;
  value: string;
  share: number;
  accent: "gold" | "verdant" | "azure" | "amethyst" | "ember";
}

export const revenueStreams: RevenueStream[] = [
  { name: "Income Tax", value: "$28.6B", share: 30, accent: "gold" },
  { name: "VAT", value: "$21.2B", share: 22, accent: "azure" },
  { name: "Corporate", value: "$16.8B", share: 17, accent: "amethyst" },
  { name: "Customs", value: "$9.4B", share: 10, accent: "ember" },
  { name: "Digital Economy", value: "$7.1B", share: 7, accent: "azure" },
  { name: "Carbon Credits", value: "$6.3B", share: 7, accent: "verdant" },
  { name: "Innovation Credits", value: "$3.8B", share: 4, accent: "amethyst" },
  { name: "Biodiversity Credits", value: "$3.2B", share: 3, accent: "verdant" },
];

export interface TreasuryPanel {
  label: string;
  value: string;
  sub: string;
  trend: Trend;
}

export const treasuryPanels: TreasuryPanel[] = [
  { label: "Treasury Balance", value: "$142.6B", sub: "Consolidated fund", trend: "up" },
  { label: "Cash Flow (30d)", value: "+$4.8B", sub: "Net inflow", trend: "up" },
  { label: "Grants", value: "$12.1B", sub: "Multilateral & bilateral", trend: "up" },
  { label: "Loans", value: "$34.7B", sub: "Sovereign obligations", trend: "flat" },
  { label: "Public Assets", value: "$1.94T", sub: "Land, infra, holdings", trend: "up" },
  { label: "Digital Assets", value: "$8.9B", sub: "Reserve tokens", trend: "up" },
  { label: "Emergency Reserve", value: "$27.5B", sub: "6.2 months cover", trend: "flat" },
  { label: "AI Forecast", value: "+8.0%", sub: "Revenue outlook", trend: "up" },
];

export interface ImpactProject {
  name: string;
  impact: number;
  lives: string;
  jobs: string;
  co2: string;
  communities: string;
  savings: string;
  roh: number;
}

export const impactProjects: ImpactProject[] = [
  { name: "National Road Network", impact: 91, lives: "3.2M", jobs: "48,000", co2: "−0.4 Mt", communities: "212", savings: "$6.1B", roh: 4.2 },
  { name: "Universal School Program", impact: 95, lives: "5.8M", jobs: "31,000", co2: "−0.1 Mt", communities: "540", savings: "$9.4B", roh: 5.8 },
  { name: "Regional Hospital Expansion", impact: 84, lives: "2.1M", jobs: "12,500", co2: "−0.05 Mt", communities: "96", savings: "$3.7B", roh: 3.9 },
  { name: "Forest Restoration Initiative", impact: 99, lives: "1.4M", jobs: "22,000", co2: "−2.9 Mt", communities: "310", savings: "$4.8B", roh: 6.7 },
  { name: "Clean Water Systems", impact: 93, lives: "4.1M", jobs: "18,400", co2: "−0.2 Mt", communities: "428", savings: "$5.2B", roh: 5.1 },
];

export interface ReturnDimension {
  label: string;
  value: number;
  accent: "gold" | "verdant" | "azure" | "amethyst" | "ember";
}

export const returnDimensions: ReturnDimension[] = [
  { label: "Financial Return", value: 78, accent: "gold" },
  { label: "Environmental Return", value: 91, accent: "verdant" },
  { label: "Social Return", value: 86, accent: "azure" },
  { label: "Institutional Return", value: 74, accent: "amethyst" },
  { label: "Knowledge Return", value: 82, accent: "azure" },
  { label: "Future Generation Return", value: 95, accent: "ember" },
];

export interface MarketAsset {
  name: string;
  price: string;
  supply: string;
  provenance: string;
  outcome: string;
  accent: "gold" | "verdant" | "azure" | "amethyst" | "ember";
}

export const marketAssets: MarketAsset[] = [
  { name: "Carbon Credits", price: "$42.10 / t", supply: "1.2M t", provenance: "Verified — Highland Reforestation", outcome: "−1.2 Mt CO₂", accent: "verdant" },
  { name: "Water Restoration Credits", price: "$18.40 / u", supply: "640K u", provenance: "Verified — River Basin Trust", outcome: "3.1M served", accent: "azure" },
  { name: "Biodiversity Credits", price: "$61.00 / u", supply: "210K u", provenance: "Verified — Coastal Wetlands", outcome: "94 species", accent: "verdant" },
  { name: "Research Grants", price: "Open", supply: "128 active", provenance: "Reviewed — National Science Fund", outcome: "312 patents", accent: "amethyst" },
  { name: "Innovation Challenges", price: "Bounty", supply: "44 active", provenance: "Open — Ministry of Innovation", outcome: "1,900 jobs", accent: "gold" },
  { name: "Community Development Bonds", price: "$1,000", supply: "$820M", provenance: "Rated AA — Treasury", outcome: "540 communities", accent: "ember" },
];

export interface Institution {
  name: string;
  type: string;
  health: "healthy" | "stressed" | "critical";
  budget: string;
  note: string;
}

export const institutions: Institution[] = [
  { name: "Ministry of Health", type: "Ministry", health: "stressed", budget: "$21.1B", note: "Procurement risk elevated" },
  { name: "Ministry of Education", type: "Ministry", health: "healthy", budget: "$18.4B", note: "On target" },
  { name: "National Roads Agency", type: "Agency", health: "stressed", budget: "$16.2B", note: "Bridge program delayed" },
  { name: "Environmental Authority", type: "Agency", health: "healthy", budget: "$9.8B", note: "Ahead of schedule" },
  { name: "Northern County Council", type: "County", health: "critical", budget: "$2.1B", note: "Drought emergency" },
  { name: "Coastal County Council", type: "County", health: "healthy", budget: "$3.4B", note: "Revenue exceeds forecast" },
  { name: "Revenue Authority", type: "Agency", health: "healthy", budget: "$4.6B", note: "Collection +8%" },
  { name: "Ministry of Justice", type: "Ministry", health: "healthy", budget: "$6.1B", note: "Backlog reduced" },
];

export interface ForecastYear {
  year: string;
  population: string;
  debt: string;
  climate: string;
  economy: string;
  status: "opportunity" | "watch" | "risk";
}

export const forecastHorizon: ForecastYear[] = [
  { year: "2026", population: "59.0M", debt: "47.1%", climate: "Neutral", economy: "+3.2%", status: "opportunity" },
  { year: "2027", population: "59.8M", debt: "45.8%", climate: "Neutral", economy: "+3.4%", status: "opportunity" },
  { year: "2028", population: "60.6M", debt: "44.9%", climate: "Improving", economy: "+3.1%", status: "opportunity" },
  { year: "2030", population: "62.4M", debt: "42.2%", climate: "Improving", economy: "+2.9%", status: "watch" },
  { year: "2040", population: "70.1M", debt: "38.4%", climate: "Positive", economy: "+2.4%", status: "watch" },
  { year: "2050", population: "76.8M", debt: "34.0%", climate: "Positive", economy: "+2.1%", status: "risk" },
];

export interface CivicNotification {
  title: string;
  category: string;
  tone: "positive" | "neutral" | "warning";
}

export const notifications: CivicNotification[] = [
  { title: "Bridge completion delayed by 14 days.", category: "Infrastructure", tone: "warning" },
  { title: "Hospital occupancy exceeds projected capacity.", category: "Healthcare", tone: "warning" },
  { title: "Forest restoration ahead of schedule.", category: "Environment", tone: "positive" },
  { title: "County revenue exceeds forecast.", category: "Treasury", tone: "positive" },
  { title: "Citizen trust increased by 4% this quarter.", category: "Governance", tone: "positive" },
];

export const oraclePrompts: string[] = [
  "What if drought lasts another year?",
  "Which counties need emergency funding?",
  "How can corruption risk be reduced?",
  "Show the long-term impact of increasing education funding.",
];

export const atlasScales = [
  "World",
  "Country",
  "County",
  "City",
  "Ward",
  "Village",
  "Street",
] as const;

export const atlasLayers = [
  "Budget",
  "Projects",
  "Hospitals",
  "Schools",
  "Water Systems",
  "Roads",
  "Tax Collection",
  "Citizen Feedback",
  "Environmental Indicators",
] as const;
