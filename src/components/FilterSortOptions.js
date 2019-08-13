import React from 'react'


const FilterSortOptions = ({setFilterType, setSortType, sortOptions, filterOptions, filterType, sortType}) => {
  return(
    <div>
    <select onChange={event => setFilterType(event.target.value)}>
    {
        filterOptions.map(option => <option selected={filterType === option} key={option} value={option}>{option}</option>)}

    </select>

    <select onChange={event => setSortType(event.target.value)}>
    {
    sortOptions.map(option => <option selected={sortType === option} key={option} value={option}>{option}</option>)
  }
    </select>
    </div>
  )
}



export default FilterSortOptions
