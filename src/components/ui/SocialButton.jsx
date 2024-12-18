import React from 'react';

export default function SocialButton({ href, icon, label }) {
  return (
    <a 
      href={href} 
      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 hover:scale-110 transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {React.cloneElement(icon, { 
        className: 'w-6 h-6 group-hover:text-blue-400 transition-colors' 
      })}
    </a>
  );
}