import React from 'react'

class FilterPig extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.filterHandler()}>{this.props.filterState === true ? "Greased" : "All"}</button>
                <br></br>
                <select onChange={(event)=> this.props.sortHandler(event)}>
                    <option value="">--Please choose sorting--</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
        )
    }
}

export default FilterPig