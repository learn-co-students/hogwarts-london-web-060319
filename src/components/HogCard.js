import React from 'react';

export default class HogCard extends React.Component{
   
    state= {
        showDetails:false
    }

    // onClickHandler=()=>{
    //    if (this.state.showDetails === false){
    //        this.setState({showDetails:true})


    //    }
    //    }
    
    toggleDetails=()=> this.setState({showDetails:!this.state.showDetails})

    toggleDetails=()=>{
this.setState({showDetails:!this.state.showDetails})
    }
   
    render(){

        const { name, specialty, greased, click }= this.props 

        return(

            <div>
               <h1>{name}</h1>
``<img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_') + '.jpg'}`)} />
<button onClick={this.toggleDetails}> {this.state.showDetails ? 'hide details': "show details"} </button>
        
            <div>
                {this.state.showDetails ? `Speciality ${specialty}` : null }
            </div>
            </div>
        )
    }
}