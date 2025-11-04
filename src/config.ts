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
  "I am a mechanical engineer graduating from Northeastern University in May 2026 with a B.S. and a 3.7 GPA. I thrive on solving complex design challenges and bringing products from concept to market. My passion for understanding how things work has led me into mechanical design, where I've worked on optimizing fluid systems, prototyping, testing, and making designs manufacturable. \n At SharkNinja, I worked directly with cross-functional teams to build rapid prototypes by developing designs and Python algorithms that decreased prototyping iterations by 75%, letting us test concepts faster and catch design issues early. At Johnson & Johnson MedTech, I tackled production bottlenecks head-on through hands-on problem solving and data-driven analysis. By designing, testing, and implementing 150+ fixtures and line improvements, I increased manufacturing yield by 23%. \n My research background includes investigating neutron shielding ceramics for RTX Raytheon, where I connected material properties at the microscale to real-world performance. This work reinforced my belief that great mechanical designs are generated when the underlying mechanisms are understood. I've always challenged myself with the most technically demanding projects, whether for aerospace systems or emerging technology design. My interests vary widely from Formula 1 and financial education to machine learning and deep neural networks—I'm always trying to learn new skills and frameworks. The projects below demonstrate how I approach complex mechanical problems by aligning the right people and delivering solutions that work in the real world.",
  skills: ["Languages: English, French, Spanish", "3D CAD: SolidWorks, PTC-Creo, AutoCAD, Onshape", "Prototyping: FDM, SLA, Laser Cutter, Power and Hand Tools", "Programming: Python, C++, JavaScript, MATLAB, Minitab"],
  
  projects: [
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
      dateRange: "Jan-Jun 2025",
      bullets: [
        "Architected intuitive user experiences and performance improvements for consumer floorcare products via 3D CAD innovations with predictive algorithms while orchestrating cross-functional collaboration.",
        "Rapidly prototyped designs using both hand tool with Creo software enabling engineering proof of concepts, technical presentations to international teams and C-suite executives",
        "Developed innovative Python algorithm integrating fluid dynamics, predictive modeling to optimize design performance, improving prototyping efficiency by 25%",
        "Engineered, developed and tested novel designs achieving industry KPI beating products and setting new benchmarks",
        "Aligned mechanical, industrial and manufacturing requirements for prototypes iterations, Design for Manufacturing (DFM) planning and accelerating process validation",
      ],
    },
    {
      company: "Directed Assembly of Particles & Suspension Research Laboratory",
      title: "Undergraduate Researcher",
      dateRange: "Aug - Dec 2025",
      bullets: [
        "Pioneered advanced material characterization for nuclear, aerospace systems by investigating quantum scale interactions in UV-curable ceramics, testing variations and analyzing nuclear reactor data.",
        "Engineered optimized material compositions through statistical analysis of neutron shielding flux data from reactor experiments, achieving 43% improvement in shielding performance",
        "Built iterative ceramic prototypes using additive manufacturing while modeling mechanical properties through Jacob equations analysis and SEM imaging Validation",
      ],
    },
    {
      company: "Johnson & Johnson MedTech | Heart Recovery",
      title: "Production Engineering Co-op",
      dateRange: "Jan - Jun 2024",
      bullets: [
        "Optimized medical device manufacturing using data-driven lean implementations, leveraging production analytics to eliminate inefficiencies and enhance performance across production multiple lines.",
        "Utilized Instron testing equipment, to determine critical stress points and played a pivotal role in rectifying issues before they led to business risks saving $1.3M+",
        "Created and implemented 156 production fixtures and lean improvements that achieved 23% yield gains via supplier collaboration and process optimization",
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
