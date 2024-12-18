import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialButton from './ui/SocialButton';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500"
        />
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-xl text-blue-400 mb-6">Computer Science Student</p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Passionate about web development, algorithms, and building things that matter.
          Currently pursuing my Bachelor's in Computer Science at University Name.
        </p>
        <div className="flex justify-center gap-4">
          <SocialButton href="https://github.com" icon={<Github />} />
          <SocialButton href="https://linkedin.com" icon={<Linkedin />} />
          <SocialButton href="mailto:john@example.com" icon={<Mail />} />
        </div>
      </div>
    </section>
  );
}