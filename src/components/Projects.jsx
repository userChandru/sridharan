import React from 'react';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Student Management System",
      description: "A full-stack web application for managing student records and courses.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization of common sorting and pathfinding algorithms.",
      tech: ["JavaScript", "HTML Canvas", "CSS"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Weather App",
      description: "Real-time weather application using OpenWeather API.",
      tech: ["React", "API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}