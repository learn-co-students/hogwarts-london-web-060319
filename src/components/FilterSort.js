import React from 'react';

const FilterSort = ({filterOptions, filterChoice, changeFilterChoice, sortOptions, sortChoice, changeSortChoice}) => {
    return(
        <div>
            <select onChange={event => {changeFilterChoice(event.target.value)}}>
                {filterOptions.map(opt => {
                    return <option key={opt} selected={filterChoice === opt} value={opt}>{opt}</option>
                })}
            </select>
            <select onChange={event => {changeSortChoice(event.target.value)}}>
                {sortOptions.map(opt => {
                    return <option key={opt} selected={sortChoice === opt} value={opt}>{opt}</option>
                })}
            </select><br/><br/><br/>
        </div>
    )
}

export default FilterSort