// src/components/SkillBar.jsx
'use client';
import React from 'react';

const SkillBar = ({ skill, icon: SkillIcon }) => (
  <div className="flex items-center py-2 border-b border-slate-700 last:border-b-0">
    {SkillIcon && <SkillIcon className="text-purple-400 mr-3" size={20} />}
    <span className="text-base font-medium text-gray-300">{skill}</span>
  </div>
);

export default SkillBar;
