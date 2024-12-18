import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialButton from "./ui/SocialButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-white">
        <div className="animate-fade-in-down">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">John Doe</h1>
          <p className="text-xl text-blue-400 mb-6 animate-fade-in-up">
            Computer Science Student
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Passionate about web development, algorithms, and building things that
            matter. Currently pursuing my Bachelor's in Computer Science at
            University Name.
          </p>
        </div>
        <div className="flex justify-center gap-4 animate-fade-in-up">
          <SocialButton 
            href="https://github.com" 
            icon={<Github />}
            label="GitHub Profile"
          />
          <SocialButton 
            href="https://linkedin.com" 
            icon={<Linkedin />}
            label="LinkedIn Profile"  
          />
          <SocialButton 
            href="mailto:john@example.com" 
            icon={<Mail />}
            label="Email Me"
          />
        </div>
      </div>
    </section>
  );
}
