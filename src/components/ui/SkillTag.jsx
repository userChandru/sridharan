import React from 'react';

export default function SkillTag({ text }) {
  return (
    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
      {text}
    </span>
  );
}