import React, { Component } from 'react';
import HogCard from './HogCard'

class HogsContainer extends Component {

    render() {
        return (
            <div className="hogsContainer">
                {this.props.hogData.map(hog => <HogCard hog={hog}/>)}
            </div>
        )
    }
}

export default HogsContainer;