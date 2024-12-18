import React from 'react';

export default function TechIcon({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-600">
      <Icon className="w-4 h-4 text-blue-500" />
      {text}
    </div>
  );
}