// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react'; // Import necessary icons
import { basePath } from '../app/page'; // Adjust path as needed, or pass basePath as prop

const ProjectCard = ({ project }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
    <div className="relative">
      <img
        src={`${basePath}/${project.imageUrl}`} // Use basePath with imageUrl
        alt={project.title}
        className="w-full h-48 object-cover"
        onError={(e) => { e.target.src = `https://placehold.co/600x400/1e293b/a78bfa?text=${encodeURIComponent(project.title.replace(/\s/g, '+'))}`; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="flex space-x-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors" title="Live Demo">
            <ExternalLink size={24} />
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors" title="GitHub Repository">
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="bg-purple-900 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
