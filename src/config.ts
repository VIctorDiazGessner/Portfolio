// ============================================================================
// SINGLE SOURCE OF TRUTH
// All site content + customization lives here. Components read from siteConfig.
// Each project has a `slug` -> it gets its own internal page at /projects/<slug>.
// ============================================================================

export type Metric = {
  value: string; // e.g. "43%", "6x", "$1.3M+"
  label: string; // short caption under the value
};

export type Project = {
  slug: string; // internal route: /projects/<slug>
  name: string;
  org: string; // company / lab / context
  role: string;
  dateRange: string;
  // Short blurb shown on the homepage project card.
  summary: string;
  skills: string[];
  metrics: Metric[]; // headline stats, also used on the card
  // Case-study body (internal page). Kept as structured sections.
  problem: string;
  approach: string[]; // bullet-style "what I did" steps
  result: string[]; // outcomes
  note?: string; // optional caveat / distinct-project separation, etc.
  hasModel?: boolean; // true only for the Capstone (real exported 3D model)
  chart?: "daps" | "sharkninja"; // which data-viz to render, if any
};

export const siteConfig = {
  name: "Victor Diaz Gessner",
  title: "Mechanical Engineer",
  tagline: "Mechanical engineer building toward aerospace and defense hardware.",
  description:
    "Victor Diaz Gessner — mechanical engineer (Northeastern, B.S. Mechanical Engineering, Magna Cum Laude) working in product design, advanced materials, and manufacturing/process engineering toward aerospace and defense hardware.",
  accentColor: "#38BDF8", // signal cyan

  // Placeholder assets — swap when finals are provided.
  resumeUrl: "/resume.pdf", // PLACEHOLDER: drop the real PDF at public/resume.pdf
  heroPhoto: "", // PLACEHOLDER: set to e.g. "/victor.jpg" once provided

  social: {
    email: "victorxdiazg@gmail.com",
    linkedin: "https://linkedin.com/in/victordiazgessner/",
    github: "https://github.com/VIctorDiazGessner/",
  },

  aboutMe:
    "I'm a mechanical engineer graduating from Northeastern University in May 2026 (B.S. Mechanical Engineering, Magna Cum Laude, 3.7 GPA), targeting aerospace and defense hardware roles. My background spans product design, materials research, and manufacturing/process engineering — from optimizing fluid systems and characterizing neutron-shielding ceramics to scaling FDA-regulated production lines. I gravitate toward the most technically demanding problems, and I believe the best mechanical designs come from genuinely understanding the underlying mechanisms, then aligning the right people to deliver solutions that hold up in the real world.",

  // -- Skills grouped by discipline (CAD, programming, analysis/testing, mfg/ops) --
  skillGroups: [
    {
      category: "CAD & Design",
      skills: ["SolidWorks", "PTC Creo", "AutoCAD", "Onshape"],
    },
    {
      category: "Programming",
      skills: ["Python", "C++", "JavaScript", "MATLAB", "Minitab"],
    },
    {
      category: "Analysis & Testing",
      skills: [
        "FEA",
        "Instron Tensile Testing",
        "SEM Imaging",
        "Statistical Analysis",
        "Fluid Dynamics Modeling",
      ],
    },
    {
      category: "Manufacturing & Ops",
      skills: [
        "Design for Manufacturing",
        "Injection Molding",
        "Lean Six Sigma",
        "Statistical Process Control",
        "CAPA / FDA Documentation",
        "Fixture Design",
        "FDM / SLA Prototyping",
      ],
    },
  ],

  languages: ["English", "French", "Spanish"],

  // ==========================================================================
  // PROJECTS — each becomes an internal case-study page at /projects/<slug>.
  // Order controls homepage display. First four are the core engineering
  // case studies; the last two are earlier / entrepreneurial work.
  // ==========================================================================
  projects: [
    {
      slug: "sharkninja-manifold",
      name: "Manifold Redesign",
      org: "SharkNinja",
      role: "New Product Development Co-op",
      dateRange: "Jan – Jun 2025",
      summary:
        "Re-architected wet/dry floorcare water delivery around an internal manifold, and built a Python sizing tool that cut physical prototyping from 12 builds to 3.",
      skills: ["Python", "Fluid Mechanics", "PTC Creo", "DFM", "Prototyping"],
      metrics: [
        { value: "12→3", label: "Prototype builds" },
        { value: "Patent", label: "Squeegee arch. in review" },
      ],
      chart: "sharkninja",
      problem:
        "The original wet/dry floorcare design used spray nozzles near the ends of the cleaning head, which covered the brushroll unevenly — the middle of the roll was consistently underserved.",
      approach: [
        "Helped develop a manifold-based architecture where incoming water spreads through an internal wall/barrier before reaching the brushroll, evening out distribution across its full length.",
        "Built a Python analytical sizing tool (flow rate, pressure, geometry, target outlet flow) to guide outlet sizing, modeling the manifold as a steady pressure-flow network with each outlet treated as an orifice.",
        "Did the design-for-manufacturing work to split an early single-piece geometry into two manufacturable injection-molded pieces while preserving the intended flow behavior.",
      ],
      result: [
        "Reduced physical prototype iteration from 12 builds to 3 targeted variants.",
        "Co-invented a squeegee architecture for next-generation wet/dry vacuums, currently submitted for patent review.",
      ],
    },
    {
      slug: "daps-ceramics",
      name: "Neutron-Shielding Ceramics",
      org: "DAPS Research Laboratory",
      role: "Undergraduate Research Associate",
      dateRange: "Aug – Dec 2024",
      summary:
        "Material characterization for aerospace/nuclear shielding on RTX Raytheon–sponsored work — optimizing UV-curable ceramics to 43% better shielding at a fraction of conventional size and weight.",
      skills: [
        "Materials Science",
        "Statistical Analysis",
        "Additive Manufacturing",
        "SEM Imaging",
        "Analytical Modeling",
      ],
      metrics: [
        { value: "43%", label: "Shielding improvement" },
        { value: "RTX", label: "Raytheon-sponsored" },
      ],
      chart: "daps",
      problem:
        "Conventional radiation shielding relies on bulky water, lead, or cement. This RTX Raytheon–sponsored research investigated UV-curable ceramics for aerospace and nuclear shielding that could deliver comparable protection at a fraction of the size and weight.",
      approach: [
        "Optimized ceramic material compositions through statistical analysis of reactor neutron flux data.",
        "Designed and additively manufactured iterative ceramic prototypes.",
        "Modeled mechanical properties using Jacobian-based analytical methods.",
        "Validated microstructures via Scanning Electron Microscopy (SEM).",
      ],
      result: [
        "Improved shielding performance by 43% relative to prior methods.",
        "Advanced toward shielding materials with a fraction of the size and weight of conventional water/lead/cement approaches.",
      ],
    },
    {
      slug: "jnj-scale-up",
      name: "Production Line Scale-Up",
      org: "Johnson & Johnson MedTech",
      role: "Production Engineering Co-op",
      dateRange: "Jan – Jun 2024",
      summary:
        "Scaled a pre-release medical device line to 6x weekly output under FDA-regulated quality — and, on a separate line, ran an Instron root-cause investigation that prevented $1.3M+ in losses.",
      skills: [
        "Process Engineering",
        "Lean Six Sigma",
        "Root-Cause Analysis",
        "Fixture Design",
        "FDA / CAPA",
      ],
      metrics: [
        { value: "6x", label: "Weekly output" },
        { value: "+23%", label: "Yield increase" },
        { value: "$1.3M+", label: "Losses prevented" },
      ],
      problem:
        "A pre-release medical device line needed to scale to 6x weekly output while holding full FDA-regulated quality standards.",
      approach: [
        "Worked directly with line operators to understand real failure points and workarounds that weren't visible in the data.",
        "Combined that ground truth with cycle-time and defect data to identify the actual production constraints.",
        "Helped redesign the physical line layout and station sequencing, and helped engineer and implement 156 production fixtures.",
        "Presented the proposed changes directly to site leadership, including the VP, for sign-off before implementation.",
      ],
      result: [
        "Achieved a 6x increase in weekly production and a 23% yield increase.",
        "Maintained full CAPA/audit-ready FDA documentation throughout.",
      ],
      note: "Separately, on a different production line, I led a root-cause investigation using Instron failure testing that identified the source of a recurring failure mode threatening to shut that line down — preventing over $1.3M in potential losses.",
    },
    {
      slug: "capstone-growing-appliance",
      name: "Continuous Growing Appliance",
      org: "Northeastern Capstone",
      role: "Hardware–Software Integration Lead",
      dateRange: "Jun – Dec 2025",
      summary:
        "A consumer-ready, Arduino-based automated hydroponic appliance uniting mechanical design, embedded systems, and a custom touchscreen UI — full hardware-to-software ownership.",
      skills: [
        "SolidWorks",
        "Arduino / Embedded",
        "UI/UX Design",
        "Sensors & Validation",
        "HW–SW Integration",
      ],
      metrics: [
        { value: "10+", label: "Custom SW components" },
        { value: "8", label: "Touchscreen UI screens" },
      ],
      hasModel: true,
      problem:
        "Build a consumer-ready automated hydroponic appliance — the 'Ever Garden' — that combines mechanical design, embedded control, and a usable touchscreen interface into a single cohesive product a non-engineer could operate.",
      approach: [
        "Designed 10+ custom mechanical components in SolidWorks through iterative 3D-prototyping, including modular IR-sensor fixtures reconfigurable for different seed types.",
        "Developed a custom eight-screen touchscreen UI on the Arduino Giga R1 WiFi (display shield) with custom coordinate mapping and optimized refresh logic for artifact-free, responsive control and real-time monitoring.",
        "Implemented IR break-beam sensing (Tredix) with embedded detection code that triggers harvest notifications at a validated 16-inch sensor spacing when plants reach the 6-inch maturity threshold.",
        "Unified multi-contributor embedded code — pH management, water level, and nutrient delivery — into a single Arduino control architecture.",
      ],
      result: [
        "Delivered a cohesive automated growing platform demonstrating full-stack hardware-to-software ownership.",
        "Designed the grow-light mounting to hold optimal 6-inch canopy separation at maturity while integrating cleanly with teammates' assemblies.",
      ],
    },
    {
      slug: "renter-friendly-desk",
      name: "Renter-Friendly Transforming Desk",
      org: "Northeastern — Team Lead",
      role: "Mechanical Design & Team Lead",
      dateRange: "2023",
      summary:
        "A mechanically-operated transforming desk that cuts stored footprint by 70% via a hand-crank rack-and-pinion system — validated with self-taught FEA while leading a six-person team.",
      skills: ["FEA", "Project Management", "CAD", "Safety-Factor Design"],
      metrics: [
        { value: "70%", label: "Smaller footprint stored" },
        { value: "6", label: "Person team led" },
      ],
      problem:
        "Urban renters need full workspace functionality without permanent installation or a large footprint — and most transforming furniture requires wall mounting that renters can't do.",
      approach: [
        "Designed a freestanding, mechanically-operated transforming desk driven by an elegant hand-crank rack-and-pinion system.",
        "Led a six-person team while self-teaching FEA to validate the mechanism.",
        "Performed structural calculations to ensure the freestanding design could support real-world loads without wall mounting.",
      ],
      result: [
        "Delivered a fully functional 3D prototype plus comprehensive engineering analysis.",
        "Demonstrated a 70% reduction in footprint when stored while retaining full workspace functionality.",
      ],
    },
    {
      slug: "spondooli",
      name: "Spondooli, LLC",
      org: "Startup — Co-Founder",
      role: "Co-Founder",
      dateRange: "2020",
      summary:
        "Co-founded a financial-literacy app with real-time stock data; ran finances, crowdfunding, and B2B marketing — winning 1st place at the 2020 Diamond Challenge NY regionals.",
      skills: [
        "Entrepreneurship",
        "Crowdfunding",
        "B2B Marketing",
        "Financial Management",
        "Stakeholder Communication",
      ],
      metrics: [
        { value: "1st", label: "Diamond Challenge NY" },
      ],
      problem:
        "Young people lack accessible, engaging tools to learn financial management before they need them.",
      approach: [
        "Co-founded a financial-literacy application featuring real-time stock data to teach financial-management principles.",
        "Managed company finances, led crowdfunding initiatives, and spearheaded B2B marketing targeting educational organizations.",
      ],
      result: [
        "Validated the venture by winning 1st place in the New York regionals at the 2020 Diamond Challenge, hosted by the University of Delaware.",
      ],
    },
  ] as Project[],

  // ==========================================================================
  // EXPERIENCE — condensed resume history for the visual timeline.
  // `logo` points at a file in /public. `logoText` is a fallback badge.
  // ==========================================================================
  experience: [
    {
      company: "SharkNinja",
      logo: "/sharkninja.jpg",
      logoText: "SN",
      title: "New Product Development Co-op",
      dateRange: "Jan – Jun 2025",
      bullets: [
        "Engineered novel wet floorcare systems through CAD-driven design, fluid-dynamics calculations, and validation testing across mechanical, manufacturing, and electrical teams.",
        "Built a Python fluid-dynamics model integrating first principles and empirical data, cutting prototype iteration from 12 builds to 3 targeted variants.",
        "Co-invented a squeegee architecture for next-generation wet/dry vacuums (submitted for patent review) and coordinated DFM across mechanical, industrial design, and manufacturing teams.",
      ],
    },
    {
      company: "DAPS Research Laboratory",
      logo: "/daps.png",
      logoText: "NEU",
      title: "Undergraduate Research Associate",
      dateRange: "Aug – Dec 2024",
      bullets: [
        "Investigated UV-curable ceramics for aerospace and nuclear shielding through reactor experiments supporting RTX Raytheon–sponsored work.",
        "Optimized material compositions via statistical analysis of neutron flux data, achieving a 43% improvement in shielding performance.",
        "Additively manufactured iterative ceramic prototypes, modeled properties with Jacobian-based methods, and validated microstructures via SEM.",
      ],
    },
    {
      company: "Johnson & Johnson MedTech",
      logo: "/jnj.webp",
      logoText: "J&J",
      title: "Production Engineering Co-op — Heart Recovery",
      dateRange: "Jan – Jun 2024",
      bullets: [
        "Scaled a pre-release medical device line to 6x weekly output with a 23% yield increase, redesigning line layout and implementing 156 production fixtures under FDA-regulated quality.",
        "Presented proposed line changes directly to site leadership, including the VP, for sign-off before implementation.",
        "On a separate line, led an Instron-based root-cause investigation that resolved a recurring failure mode, preventing over $1.3M in potential losses.",
      ],
    },
  ],

  // ==========================================================================
  // LEADERSHIP — intentionally compact; a strong signal, not the headline.
  // ==========================================================================
  leadership: {
    org: "Engineer Forward, Inc.",
    role: "Co-Founder & President",
    summary:
      "Co-founded a peer-mentorship nonprofit connecting engineering students with recent graduates who've navigated the same academic and professional challenges. Scaled to 58 mentees and 10 mentors from companies including RTX, J&J, and SharkNinja. Incorporated as a Massachusetts nonprofit corporation (Articles of Organization filed), with bylaws drafted and a board of directors formed, currently pursuing 501(c)(3) status.",
    stats: [
      { value: "58", label: "Mentees" },
      { value: "10", label: "Mentors" },
    ],
  },

  education: [
    {
      school: "Northeastern University",
      degree: "B.S. Mechanical Engineering",
      dateRange: "2022 – May 2026",
      achievements: [
        "Magna Cum Laude",
        "3.7 GPA — Dean's List all semesters",
        "Treasurer, American Society of Mechanical Engineers",
      ],
    },
  ],
};
