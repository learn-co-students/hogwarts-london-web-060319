import React from 'react';

//could put sortOptions here instead

const FilterSortOptions = ({setFilterType, setSortType, filterType, sortType, sortOptions, filterOptions}) => {
    return(
      <div>
          <select onChange={e => setFilterType(e.target.value)} className="ui selection dropdown">
              {
                 filterOptions.map(option => <option selected={filterType === option} key={option} className="dropdown icon" value={option}>{option}</option>) 
              }
          </select>
          <select onChange={e => setSortType(e.target.value)} className="ui selection dropdown">
              {
                 sortOptions.map(option => <option selected={sortType === option} key={option} className="dropdown icon" value={option}>Sort by {option}</option>) 
              }
          </select>
      </div>  
    )
}
export default FilterSortOptions;