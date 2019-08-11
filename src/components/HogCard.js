import React, { Component } from "react";

export default class HogCard extends Component {
    state = {
        showDetails: false
    }
  
    toggleClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    showAllDetails = () => {
        return (
            <div>
                <h4>Specialty: {this.props.hog.specialty}</h4>
                <h4>Greased: {this.props.hog.greased? "Yes" : "No"}</h4>
                <h4>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
                <h4>Medal: {this.props.hog['highest medal achieved']}</h4><br/>
            </div>
        )
    }

    render() {
    return (
        <div>  
            <div>
                <h3>{this.props.hog.name}</h3>
                <img onClick={this.toggleClick} src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} alt="this.props.hog.name"/>
            {this.state.showDetails && this.showAllDetails()}
            </div>
        </div>
    );
  }
}
