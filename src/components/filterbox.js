import React from "react";
import './filter.css'
import FilterSection from "./filtersection";


const FilterBox = () => {
    const subjectsOptions = ['Math', 'Science', 'History', 'Geography'];
    const moduleoptions = ['New Modules', 'Popular Modules', 'Coming Soon'];
    const langOptions = ['English', 'Spanish', 'Italian'];
    const currOptions = ['Cambridge', 'Edexcel', 'NGSS'];
    
    return (
        <div className="filter-box">
            <FilterSection title="Modules" options={moduleoptions} />
            <FilterSection title="Subjects" options={subjectsOptions} />
            <FilterSection title="Languages" options={langOptions} />
            <FilterSection title="Curriculum" options={currOptions} />
        </div>
    );
};

export default FilterBox;




    