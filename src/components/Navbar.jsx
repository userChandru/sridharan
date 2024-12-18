import React from 'react';
import { Code2, Mail, FileText, Home, User, Briefcase } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6" />
          <span className="font-mono text-lg">DevStudent</span>
        </div>
        <div className="hidden md:flex gap-6">
          {[
            { icon: Home, text: 'Home', href: '#home' },
            { icon: User, text: 'About', href: '#about' },
            { icon: Briefcase, text: 'Projects', href: '#projects' },
            { icon: FileText, text: 'Resume', href: '#resume' },
            { icon: Mail, text: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}