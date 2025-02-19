import React from "react";

import image from "../Assets/AE5A9926.jpg";

const About = () => {
  

  return (
    <div id="about" className="container mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div class="space-y-4" >
                    <h2 class="text-2xl md:text-4xl font-bold text-indigo-600 ">A Propos de Moi</h2>
                    <p class="text-gray-600">Freelance en développement web, je transforme vos idées en sites professionnels et interfaces intuitives. Avec une passion pour le design et une expertise technique, je crée des expériences visuelles et fonctionnelles captivantes. Mon approche collaborative garantit un projet fidèle à votre vision tout en répondant aux attentes de votre audience.
                         Ensemble, faisons de votre présence en ligne un véritable atout pour votre succès.</p>
                    
                  
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700">HTML</span>
                                <span class="text-gray-700">90%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-indigo-600 h-2 rounded-full" style={{width:"90%"}}></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700">CSS</span>
                                <span class="text-gray-700">85%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-indigo-600 h-2 rounded-full" style={{width:"90%"}}></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700">Tailwind CSS</span>
                                <span class="text-gray-700">80%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                
                                <div class="bg-indigo-600 h-2 rounded-full"  style={{width:"80%"}}></div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-gray-700">React</span>
                                <span class="text-gray-700">70%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-indigo-600 h-2 rounded-full"  style={{width:"70%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>

              
        <div className="relative" >
          <img src={image} alt="Profile" className="rounded-lg shadow-xl w-full h-auto" />
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600 rounded-lg -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default About;

