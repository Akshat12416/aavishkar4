import React from 'react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function TrackCard({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div 
        onClick={toggleOpen}
        className="w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg"
      >
        
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-white font-semibold">{title}</h2>
          
          
          <ChevronDown 
            className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
  
        
        <div
          className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}
        >
          <div className="text-slate-300">{description}</div>
        </div>
      </div>
    );
  }
  
  export default TrackCard;


