'use client';

import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather data visualization with location-based forecasts',
      tech: ['Next.js', 'API Integration', 'Charts.js'],
      link: '#'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! (This is a demo - form submission not implemented)');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800">Your Name</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-slate-900">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-900">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-600">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-slate-600">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-slate-600">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-600">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Github size={24} className="text-slate-700" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Linkedin size={24} className="text-slate-700" />
            </a>
            <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Mail size={24} className="text-slate-700" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <User className="mr-3 text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              I'm a passionate full-stack developer with expertise in building modern web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless user 
              experiences backed by robust server-side solutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I love solving complex problems and constantly learning new technologies to stay at the 
              forefront of web development. When I'm not coding, you can find me contributing to open-source 
              projects or exploring the latest tech trends.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Code className="mr-3 text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="mr-3 text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-100">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-12">
            <MessageSquare className="mr-3 text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 Your Name. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}