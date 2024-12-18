import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, tech, image }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <Github className="w-5 h-5" />
            Code
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <ExternalLink className="w-5 h-5" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}