import React, { Component } from 'react';
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg';
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg';
import cherub from '../hog-imgs/cherub.jpg';
import galaxy_note from '../hog-imgs/galaxy_note.jpg';
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg';
import mudblood from '../hog-imgs/mudblood.jpg';
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg';
import porkchop from '../hog-imgs/porkchop.jpg';
import rainbowdash from '../hog-imgs/rainbowdash.jpg';
import sobriety from '../hog-imgs/sobriety.jpg';
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg';
import trouble from '../hog-imgs/trouble.jpg';
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg';

const imageMap ={
    'Augustus Gloop': augustus_gloop,
    'Bay of Pigs': bay_of_pigs,
    'Cherub': cherub,
    'Galaxy Note': galaxy_note,
    'Leggo My Eggo': leggo_my_eggo,
    'Mudblood': mudblood,
    'Piggy smalls': piggy_smalls,
    'Porkchop': porkchop,
    'Rainbowdash': rainbowdash,
    'Sobriety': sobriety,
    'The Prosciutto Concern': the_prosciutto_concern,
    'Trouble': trouble,
    'TruffleShuffle': truffleshuffle
}

// img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)} alt="pig"
// img src={imageMap[name]}

class HogCard extends Component {

    state = {
        showDetails: false 
    }
    
    details = (specialty, weight, medal) => {
        return(
        <div>
            <div className="extra content">
            <i className="star icon"></i>
                {specialty}
        </div>
        <div className="extra content">
                <i className="balance scale icon"></i>
                {weight} kg
        </div>
        <div className="extra content">
                <i className="trophy icon"></i>
                {medal}
        </div>
        </div>
        )
    }

    toggleShowDetails = () => this.setState({showDetails: !this.state.showDetails})

    render() {
        const { name, specialty } = this.props
        const weight = this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        const medal = this.props['highest medal achieved']
        return (
        <div className='ui card'>
            <div className= "image">
                <img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_')}.jpg`)} alt="pig"/>
            </div>
            <div className="content">
                <a className="header">{name}</a>
                <button className="ui button" onClick={this.toggleShowDetails}>{this.state.showDetails ? 'hide' : 'show'}</button>
            </div>
                {this.state.showDetails && this.details(specialty, weight, medal)}
        </div>
        );
    }
}

export default HogCard;