import React from 'react'

const Filter = ({setFilterType, filterOptions, filterType, setSortType, sortType, sortOptions}) => {
    return (
        <div className="filterContainer fluid">
            <h4>Filter: </h4><select onChange={e => setFilterType(e.target.value)} className="filters">
                {
                    filterOptions.map(option => <option selected={filterType === option} key={option} value={option}>{option}</option>)
                }
            </select>
            <h4>Sort By: </h4><select onChange={e => setSortType(e.target.value)}  className="filters">
                {
                    sortOptions.map(option => <option selected={sortType === option} key={option} value={option}>{option}</option>)
                }
            </select>
        </div>
    )
}
export default Filter