export const siteConfig = {
  name: "Victor Diaz Gessner",
  title: "Mechanical Engineer",
  description: "Victor Diaz Gessner's portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "victorxdiag@gmail.com",
    linkedin: "https://linkedin.com/in/victordiazgessner/",
    github: "https://github.com/VIctorDiazGessner/",
  },
 aboutMe:
  "I am a mechanical engineer graduating from Northeastern University in May 2026 with a B.S. and a 3.7 GPA. I thrive on solving complex design challenges and bringing products from concept to market. My passion for understanding how things work has led me into mechanical design, where I've worked on optimizing fluid systems, prototyping, testing, and making designs manufacturable. \n At SharkNinja, I worked directly with cross-functional teams to build rapid prototypes by developing designs and Python algorithms that decreased prototyping iterations by 75%, letting us test concepts faster and catch design issues early. At Johnson & Johnson MedTech, I tackled production bottlenecks head-on through hands-on problem solving and data-driven analysis. By designing, testing, and implementing 150+ fixtures and line improvements, I increased manufacturing yield by 23%. \n My research background includes investigating neutron shielding ceramics for RTX Raytheon, where I connected material properties at the microscale to real-world performance. This work reinforced my belief that great mechanical designs are generated when the underlying mechanisms are understood. I've always challenged myself with the most technically demanding projects, whether for aerospace systems or emerging technology design. My interests vary widely from Formula 1 and financial education to machine learning and deep neural networks; I'm always trying to learn new skills and frameworks. The projects below demonstrate how I approach complex mechanical problems by aligning the right people and delivering solutions that work in the real world.",
  skills: ["Languages: English, French, Spanish", "3D CAD: SolidWorks, PTC-Creo, AutoCAD, Onshape", "Prototyping: FDM, SLA, Laser Cutter, Power and Hand Tools", "Programming: Python, C++, JavaScript, MATLAB, Minitab"],
  
  projects: [
    {
      name: "Ever Garden ",
      description:
        "As the hardware-software integration lead on the Ever Garden automated hydroponic system, I designed and developed an eight-screen touchscreen user interface on the Arduino Giga R1 WiFi with display shield, implementing custom coordinate mapping and optimized screen refresh logic to eliminate visual artifacts while maintaining responsive touch navigation. For plant monitoring, I integrated a Tredix IR break beam sensor system, designing modular sensor fixtures in SolidWorks that allow reconfiguration for different seed types, and developed the embedded detection code that triggers harvest notifications when plants reach the 6-inch maturity threshold at a validated 16-inch sensor spacing. For the lighting subsystem, I designed the grow light mounting in SolidWorks to maintain optimal 6-inch separation from plant canopy at maturity, working within the tolerances of my own fixture designs while ensuring seamless integration with teammates' mechanical assemblies; I also sourced an off-the-shelf lighting solution with an integrated timer that met all spectral and intensity requirements while reducing the iteration cycle for fixture development. Beyond my own subsystems, I coordinated the integration of sensor code from multiple teammates into a unified codebase, merging distributed code for pH management, water level monitoring, and nutrient delivery into the central Arduino controller to create a cohesive automated platform.",
         link: "https://sites.google.com/view/victor-diaz-gessner-evergarden/home",
      skills: ["UI/UX Design", "Solidworks", "Arduino", "Sensors & Validation", "HW-SW Integration", "User Centric Design" ],
    },
    {
      name: "Flow Rate Algorithm",
      description:
        "Cut prototyping costs by 75% by self-teaching Python to solve a fluid mechanics challenges by developing an algorithm that calculates perfect flow distribution across manifold outlets using Reynolds numbers, pressure drop analysis, and discharge coefficients. Instead of continuing expensive trial-and-error prototyping and printing, I built a computational tool that accounts for real-world variables like material roughness and pressure losses, achieving the precise flow uniformity that manual design couldn't match. This reusable algorithm now permanently accelerates our manifold design process, demonstrating how combining mechanical engineering principles with programming creates breakthrough solutions.",
         link: "https://sites.google.com/view/flow-rate-algorithm/home",
      skills: ["Python", "Predictive Modeling", "DFM", "Test & Validation", "Cost Engineering", "Prototyping", "3D CAD" ],
    },
    {
      name: "Renter Friendly Desk",
      description:
       "Designed a mechanically-operated transforming desk that solves the urban space crisis reducing footprint by 70% when stored while providing full workspace functionality through an elegant hand-crank system. Led a six-person team while self-teaching FEA to validate the rack-and-pinion mechanism, performing advanced structural calculations to ensure the freestanding design could support real-world loads without wall mounting. Delivered a fully functional 3D prototype and comprehensive engineering analysis proving this renter-friendly solution could revolutionize small-space living for the 75% of Americans in apartments.",
       link: "https://sites.google.com/view/renter-friendly-desk/home",
      skills: ["FEA", "Project Management", "CAD", "Safety Factor Design"],
    },
    {
      name: "Spondooli, LLC (Startup | CO-founder)",
      description:
        "Co-founded a financial literacy application featuring real-time stock data designed to educate users on financial management principles. Managed company finances, led crowdfunding initiatives, and spearheaded marketing efforts targeting educational organizations. The venture's impact was validated by winning 1st place in the New York regionals at the 2020 Diamond Challenge hosted by the University of Delaware.",
      link: "https://www.spondooliofficial.com/",
      skills: ["Crowd-funding", "Entrepreneurship", "B2B Marketing", "Stakeholder Communication", "Financial Management"],
    },
  ],
  experience: [
    {
    company: "SharkNinja",
title: "New Product Development Co-op",
dateRange: "Jan - Jun 2025",
bullets: [
  "Engineered novel wet floorcare systems through CAD-driven design, fluid dynamics calculations and validation testing, coordinating across mechanical, manufacturing and electrical engineering teams",
  "Designed and validated mechanical systems using Creo and rapid prototyping techniques, conducting engineering proof-of-concept tests and delivering technical presentations to C-suite and international teams",
  "Developed Python-based fluid dynamics model integrating first principles and empirical data, achieving 25% reduction in prototype iteration cycles through data-driven analysis",
  "Executed design validation testing against performance specifications, iterating designs through test-analyze-fix cycles to exceed industry performance benchmarks",
  "Coordinated Design for Manufacturing (DFM) across mechanical, industrial design and manufacturing teams, defining validation protocols and accelerating qualification processes",
],
},
{
company: "Directed Assembly of Particles & Suspension Research Laboratory",
title: "Undergraduate Researcher",
dateRange: "Aug - Dec 2024",
bullets: [
  "Studied material characterization for aerospace and nuclear shielding applications, investigating quantum-scale interactions in UV-curable ceramics through nuclear reactor experiments for RTX Raytheon",
  "Engineered optimized material compositions through statistical analysis of neutron shielding flux data from reactor experiments, achieving 43% improvement in shielding performance",
  "Designed iterative ceramic prototypes using additive manufacturing while modeling mechanical properties through Jacobian equations analysis and Scanning Electron Microscopy imaging",
],
},
{
company: "Johnson & Johnson MedTech | Heart Recovery",
title: "Production Engineering Co-op",
dateRange: "Jan - Jun 2024",
bullets: [
  "Optimized high-precision medical device manufacturing through data-driven process improvements, statistical analysis, and Lean Six Sigma methodologies across multiple production lines",
  "Conducted failure mode analysis using Instron tensile testing and root cause investigation, leading cross-functional engineering teams to implement corrective actions that prevented product failures and avoided $1.3M+ in potential losses",
  "Designed and implemented 156 production fixtures using lean principles, achieving 23% yield improvement through data-driven optimization, statistical process control and supplier collaboration",
],
},
  ],
  education: [
    {
      school: "Northeastern University",
      degree: "Bachelor of Science in Mechanical Engineering ",
      dateRange: "2022 - 2026",
      achievements: [
        "Graduated with a 3.7 GPA",
        "Dean's List all semesters",
        "Treasurer of the American Society of Mechancial Engineers",
      ],
    },
  ],
};
