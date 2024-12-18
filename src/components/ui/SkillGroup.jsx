import React from 'react';
import SkillTag from './SkillTag';

export default function SkillGroup({ category, items }) {
  return (
    <div>
      <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <SkillTag key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}