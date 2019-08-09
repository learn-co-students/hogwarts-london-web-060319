import React from 'react';

export default class FilterHogs extends React.Component{
    render(){
        const {options,filter,handle}= this.props 

        return(

<div>
        <select onChange= {event=> handle(event.target.value)}>
{options.map(option=> <option value={option}>{option}</option>)}

        </select>
</div>
        )
    }
}