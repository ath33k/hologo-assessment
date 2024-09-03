import React, { useState } from 'react';

const FilterSection = ({title, options}) => {
    const[expanded, setExpanded] = useState(false);
    const toggleExpanded = ()=> setExpanded(prevState =>!prevState);
   
    return(
        <div className='filter-section'>
          <h4 onClick={toggleExpanded}>
            {title}{expanded ? '-' : '+'} 
            </h4> 
        <div className={expanded? "filter-options expanded": "filter-options"}>
           {options.map((option, index) =>(
            <label key={index}>
                <input type='checkbox'/> {option}
            </label>
           ))}
           <button onClick={toggleExpanded}>
            {expanded? 'show less':'show more'}
           </button>
        </div>
        </div>
    );

};
export default FilterSection
