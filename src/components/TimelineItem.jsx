// src/components/TimelineItem.jsx
'use client';
import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'; // Import necessary icons

const TimelineItem = ({ icon, role, company, period, location, description, degree, institution }) => {
  const IconComponent = icon === 'work' ? Briefcase : GraduationCap;
  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      <div className="flex items-center absolute left-0 sm:left-4 top-4">
        <div className="w-4 sm:w-6 h-4 sm:h-6 bg-slate-700 rounded-full group-hover:bg-purple-500 transition-colors duration-300"></div>
        <div className="absolute left-0 sm:left-[-1.1rem] sm:group-hover:left-[-1.3rem] transition-all duration-300">
          <div className="p-2 bg-slate-800 rounded-full ring-8 ring-slate-900">
            <IconComponent className="text-purple-400" size={20} />
          </div>
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-bold text-white">{role || degree}</h3>
        <p className="text-purple-300 font-semibold">{company || institution}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-400 mt-1">
          <div className="flex items-center mr-4"><Calendar size={14} className="mr-2" />{period}</div>
          <div className="flex items-center"><MapPin size={14} className="mr-2" />{location}</div>
        </div>
        {description && <p className="mt-2 text-gray-400 text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default TimelineItem;
