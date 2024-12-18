import React from 'react';
import { Code, Database, Server } from 'lucide-react';
import SkillGroup from './ui/SkillGroup';
import TechIcon from './ui/TechIcon';

export default function About() {
  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "Java", "C++"] },
    { category: "Web Technologies", items: ["React", "Node.js", "HTML/CSS", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Linux", "Docker"] }
  ];

  const techIcons = [
    { icon: Code, text: "Frontend Dev" },
    { icon: Server, text: "Backend Dev" },
    { icon: Database, text: "Database" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I'm a third-year Computer Science student passionate about software development
              and problem-solving. Currently focusing on web development and data structures.
            </p>
            <div className="flex gap-4 mb-6">
              {techIcons.map((item) => (
                <TechIcon key={item.text} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skillGroup) => (
                <SkillGroup 
                  key={skillGroup.category}
                  category={skillGroup.category}
                  items={skillGroup.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}