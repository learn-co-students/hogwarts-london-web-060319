import React from 'react'


class Pig extends React.Component{
    
    state = {
        showDetails: false
    }

    details = (name, weight, specialty, greased, medal) => {
        return(
    <div className="infoCard" onClick={this.toggleShowDetails}>
        <h1>{name}</h1>
        <h3>Specialty: {specialty}</h3>
        <h3>{greased ? "Good for Noms :)" : "No Good for Noms"}</h3>
        <h3>Weight: {weight}</h3>
        <h3>Highest Medal: {medal}</h3>
    </div>
        )}

    picture = (image, name) => {
        return(
            <div className="infoCard" onClick={this.toggleShowDetails}>
        {/* //                 <h1>{name}</h1>
        // <h3>Specialty: {specialty}</h3>
        // <h3>{greased ? "Good for Noms :)" : "No Good for Noms"}</h3>
        // <h3>Weight: {weight}</h3>
        // <h3>Highest Medal: {medal}</h3> */}
                <img src={image} className="img"/> 
                <h1>{name}</h1>
            </div>
            
        )
    }

    toggleShowDetails = () => this.setState({showDetails: !this.state.showDetails})
    
    render(){
        // const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        // const medal = 'highest medal achieved'
        
        const {name, specialty, greased} = this.props
        const imgName = name.toLowerCase().split(' ').join('_')
        const image = require(`../hog-imgs/${imgName}.jpg`)
        const medal = this.props['highest medal achieved']
        const weight = this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
       
        return(
            <div className="showPig">
                {!this.state.showDetails && this.picture(image, name)}
                {this.state.showDetails && this.details(name, weight, specialty, greased, medal)}
            </div>
        )
    }
}
export default Pig