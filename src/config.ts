---
import { siteConfig } from "../config";
---

<section id="about" class="p-8 sm:p-12 md:p-16 lg:p-24">
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      <div class="lg:col-span-4">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold text-gray-900"
        >
          About Me
        </h2>
        <div
          class="w-[75px] h-[5px] mt-2 rounded-full"
          style={`background-color: ${siteConfig.accentColor}`}
        >
        </div>
      </div>

      <div class="lg:col-span-8 space-y-6">
        <p class="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-600">
          "I am a mechanical engineer graduating from Northeastern University in May 2026 with a B.S. and a 3.7 GPA. I thrive on solving complex design challenges and bringing products from concept to market. My passion for understanding how things work has led me into mechanical design, where I have worked on optimizing fluid systems, prototyping, testing, and making designs manufacturable."
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div class="text-3xl sm:text-4xl font-bold" style={`color: ${siteConfig.accentColor}`}>75%</div>
            <p class="text-sm sm:text-base text-gray-600 mt-2">Reduction in prototyping iterations at SharkNinja</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div class="text-3xl sm:text-4xl font-bold" style={`color: ${siteConfig.accentColor}`}>23%</div>
            <p class="text-sm sm:text-base text-gray-600 mt-2">Manufacturing yield increase at J&J MedTech</p>
          </div>
        </div>

        <p class="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          "At SharkNinja, I worked directly with cross-functional teams to build rapid prototypes by developing designs and Python algorithms that decreased prototyping iterations by 75%, letting us test concepts faster and catch design issues early. At Johnson & Johnson MedTech, I tackled production bottlenecks head-on through hands-on problem solving and data-driven analysis. By designing, testing, and implementing 150+ fixtures and line improvements, I increased manufacturing yield by 23%."
        </p>

        <p class="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          "My research background includes investigating neutron shielding ceramics for RTX Raytheon, where I connected material properties at the microscale to real-world performance. This work reinforced my belief that great mechanical designs are generated when the underlying mechanisms are understood."
        </p>

        <p class="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
          "I've always challenged myself with the most technically demanding projects, whether for aerospace systems or emerging technology design. My interests vary widely from Formula 1 and financial education to machine learning and deep neural networks—I'm always trying to learn new skills and frameworks. The projects below demonstrate how I approach complex mechanical problems by aligning the right people and delivering solutions that work in the real world."
        </p>

        <div class="pt-4">
          <div class="flex flex-wrap gap-3">
            {
              siteConfig.skills.map((skill) => (
                <span class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-800 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                  {skill}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
