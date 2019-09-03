import React, { Component } from 'react';
import ShowMoreDetails from './ShowMoreDetails.'

class HogCard extends Component {

state = {
    hogButtonClicked: false
}

handleClick = () => {
    console.log('clicked')
    this.setState({hogButtonClicked: !this.state.hogButtonClicked})
  }

    render () {
        return(
            <div className="hogCard">         
                <h2>{this.props.hog.name}</h2>
                <img alt={''} src={require('../hog-imgs/' + this.props.hog.name.toLowerCase().split(' ').join('_') + '.jpg')} />
                <button onClick={() => this.handleClick()}>Show more Details</button>                      
                {this.state.hogButtonClicked === true ? <ShowMoreDetails hog={this.props.hog}/> : null}            
            </div>
        )
    }
}

export default HogCard;