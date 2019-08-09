import React from 'react'
import Pig from './Pig'

class PigHolder extends React.Component {
    render(){
        const {hogs} = this.props
        return(
            <div className="pigHolder">
                {hogs.map(hog => <Pig key={hog.id} {...hog}/>)}
            </div>
        )
    }
}

export default PigHolder