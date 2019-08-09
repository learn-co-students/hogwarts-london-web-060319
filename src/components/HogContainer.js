import React from 'react';
import HogCard from './HogCard'

export default class HogContainer extends React.Component{
        
    render(){
        const {hogs}=this.props

   
        return(
           <div>
               {hogs.map(hog=> <HogCard key={hog.name} {...hog}/> )}

               
               
           </div> 
        )
    }
}