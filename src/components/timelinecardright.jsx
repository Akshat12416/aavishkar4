import React from 'react';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function Timelinecardright({ title, description, date }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div 
        onClick={toggleOpen}
        className="w-40 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 mb-4 cursor-pointer transition-all duration-300 hover:shadow-lg"
      >
        
        <div className="flex items-center justify-between">
        <ChevronRight 
            className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
          />


          <h2 className="text-sm text-white font-semibold">{title}</h2>
          
        </div>
  
        
        <div
          className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}
        >
          <p className='text-sm text-white m-1'>{date}</p>
          <div className="text-slate-300">{description}</div>
        </div>
      </div>
    );
  }
  
  export default Timelinecardright;


