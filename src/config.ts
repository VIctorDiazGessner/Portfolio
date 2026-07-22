// ============================================================================
// SINGLE SOURCE OF TRUTH
// All site content + customization lives here. Components read from siteConfig.
// Each project has a `slug` -> it gets its own internal page at /projects/<slug>.
// Copy style note: no em dashes anywhere (use commas, periods, colons, parens).
// ============================================================================

export type Metric = {
  value: string; // e.g. "12->3", "6x", "1.18"
  label: string; // short caption under the value
};

export type ProjectImage = {
  caption: string;
  src?: string; // path in /public; if absent, a labelled placeholder renders
};

export type Project = {
  slug: string; // internal route: /projects/<slug>
  name: string;
  org: string; // company / lab / context
  role: string; // MY role
  dateRange: string;
  summary: string; // homepage card blurb
  skills: string[];
  metrics: Metric[]; // headline stats, also used on the card
  problem: string;
  approach: string[]; // how the work / system was done
  result: string[]; // outcomes
  note?: string; // optional caveat / distinct-project separation
  // Team-project fields (rendered only when present):
  team?: string[];
  advisor?: string;
  context?: string; // framing paragraph shown before the problem
  myContributions?: string[]; // MY specific contributions, called out separately
  images?: ProjectImage[]; // visual gallery (placeholders until files arrive)
  hasModel?: boolean; // true only for the Endless Garden capstone (real model)
  chart?: "sharkninja"; // which data-viz to render, if any
};

export const siteConfig = {
  name: "Victor Diaz Gessner",
  title: "Mechanical Engineer",
  tagline: "Mechanical engineer building hardware across aerospace, energy, and tech.",
  description:
    "Victor Diaz Gessner, mechanical engineer (Northeastern, B.S. Mechanical Engineering, Magna Cum Laude) working in product design, advanced materials, and manufacturing and process engineering across aerospace, energy, and technology hardware.",
  accentColor: "#38BDF8", // signal cyan

  // Placeholder assets, swap when finals are provided.
  resumeUrl: "/resume.pdf", // PLACEHOLDER: drop the real PDF at public/resume.pdf
  heroPhoto: "", // PLACEHOLDER: set to e.g. "/victor.jpg" once provided

  social: {
    email: "victorxdiazg@gmail.com",
    linkedin: "https://linkedin.com/in/victordiazgessner/",
    github: "https://github.com/VIctorDiazGessner/",
  },

  aboutMe:
    "I'm a mechanical engineer graduating from Northeastern University in May 2026 (B.S. Mechanical Engineering, Magna Cum Laude, 3.7 GPA). My background spans product design, materials research, and manufacturing and process engineering, from optimizing fluid systems and characterizing shielding ceramics to scaling FDA-regulated production lines. I'm drawn to hard technical problems across hardware, energy, and tech, and I believe the best mechanical designs come from genuinely understanding the underlying mechanisms, then aligning the right people to deliver solutions that hold up in the real world.",

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
        "ANSYS Fluent (CFD)",
        "SolidWorks Simulation (FEA)",
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
  // PROJECTS: each becomes an internal case-study page at /projects/<slug>.
  // These are the core engineering case studies. Lighter entrepreneurial and
  // coursework items live in `coursework` and `ventures` below.
  // ==========================================================================
  projects: [
    {
      slug: "sharkninja-manifold",
      name: "Manifold Redesign",
      org: "SharkNinja",
      role: "New Product Development Co-op",
      dateRange: "Jan - Jun 2025",
      summary:
        "Re-architected wet/dry floorcare water delivery around an internal manifold, and built a Python sizing tool that cut physical prototyping from 12 builds to 3.",
      skills: ["Python", "Fluid Mechanics", "PTC Creo", "DFM", "Prototyping"],
      metrics: [
        { value: "12->3", label: "Prototype builds" },
        { value: "Patent", label: "Squeegee arch. in review" },
      ],
      chart: "sharkninja",
      problem:
        "The original wet/dry floorcare design used spray nozzles near the ends of the cleaning head, which covered the brushroll unevenly. The middle of the roll was consistently underserved.",
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
      dateRange: "Aug - Dec 2024",
      summary:
        "Material characterization for aerospace and nuclear shielding on RTX Raytheon-sponsored work, optimizing UV-curable boron ceramics for meaningfully better shielding at a fraction of conventional size and weight.",
      skills: [
        "Materials Science",
        "Statistical Analysis",
        "Additive Manufacturing",
        "SEM Imaging",
        "Analytical Modeling",
      ],
      metrics: [
        { value: "RTX", label: "Raytheon-sponsored" },
        { value: "SEM", label: "Microstructure validation" },
        { value: "Additive", label: "Ceramic prototyping" },
      ],
      problem:
        "Conventional radiation shielding relies on bulky water, lead, or cement. This RTX Raytheon-sponsored research investigated UV-curable ceramics for aerospace and nuclear shielding that could deliver comparable protection at a fraction of the size and weight.",
      approach: [
        "Optimized ceramic material compositions through statistical analysis of reactor neutron flux data.",
        "Designed and additively manufactured iterative ceramic prototypes.",
        "Modeled mechanical properties using Jacobian-based analytical methods.",
        "Validated microstructures via Scanning Electron Microscopy (SEM).",
      ],
      result: [
        "Meaningfully improved shielding performance compared to prior methods.",
        "Advanced toward shielding materials with a fraction of the size and weight of conventional water, lead, or cement approaches.",
      ],
      note: "This research has not yet been formally presented or officially released, so results are described qualitatively rather than with specific figures.",
      images: [
        { caption: "SEM micrograph, boron ceramic sample" },
        { caption: "SEM micrograph, microstructure detail" },
        { caption: "Figure from the connected research presentation" },
      ],
    },
    {
      slug: "jnj-scale-up",
      name: "Production Line Scale-Up",
      org: "Johnson & Johnson MedTech",
      role: "Production Engineering Co-op",
      dateRange: "Jan - Jun 2024",
      summary:
        "Scaled a pre-release medical device line to 6x weekly output under FDA-regulated quality. On a separate line, ran an Instron root-cause investigation that prevented over $1.3M in losses.",
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
        "Worked directly with line operators to understand real failure points and workarounds that were not visible in the data.",
        "Combined that ground truth with cycle-time and defect data to identify the actual production constraints.",
        "Helped redesign the physical line layout and station sequencing, and helped engineer and implement 156 production fixtures.",
        "Presented the proposed changes directly to site leadership, including the VP, for sign-off before implementation.",
      ],
      result: [
        "Achieved a 6x increase in weekly production and a 23% yield increase.",
        "Maintained full CAPA/audit-ready FDA documentation throughout.",
      ],
      note: "On a separate production line, I led a root-cause investigation using Instron failure testing that identified the source of a recurring failure mode threatening to shut that line down, preventing over $1.3M in potential losses. This is a distinct project from the manifold work above.",
    },
    {
      slug: "endless-garden",
      name: "Endless Garden",
      org: "Northeastern Capstone",
      role: "Mechanical Design & System Integration",
      dateRange: "Jun - Dec 2025",
      summary:
        "A 6-person capstone: an automated hydroponic countertop system using deep water culture and staggered planting to deliver fresh produce about once a week. I led mechanical design of custom 3D printed components and contributed to system integration.",
      skills: [
        "SolidWorks",
        "3D Printing / Prototyping",
        "Mechanical Design",
        "System Integration",
        "DWC Hydroponics",
      ],
      metrics: [
        { value: "~1/wk", label: "Ongoing harvest" },
        { value: "4", label: "Integrated subsystems" },
        { value: "6", label: "Person team" },
      ],
      hasModel: true,
      team: [
        "Daniel Cabestrero",
        "Amanda Curran",
        "Victor Diaz Gessner",
        "Erika Kraft",
        "Charlene Lam",
        "Taylor Olender",
      ],
      advisor: "Prof. Gouldstone",
      context:
        "Roughly 54 million Americans face food insecurity and 23.5 million live in areas without easy access to fresh produce. Most home hydroponic systems batch harvest (everything planted and harvested at once), which creates alternating gluts and gaps.",
      problem:
        "Design a consumer-ready automated hydroponic appliance that delivers a steady, ongoing supply of fresh produce at home, instead of the feast-or-famine cycle of batch harvesting.",
      approach: [
        "Staggered planting so fresh little gem romaine is ready roughly once a week on an ongoing basis, after an initial 7.5 week growth cycle.",
        "A gravity fed plug refill system (IR and Hall effect sensors, servo controlled doors), inspired by a grocery store bottle dispenser, that automatically moves a new seedling into place after harvest.",
        "A nutrient delivery system using a bang bang controller, relays, and peristaltic pumps to hold pH between 5.8 and 6.0.",
        "A dual reservoir water level control system using a normally closed solenoid valve, so it fails shut rather than open to prevent flooding.",
        "An IR break beam plant monitoring system with double check logic that notifies the user when a plant is ready to harvest.",
      ],
      myContributions: [
        "Designed custom 3D printed mechanical components in SolidWorks, including the plug refill rail and door system, through iterative prototyping.",
        "Contributed to overall system integration across the team's subsystems.",
      ],
      result: [
        "Delivered a working prototype demonstrating staggered, ongoing harvest rather than batch harvesting.",
        "Integrated four subsystems into a single automated countertop platform.",
      ],
      note: "Team project advised by Prof. Gouldstone. Subsystem ownership varied across the team (electrical and sensor work, nutrient system, UI, and more led by teammates); my role centered on mechanical design and integration. Exact role breakdown to be confirmed before this goes live.",
      images: [
        { caption: "3D printed plug refill mechanism" },
        { caption: "CAD render, plug refill rail and door system" },
        { caption: "Assembled prototype" },
      ],
    },
    {
      slug: "renter-friendly-desk",
      name: "Renter-Friendly Desk",
      org: "Northeastern, Mechanical Component Design",
      role: "Mechanical Analysis & Cost Lead",
      dateRange: "2023",
      summary:
        "A team project: a nesting shelf and desk that extends from a compact cabinet via a hand crank rack and pinion mechanism, for renters who need free standing furniture with no wall mounting. I led the static and gear stress analysis and the cost breakdown.",
      skills: [
        "SolidWorks Simulation (FEA)",
        "Stress Analysis",
        "Gear Design",
        "Cost Analysis",
        "Mechanical Design",
      ],
      metrics: [
        { value: "1.18", label: "Min safety factor (gear wear)" },
        { value: "0.0155 in", label: "Deflection at 150N" },
        { value: ">129", label: "Buckling safety factor" },
      ],
      team: [
        "Kathryn Bozzay",
        "Amanda Curran",
        "Victor Diaz Gessner",
        "Erika Kraft",
        "Owen Nash",
        "Paige Taborski",
      ],
      context:
        "Renters often need workspace furniture that is free standing and space efficient, since they cannot mount anything to the walls.",
      problem:
        "Build a free standing desk that collapses into a compact cabinet footprint and extends into a full desk on demand, with no wall mounting, and prove it is structurally sound.",
      approach: [
        "Designed a nesting shelf and desk driven by a hand crank rack and pinion mechanism that extends the desk from a compact cabinet.",
        "Built a physical mockup and a final 3D printed prototype.",
        "Ran a full engineering analysis: static failure and FEA, buckling and FEA, fatigue and FEA, connection (screw and hinge) analysis, and gear (bending and wear stress) analysis.",
        "Used SolidWorks Simulation for the FEA, a lighter weight tool appropriate for a class project rather than a full ANSYS level simulation.",
      ],
      myContributions: [
        "Co-wrote the project summary.",
        "Performed the static failure analysis and its correlated FEA, together with Amanda Curran.",
        "Performed the gear system analysis (bending stress, wear stress, torque and force on the rack and pinion), together with Amanda Curran.",
        "Led the cost analysis and sourcing breakdown.",
      ],
      result: [
        "At a 150N distributed load, no significant failure was found, with about 0.0155 inches of bending deflection at the center under load.",
        "Hand calculated safety factors ranged very high (over 240 for static failure of the main desk section, over 129 for buckling).",
        "The tightest safety factor in the whole design was about 1.18, for wear on one of the drive gears.",
      ],
      note: "Team project for a mechanical component design class, not a capstone or commercial product.",
      images: [
        { caption: "Static failure FEA (SolidWorks Simulation)" },
        { caption: "Buckling FEA" },
        { caption: "Rack and pinion gear analysis" },
      ],
    },
  ] as Project[],

  // ==========================================================================
  // COURSEWORK: compact supporting section (not full case studies).
  // ==========================================================================
  coursework: [
    {
      title: "Turbulent Pipe Flow Validation",
      tool: "ANSYS Fluent",
      blurb:
        "Reproduced and validated the centerline velocity overshoot and wall shear stress undershoot in turbulent pipe flow, benchmarked against a 2022 International Journal of Thermal Sciences paper. Ran mesh independence studies and compared laminar, k-epsilon, k-omega, and Spalart-Allmaras turbulence models at Reynolds numbers of 19,000 and 105,000. Results matched the paper's trends closely.",
      tags: ["ANSYS Fluent", "Turbulence models", "Mesh independence"],
    },
    {
      title: "Cessna 172 Airfoil Analysis",
      tool: "ANSYS Fluent",
      blurb:
        "Modeled the Cessna 172 main wing (NACA 2412) and stabilizer (NACA 0012) airfoils at 63 m/s, analyzing pressure distribution, velocity fields, and lift and drag coefficients across angles of attack from -2 to 4 degrees.",
      tags: ["ANSYS Fluent", "Airfoil aerodynamics", "Lift & drag"],
    },
  ],

  // ==========================================================================
  // VENTURES: optional, smaller (business / entrepreneurship, not engineering).
  // ==========================================================================
  ventures: [
    {
      name: "Spondooli, LLC",
      role: "Co-Founder & CFO",
      dateRange: "Sep 2019 - Aug 2021",
      blurb:
        "In a business class, the team identified that roughly 50% of the US population is financially illiterate, and built a fun, interactive tool to teach financial literacy from a young age, targeting students from middle school through university. We sold the product to a handful of schools and grew a meaningful base of active users beyond them.",
      contribution:
        "My role: business plan, financials, fundraising, and closing the deals with schools directly.",
      tags: ["Entrepreneurship", "Finance", "Fundraising", "B2B Sales"],
    },
  ],

  // ==========================================================================
  // EXPERIENCE: condensed resume history for the visual timeline.
  // `logo` points at a file in /public. `logoText` is a fallback badge.
  // ==========================================================================
  experience: [
    {
      company: "SharkNinja",
      logo: "/sharkninja.jpg",
      logoText: "SN",
      title: "New Product Development Co-op",
      dateRange: "Jan - Jun 2025",
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
      dateRange: "Aug - Dec 2024",
      bullets: [
        "Investigated UV-curable ceramics for aerospace and nuclear shielding through reactor experiments supporting RTX Raytheon-sponsored work.",
        "Optimized material compositions via statistical analysis of neutron flux data, meaningfully improving shielding performance compared to prior methods.",
        "Additively manufactured iterative ceramic prototypes, modeled properties with Jacobian-based methods, and validated microstructures via SEM.",
      ],
    },
    {
      company: "Johnson & Johnson MedTech",
      logo: "/jnj.webp",
      logoText: "J&J",
      title: "Production Engineering Co-op, Heart Recovery",
      dateRange: "Jan - Jun 2024",
      bullets: [
        "Scaled a pre-release medical device line to 6x weekly output with a 23% yield increase, redesigning line layout and implementing 156 production fixtures under FDA-regulated quality.",
        "Presented proposed line changes directly to site leadership, including the VP, for sign-off before implementation.",
        "On a separate line, led an Instron-based root-cause investigation that resolved a recurring failure mode, preventing over $1.3M in potential losses.",
      ],
    },
  ],

  // ==========================================================================
  // LEADERSHIP: intentionally compact; a strong signal, not the headline.
  // ==========================================================================
  leadership: {
    org: "Engineer Forward, Inc.",
    role: "Co-Founder & President",
    summary:
      "Co-founded a peer-mentorship nonprofit connecting engineering students with recent graduates who have navigated the same academic and professional challenges. Scaled to 58 mentees and 10 mentors from companies including RTX, J&J, and SharkNinja. Incorporated as a Massachusetts nonprofit corporation (Articles of Organization filed), with bylaws drafted and a board of directors formed, currently pursuing 501(c)(3) status.",
    stats: [
      { value: "58", label: "Mentees" },
      { value: "10", label: "Mentors" },
    ],
  },

  education: [
    {
      school: "Northeastern University",
      degree: "B.S. Mechanical Engineering",
      dateRange: "2022 - May 2026",
      achievements: [
        "Magna Cum Laude",
        "3.7 GPA, Dean's List all semesters",
        "Treasurer, American Society of Mechanical Engineers",
      ],
    },
  ],
};
