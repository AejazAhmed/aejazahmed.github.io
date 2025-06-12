// src/app/page.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'; // Common icons for this file

// Import data
import portfolioData from '../data/portfolioData';

// Import components
import SkillBar from '../components/SkillBar';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Determine base path for GitHub Pages
// This is intentionally kept here as it's a global setting for the app's asset paths
// For consistency, it's also exported from layout.jsx, but keeping it here for components
// that might directly use it without prop drilling or context.
export const basePath = ''; // Replace with your repository name

// --- Main App Component ---
export default function App() {
  // Nav links generated from sections. Order defines navigation order.
  const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // For mobile menu, if you use this function within the Header, it would typically handle menu closing.
    // However, since Header handles its own state, this is not strictly needed here for the main App.
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-300 font-sans leading-relaxed">
      {/* Global styles, metadata, and CDN script are now handled in src/app/layout.jsx */}

      <Header
        portfolioName={portfolioData.name}
        navLinks={navLinks}
        smoothScroll={smoothScroll}
        contactInfo={portfolioData.contact}
      />

      <main className="container mx-auto px-6">
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              {portfolioData.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              {portfolioData.bio}
            </p>
            <div className="flex justify-center space-x-6 mb-8"> {/* Added mb-8 for spacing */}
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="GitHub Profile"><Github size={32} /></a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn Profile"><Linkedin size={32} /></a>
              <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Email Me"><Mail size={32} /></a>
            </div>
            {/* Download Resume Button */}
            {/* <a
              href={`${basePath}/aejaz-ahmed.pdf`} // IMPORTANT: Replace 'your-resume.pdf' with the actual path to your resume file in the public folder.
              download // This attribute prompts the browser to download the file
              className="mt-4 inline-block bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform mr-4"
            >
              Download Resume
            </a> */}
            <a href="#projects" onClick={(e) => smoothScroll(e, 'projects')} className="mt-12 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
              View My Work
            </a>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="py-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/3">
                    <img
                      src={portfolioData.contact.avatar}
                      alt={portfolioData.name}
                      className="rounded-full w-64 h-64 mx-auto shadow-lg shadow-purple-500/30 object-cover"
                      onError={(e) => { e.target.src = `https://placehold.co/300x300/1e293b/a78bfa?text=${encodeURIComponent(portfolioData.name.replace(/\s/g, '+'))}`; }}
                    />
                </div>
                <div className="md:w-2/3 text-lg text-gray-400">
                    <p className="mb-4">
                        Hello! I'm {portfolioData.name}, a developer based in Pune, India. I am an experienced Technical Lead with over 8 years of hands-on experience in software development, specializing in backend systems, data structures, algorithms, and performance optimization. My core interests lie in data structures and algorithm analysis, and I thrive in developing robust and scalable backend solutions using languages like Python, C++, and Java.
                    </p>
                    <p>Throughout my career, I have focused heavily on Python, working extensively with frameworks such as Django, Flask, and aiohttp to design and implement high-performance backend applications. I have hands-on experience with Docker and Kubernetes for containerization and orchestration. Additionally, I have implemented CI/CD pipelines to automate and streamline deployment processes, ensuring clean, efficient, and scalable project environments.</p>
                    <p>In addition to development, I have contributed to deployment automation and infrastructure management, having worked on deploying various services using tools like Packer, Ansible, SaltStack, and Terraform.</p>
                    <p>One of my current areas of interest is Artificial Intelligence and Machine Learning. I'm eager to explore these domains further and apply my analytical skills to solve real-world problems. I am excited about the opportunity to leverage AI/ML technologies to build impactful solutions.</p>
                    <p>As a quick learner and an advocate for continuous improvement, I thrive in environments that challenge me to innovate, collaborate, and drive results. I am always looking for new opportunities to develop, research, and make meaningful contributions in the world of technology.</p>
                </div>
            </div>
        </section>


        {/* --- Skills Section --- */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.skills.map(skillCategory => {
              const IconComponent = skillCategory.icon;
              return (
                <div key={skillCategory.category} className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    {IconComponent && <IconComponent className="text-purple-400 mr-4" size={32} />}
                    <h3 className="text-xl font-semibold text-white">{skillCategory.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {skillCategory.items.map(skill => (
                      <SkillBar key={skill.name} skill={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- Experience & Education Section --- */}
        <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">My Journey</h2>
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-slate-700">
                    <h3 className="text-2xl font-semibold text-white mb-6 ml-4">Experience</h3>
                    {portfolioData.experience.map((item, index) => (
                         <TimelineItem key={index} icon="work" {...item} />
                    ))}
                    <h3 className="text-2xl font-semibold text-white mt-12 mb-6 ml-4">Education</h3>
                    {portfolioData.education.map((item, index) => (
                         <TimelineItem key={index} icon="education" {...item} />
                    ))}
                </div>
            </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
          </p>
          <a href={`mailto:${portfolioData.contact.email}`} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform inline-block">
            Say Hello
          </a>
        </section>
      </main>

      <Footer portfolioName={portfolioData.name} />
    </div>
  );
}
