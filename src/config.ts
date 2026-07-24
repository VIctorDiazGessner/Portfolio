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
  uiScreens?: ProjectImage[]; // optional UI screenshots, rendered as a carousel
  reportUrl?: string; // path in /public/reports to the full assignment PDF (embedded + linked)
  chart?: "sharkninja"; // which data-viz to render, if any
};

export const siteConfig = {
  name: "Victor Diaz Gessner",
  title: "Mechanical Engineer",
  tagline:
    "Mechanical Engineer and Industrial Engineer Building Hardware Across Aerospace, Energy, and Tech",
  description:
    "Victor Diaz Gessner, mechanical engineer (Northeastern, B.S. Mechanical Engineering, Magna Cum Laude) working in product design, advanced materials, and manufacturing and process engineering across aerospace, energy, and technology hardware.",
  accentColor: "#0E7490", // deep cyan, legible on white

  // Placeholder assets, swap when finals are provided.
  resumeUrl: "/victor-diaz-gessner-cv.pdf", // CV in public/
  heroPhoto: "/victor.jpg", // portrait in public/victor.jpg

  social: {
    email: "victorxdiazg@gmail.com",
    linkedin: "https://linkedin.com/in/victordiazgessner/",
    github: "https://github.com/VIctorDiazGessner/",
  },

  // Full bio, rendered directly below the hero. First person, site-wide voice.
  bio: [
    "I'm a mechanical engineer with hands-on industrial and manufacturing engineering experience, focused on turning early-stage designs into manufacturable, high-volume products. My work lives in the messy middle, where a design has to survive contact with manufacturing, cost targets, and a ship date.",
    "At SharkNinja, I designed and validated mechanical systems for next-generation wet/dry vacuums in Creo and built a Python fluid-dynamics model that cut iteration cycles by 75%. At Johnson & Johnson MedTech, I applied Lean Six Sigma, yield analysis, and root-cause investigation to deliver a 23% yield gain and over $1.3M in avoided cost. In defense and aerospace materials research, I improved neutron-shielding performance by 43% through statistical analysis and additive prototyping. Different industries, one instinct: find the problem, model it, and design the fix.",
    "I'm fluent in SolidWorks, Creo, and Onshape, work comfortably in Python, MATLAB, and CFD (ANSYS Fluent), and move easily between the CAD screen, the test bench, and the design review.",
    "I'm trilingual, native in English, French, and Spanish, and I hold dual US and EU citizenship.",
    "I'm most drawn to hardware that matters: defense, aerospace, and autonomous systems, aerial and underwater, energy, and consumer products, at high-growth startups and established product companies alike.",
  ],

  certifications: [{ name: "Lean Six Sigma Green Belt" }],

  // -- Skills grouped by discipline (CAD, programming, analysis/testing, mfg/ops) --
  skillGroups: [
    {
      category: "CAD & Design",
      skills: [
        "Mechanical Design",
        "SolidWorks",
        "PTC Creo",
        "Siemens NX",
        "Onshape",
        "AutoCAD",
      ],
    },
    {
      category: "Programming",
      skills: ["Python", "MATLAB", "C++", "JavaScript", "Minitab"],
    },
    {
      category: "Analysis & Testing",
      skills: [
        "CFD / ANSYS Fluent",
        "SolidWorks Simulation (FEA)",
        "Root Cause Analysis",
        "Instron Tensile Testing",
        "SEM Imaging",
        "Statistical Analysis",
        "Fluid Dynamics Modeling",
      ],
    },
    {
      category: "Manufacturing & Operations",
      skills: [
        "Industrial & Manufacturing Engineering",
        "New Product Development",
        "DFM / DFA",
        "Lean Six Sigma (Green Belt)",
        "Prototyping & Additive Manufacturing",
        "Statistical Process Control",
        "CAPA / FDA Documentation",
        "Fixture Design",
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
        "Conventional radiation shielding relies on bulky water, lead, or cement. This RTX Raytheon-sponsored research investigated UV-curable ceramics (a boron-based ceramic composition) for aerospace and nuclear shielding that could deliver comparable protection at a fraction of the size and weight.",
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
        {
          caption:
            "Total density normalization: screening the highest-density materials suitable for neutron shielding, used to decide which materials were worth researching further.",
          src: "/reports/Total-density-normalization.jpg",
        },
        {
          caption:
            "SEM close-up of the boron lattice (12 micron), checking alignment. The more aligned the structure, the more effective the shielding material.",
          src: "/reports/daps-ceramics-sem-1.jpg",
        },
        {
          caption:
            "SEM at lower magnification, showing the broader structural inconsistency we were working to reduce.",
          src: "/reports/daps-ceramics-sem-2.jpg",
        },
        {
          caption:
            "Results from the Rhode Island reactor data, showing how effective the different lattice structures and multimaterial blends were.",
          src: "/reports/daps-presenation-1.jpg",
        },
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
        "A 6-person capstone: an automated hydroponic countertop system using deep water culture and staggered planting to deliver fresh produce about once a week. I owned the IR harvest sensor, the grow lights, and the LCD interface, specced the Arduino, and integrated the whole team's code into one working system.",
      skills: [
        "SolidWorks",
        "Fixture Design",
        "Arduino / Firmware",
        "Sensor Integration",
        "System Integration",
        "DWC Hydroponics",
      ],
      metrics: [
        { value: "~1/wk", label: "Ongoing harvest" },
        { value: "4", label: "Integrated subsystems" },
        { value: "7.5 wk", label: "Initial grow cycle" },
      ],
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
        "Roughly 54 million Americans face food insecurity and 23.5 million live in areas without easy access to fresh produce. Most home hydroponic products (LetPot, Gardyn, and similar) use batch harvesting, planting and harvesting everything at once, which creates alternating periods of excess and none. Endless Garden uses deep water culture (DWC) hydroponics, roots sitting in oxygenated, nutrient-dosed water, with staggered planting to deliver a steady supply instead.",
      problem:
        "Design a consumer-ready automated hydroponic appliance that delivers a steady, ongoing supply of fresh produce at home, instead of the feast-or-famine cycle of batch harvesting.",
      approach: [
        "Deep water culture with staggered planting: fresh little gem romaine is ready roughly once a week on an ongoing basis after an initial 7.5 week growth cycle, rather than all at once.",
        "Plug refill system: gravity-fed seedling plugs sit on a 12 degree angled rail (reduced from an initial 30 degrees after friction calculations showed 30 degrees produced impact velocities too high to land reliably; an earlier spring-loaded concept was dropped because the roughly 0.01 lb plugs were too light and tipped over). A servo-controlled door, similar to a Pez dispenser, releases one plug at a time. A reflective IR sensor (Everlight ITR20001/T) detects a harvested plug and triggers an SG90 servo after a 3 second delay, while a Hall effect sensor flags when the reserve supply runs low. It supports 4 growing stations with 12 reserve plugs (16 total).",
        "Nutrient delivery: a bang-bang controller switches relays driving peristaltic pumps that dose pH-up, pH-down, and nutrient solution from non-corrosive glass jars through silicone tubing, holding pH between 5.8 and 6.0. The dosing-rate error came out to roughly 3.7e-6 percent, well inside the 1 percent tolerance.",
        "Water level control: a dual-reservoir design (a backup top tank and an active bottom grow tank) governed by a normally closed solenoid valve, chosen so it fails shut rather than open on power loss to prevent flooding, maintaining a consistent 6 inch water depth via gravity feed through a check valve.",
        "Plant monitoring: an IR break-beam sensor (Tredix, roughly 1 meter range) detects 6 inches of growth above the seed and flags harvest readiness, using double-check logic (two checks a minute apart) to avoid false readings given how slowly the plants grow.",
        "All subsystems run on an Arduino Giga R1 WiFi controller, with an LCD interface telling the user when to harvest or when water or nutrients are needed.",
      ],
      myContributions: [
        "IR break-beam harvest sensor: selected and purchased the sensor, designed its mounting fixtures, and wrote the code that made it detect harvest readiness.",
        "Grow-light system: specced and purchased the right grow lights, designed their fixtures, and integrated them into the overall build.",
        "LCD user interface: designed the interface, set the specs, and wired every subsystem to report into it. The display was the hardest part. After more than 100 hours fighting a third-party screen that would not run reliably, I made the call two weeks before the deadline to switch to a first-party Arduino display. The rebuilt code worked on the first try, and I spent roughly 40 more hours refining it. The real takeaway was the judgment: root-causing a stubborn problem, then knowing when to cut losses and change direction.",
        "Specced and acquired the Arduino controller, and integrated every teammate's code into a single functioning system.",
        "Contributed to the CAD of the overall structure and led the physical build and assembly of the prototype.",
        "Supported the design and build of the gravity-fed plug dispenser as a contribution to a teammate's subsystem.",
      ],
      result: [
        "Delivered a working prototype demonstrating staggered, ongoing harvest rather than batch harvesting.",
        "Integrated four subsystems into a single automated countertop platform.",
      ],
      note: "Team of six, advised by Prof. Gouldstone. The contributions described above are my own.",
      reportUrl: "/reports/endless-garden-exec-summary.pdf",
      images: [
        { caption: "CAD model of the full Endless Garden appliance", src: "/reports/Capstone-CAD.jpg" },
        { caption: "The assembled Endless Garden prototype", src: "/reports/capstone-build.jpg" },
      ],
      uiScreens: [
        { caption: "Intro / home screen", src: "/reports/EG-UI-Screen-Intro.jpg" },
        { caption: "Harvest-ready alert", src: "/reports/EG-UI-Screen-Harvest.jpg" },
        { caption: "pH status", src: "/reports/EG-UI-Screen-PH.jpg" },
        { caption: "Water level", src: "/reports/EG-UI-Screen-water.jpg" },
        { caption: "Nutrient status", src: "/reports/EG-UI_Nutr.jpg" },
        { caption: "Plug refill / reserve status", src: "/reports/EG-UI_Refill.jpg" },
        { caption: "Settings", src: "/reports/EG-UI_settings.jpg" },
      ],
    },
    {
      slug: "renter-friendly-desk",
      name: "Renter-Friendly Desk",
      org: "Northeastern, Mechanical Component Design",
      role: "Mechanical Analysis & Cost Lead",
      dateRange: "2025",
      summary:
        "A team class project: a nesting shelf and desk that cranks out of a compact cabinet into a full desk via a rack-and-pinion mechanism, for renters who need free-standing furniture with no wall mounting. I co-ran the static and gear-stress analyses and led the cost breakdown.",
      skills: [
        "SolidWorks Simulation (FEA)",
        "Static & Fatigue Analysis",
        "Gear Design",
        "Cost Analysis",
        "Mechanical Design",
      ],
      metrics: [
        { value: "1.18", label: "Min SF (gear wear)" },
        { value: "1.5", label: "Fatigue SF (Goodman)" },
        { value: "$35.47", label: "Est. unit cost" },
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
        "Build a free-standing, nesting desk that collapses into a compact cabinet footprint and cranks out into a full desk on demand, with no wall mounting, and prove it structurally sound under a worst-case center load.",
      approach: [
        "Designed a nesting shelf and desk driven by a hand-crank rack-and-pinion mechanism that extends a full desk out of a compact cabinet, with no wall mounting required.",
        "Took the design from an original sketch to a small physical concept mockup, then a 3D-printed demonstration model shown to the class. The full-scale desk was designed to be built, not actually manufactured; only the small demonstration mockups were made.",
        "Ran the full analysis in SolidWorks Simulation (a lighter-weight FEA tool suited to a class component-design project, not a full ANSYS-level simulation): static failure and FEA, buckling and FEA, fatigue (Goodman criterion), connection analysis for screws and hinges, and gear analysis for the rack-and-pinion drive.",
        "Benchmarked cost against the closest competitor (the Orvil desk, $122) and built a full manufacturing and cost breakdown.",
      ],
      myContributions: [
        "Led the team overall: divided the analysis work across the six members and kept deliverables on deadline throughout the project.",
        "Co-wrote the project summary, together with Erika Kraft and Amanda Curran.",
        "Performed the static failure analysis and its correlated FEA, together with Amanda Curran.",
        "Performed the gear system analysis (bending stress, wear stress, torque and force, and extension speed), together with Amanda Curran.",
        "Led the cost analysis, sourcing, and cost breakdown independently.",
      ],
      result: [
        "Static: under a worst-case 33.7 lbf point load at the center of the unsupported desk, FEA confirmed the design was safe, with static safety factors generally well over 100 (one comparison point showed an FEA buckling safety factor of 337.93 against a hand-calculated 139.82, the gap attributed to hand-calc simplifications).",
        "Buckling was not a practical concern, with safety factors in the hundreds.",
        "Fatigue (Goodman) on the desktop plank under zero-to-max cyclic loading gave a safety factor of 1.5, using an estimated ultimate strength of 13 MPa (polished particleboard) and an endurance limit of 816.4 psi, the most marginal of the major failure modes.",
        "Connections: #8 flat-head wood screws (McMaster-Carr 90011A203) were specified with full preload and stiffness calculations; hinge bolts came out at safety factors of 48.3 (static) and 53.36 (cyclic), with hinge-side modes ranging from about 2.12 to 33.04.",
        "Gears were the tightest constraint in the whole design: the lowest safety factor found anywhere was about 1.18, for wear on one of the drive gears.",
        "Cost: an estimated unit price of $35.47 (plus about $2.00 packaging), against roughly $35,000 annual overhead and variable freight/marketing of about $23.90 to $31.00 per unit, assuming rural-China production with flat-pack shipping.",
      ],
      note: "Team project for a mechanical component design class, not a capstone or commercial product. It was a design project: the full desk was designed to be built, not actually built. Only small demonstration mockups (a concept mockup and a 3D-printed model) were made.",
      reportUrl: "/reports/Final-Design-Report-desk.pdf",
      images: [
        { caption: "CAD model of the nesting desk", src: "/reports/DESK-CAD.jpg" },
        { caption: "Bending-stress FEA (SolidWorks Simulation)", src: "/reports/desk-FEA-bending.jpg" },
      ],
    },
  ] as Project[],

  // ==========================================================================
  // ANSYS ENGINEERING PROJECTS: CFD coursework (Prof. Abedi's course), each
  // its own openable page under the Engineering Projects section. Same Project
  // shape as the main projects, with image/document placeholders for the ANSYS
  // output (pressure contours, velocity fields, mesh images, graphs).
  // ==========================================================================
  ansysNote: "ANSYS Fluent, Prof. Abedi's course",
  ansysProjects: [
    {
      slug: "cfd-cessna-172-airfoil",
      name: "Cessna 172 Airfoil Analysis",
      org: "ANSYS Fluent, CFD Homework 4",
      role: "CFD Analysis",
      dateRange: "Coursework",
      summary:
        "Modeled the Cessna 172 main wing (NACA 2412) and stabilizer (NACA 0012) airfoils in ANSYS Fluent at 63 m/s, analyzing pressure distribution, velocity fields, and lift and drag coefficients across a range of angles of attack.",
      skills: ["ANSYS Fluent", "Airfoil Aerodynamics", "Lift & Drag", "Pressure Fields"],
      metrics: [],
      problem:
        "Characterize the aerodynamics of the Cessna 172's main wing (NACA 2412) and stabilizer (NACA 0012) airfoils at a representative flight speed.",
      approach: [
        "Modeled both airfoils in ANSYS Fluent at 63 m/s, analyzing pressure distribution around each airfoil and the surrounding velocity flow fields.",
        "Computed lift and drag coefficients across angles of attack from -2 to 4 degrees to see how each responded.",
      ],
      result: [
        "At 0 degrees, captured the expected low-pressure, accelerated-flow region above the main wing (peak velocity about 73.9 m/s against a 63 m/s freestream), consistent with lift generation.",
        "Lift increased steadily with angle of attack, matching the classic cambered-airfoil lift curve: Cl climbed from about -0.0165 at -2 degrees to +0.0113 at 0 degrees, a small positive value at zero incidence that reflects the airfoil's built-in camber, and on to +0.072 at 4 degrees.",
        "Drag rose steadily across the same range (about 0.00375 at -2 degrees to 0.0065 at 4 degrees), capturing the expected lift-drag trade-off as angle of attack climbs toward stall.",
      ],
      reportUrl: "/reports/cfd-hw4-cessna-172.pdf",
    },
    {
      slug: "cfd-lid-driven-cavity",
      name: "High-Re Lid-Driven Cavity",
      org: "ANSYS Fluent, CFD Homework 3A",
      role: "CFD Analysis",
      dateRange: "Coursework",
      summary:
        "Recreated the classic Ghia, Ghia & Shin (1982) lid-driven cavity benchmark in ANSYS Fluent, reproducing the high-Reynolds-number vortex structure from Re = 100 to 10,000 that originally required a dedicated multigrid solver on a 1980s mainframe.",
      skills: ["ANSYS Fluent", "Mesh Independence", "Benchmark Validation", "Turbulence Modeling"],
      metrics: [
        { value: "100-10k", label: "Reynolds range" },
        { value: "257x257", label: "Finest mesh" },
        { value: "4", label: "Turbulence models" },
      ],
      problem:
        "Determine whether the high-Reynolds-number incompressible cavity-flow results published by Ghia, Ghia & Shin in 1982, originally obtained with a coupled strongly implicit multigrid method on an Amdahl 470 V/6 mainframe, can be reproduced 44 years later with a modern general-purpose solver on a laptop-class workstation.",
      approach: [
        "Rebuilt the 1 m x 1 m lid-driven cavity from the paper: a top wall moving in its own plane with three stationary no-slip walls, modeled as two-dimensional laminar incompressible flow, with the Reynolds number set through the fluid properties and lid velocity.",
        "Ran a mesh independence study at Re = 400 on 129 x 129 and 257 x 257 uniform grids, monitoring continuity and velocity residuals until they dropped several orders of magnitude and flattened out.",
        "Swept Reynolds numbers of 100, 400, 1000, 3200, 5000, 7500, and 10,000, using the 129 x 129 mesh at lower Re and the 257 x 257 mesh at higher Re, matching the paper's own mesh choices.",
        "Re-solved the Re = 10,000 case with four turbulence models (k-epsilon, k-omega, Spalart-Allmaras, and the Reynolds Stress Model) and compared their pathline patterns and residual histories.",
      ],
      result: [
        "Reproduced the full progression from a single smooth primary vortex at Re = 100 to a developed system of secondary and tertiary corner vortices at Re = 10,000, matching the benchmark qualitatively across the whole range.",
        "Confirmed mesh independence at Re = 400: the 129 x 129 grid was adequate at moderate Re, with the finer 257 x 257 grid reserved for higher Re, exactly as the original paper found.",
        "All four turbulence models produced very similar large-scale pathline patterns at Re = 10,000, indicating that the choice of turbulence closure had a modest effect on the resolved flow structure for this case.",
      ],
      note: "This problem is laminar-to-transitional at these Reynolds numbers for a cavity of this size, so the turbulence-model comparison is best read as a solver-setup consistency check rather than a validation of turbulence closure in a genuinely turbulent flow. A quantitative, point-by-point comparison against the paper's tables is left for future work. The full report with all figures is embedded below.",
      reportUrl: "/reports/cfd-hw3a-high-re-cavity.pdf",
    },
  ] as Project[],

  // ==========================================================================
  // STANDOUT ROLES: founder / leadership roles, featured near the TOP of the
  // page (most people have not founded and run either of these).
  // ==========================================================================
  standoutRoles: [
    {
      org: "Engineer Forward, Inc.",
      role: "Co-Founder & President",
      dateRange: "Nonprofit",
      website: "https://engineer-forward.org/",
      websiteLabel: "engineer-forward.org",
      summary:
        "Co-founded a peer-mentorship nonprofit connecting engineering students with recent graduates who have navigated the same academic and professional challenges. Incorporated as a Massachusetts nonprofit corporation (Articles of Organization filed), with bylaws drafted and a board of directors formed, currently pursuing 501(c)(3) status.",
      stats: [
        { value: "58", label: "Mentees" },
        { value: "10", label: "Mentors" },
      ],
      tags: ["Nonprofit", "Mentorship", "Mentors from RTX, J&J, SharkNinja"],
    },
    {
      org: "Spondooli LLC",
      role: "Co-Founder & CFO",
      dateRange: "Sep 2019 to Aug 2021",
      website: "https://spondooli.com/",
      websiteLabel: "spondooli.com",
      body: [
        "Roughly half the U.S. population is financially illiterate, and most people reach adulthood without ever learning how the stock market or basic banking actually works. Spondooli is a stock market and banking simulator built to close that gap: it gives users access to real stock market data with the safety of simulated money, teaching financial literacy through a game rather than a textbook.",
        "We incorporated the company in Delaware, built the product, and took it to market ourselves. Spondooli has been used in classrooms, including at Gulliver Preparatory in Miami, and has also built a meaningful base of active users entirely outside of those school partnerships.",
        "As Co-Founder and CFO, I led the business plan, owned the financials, ran fundraising, and negotiated the school deals directly. Spondooli is still active and in continued development today.",
      ],
      stats: [
        { value: "DE", label: "Incorporated" },
        { value: "Active", label: "In development" },
      ],
      tags: ["Business Plan", "Financials", "Fundraising", "B2B Sales"],
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

  education: [
    {
      school: "Northeastern University",
      degree: "B.S. Mechanical Engineering",
      dateRange: "2022 - May 2026",
      achievements: [
        "Magna Cum Laude",
        "3.8 GPA, Dean's List all semesters",
        "Treasurer, American Society of Mechanical Engineers",
      ],
    },
  ],
};
