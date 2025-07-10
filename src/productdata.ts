let sql = {
  title: "Oceanet SQL",
  subtitle: "Relational Database Hosting",
  tags: ["storage", "hosting", "database", "SQL"],
  description: "fully managed Relational Database Service for PostgreSQL, MySQL, MariaDB, or SQL Server. Designed for transaction and analytical workload.",
  features: [
    "Pre-tuned for web apps",
    "Daily auto backup",
    "Connect via SSL from backend apps",
  ],
  link: "/coming-soon.html"
};

let kv = {
  title: "Oceanet KV",
  subtitle: "key-value store",
  tags: ["hosting", "database", "Redis"],
  description: "Ultra-fast in-memory bey-value database built on Redis protocol for caching, queues, and session storage.",
  features: [
    "Sub-milisecond lacency",
    "Auto-scaling clisters",
    "publish/subscript support with TTL",
  ],
  link: "/coming-soon.html"
};

let graph = {
  title: "Oceanet Graph",
  subtitle: "Graph database",
  tags: ["hosting", "database", "GraphDB"],
  description: "Powerful Cypher query language with visualization tool for model and query relationship.",
  features: [
    "Web-based query editor",
    "Visualize nodes and edges",
    "REST and Cypher API",
  ],
  link: "/coming-soon.html"
};

let nosql = {
  title: "Oceanet Doc",
  subtitle: "document/noSQL database",
  tags: ["storage", "hosting", "database", "noSQL", "JSON"],
  description: "Store unstructured JSON documents with powerful indexing.",
  features: [
    "Dynamic schema support",
    "Rich query filters",
    "Scales horizontally",
  ],
  link: "/coming-soon.html"
};

let statichost = {
  title: "Oceanet Pageview",
  subtitle: "static site hosting",
  tags: ["hosting", "Static-hosting", "CDN"],
  description: "Deploy static frontend with build-in CDN and fast loading time.",
  features: [
    "Git integration",
    "Automatic HTTPS",
  ],
  link: "/coming-soon.html"
};

let backendhost = {
  title: "Oceanet Server",
  subtitle: "key-value store",
  tags: ["hosting", "serverless", "API"],
  description: "Run secure backend logic without managing infrastructure. Use REST endpoints, cron jobs, or event triggers.",
  features: [
    "Intergrate logging and analytics",
    "Automatic security enforcement",
  ],
  link: "/coming-soon.html"
};

let fullstack = {
  title: "Oceanet Fullstack",
  subtitle: "SSR + API hybrid hosting",
  tags: ["hosting", "SSR", "NextJS"],
  description: "Deploy full stack app with Server-Side Rendering, APIs, and static assets in one place.",
  feature: [
    "Framework awareness (Next.js, SvelteKit)",
    "Custom domains & routing",
  ]
};

let trafficAnalytics = {
  title: "Oceanet Pulse",
  subtitle: "Real-time traffic analytics",
  tags: ["analytics", "traffic", "live-data"],
  description: "Monitor visits, user behavior, and location in realstime.",
  feature: [
    "Live pageview & session",
    "Device & Browser breakdown"
  ]
};

let funnel = {
  title: "Oceanet Funnel",
  subtitle: "User journey and conversion tracking",
  tags: ["analytics", "Funnel", "UX"],
  description: "Visualize users move. Identify drop-off points and optimize conversion paths.",
  feature: [
    "Custom funnel builder",
    "Custom Geal and event taggings",
    "Conversion rate insight"
  ]
};

let abtest = {
  title: "Oceanet Lab",
  subtitle: "A/B and multivariate testing",
  tags: ["Analytics" ,"ABtest", "Experiments"],
  description: "Run controlled experiment to compare UI. features ,or flows. Back decisions with real user behavior data.",
  feature: [
    "Audience segmentation",
    "Auto split and rollout",
    "Statistical significant calculator"
  ]
};

let vault = {
  title: "Oceanet Vault",
  subtitle: "Secure general-purpose file storage",
  tags: ["storage", "access-control"],
  description: "Upload, store, and access files with role based sharing and automatic versioning. Designed for teams and apps.",
  feature: [
    "Unlimited file types",
    "Access tokens with expiry",
    "File version history"
  ]
};

let bucket = {
  title: "Oceanet Bucket",
  subtitle: "Public & private asset hosting",
  tags: ["storage", "hosting", "CDN"],
  description: "Store static files for fast delivery across the network.",
  feature: [
    "Custom domain mapping",
    "CORS control",
  ]
};

let stream = {
  title: "Oceanet Stream",
  subtitle: "Event and analytics data pipeline",
  tags: ["storage", "analytics", "EventStream"],
  description: "Capture user actions, telemetry, and system events in real time for further processing or export.",
  feature: [
    "Real-time ingestino API",
    "Auto-indexing for queries",
    "Retention policy & export tools"
  ]
};

// simulate backend API data
export const productdata = {
  featured: [vault, statichost, sql, trafficAnalytics],
  storage: [vault, bucket, sql, stream],
  hosting: [statichost, backendhost, sql, fullstack],
  database: [sql, nosql, graph, kv],
  analytics: [trafficAnalytics, funnel, abtest, stream]
}
    