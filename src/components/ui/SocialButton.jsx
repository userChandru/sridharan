import React from 'react';

export default function SocialButton({ href, icon }) {
  return (
    <a 
      href={href} 
      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(icon, { className: 'w-6 h-6' })}
    </a>
  );
}