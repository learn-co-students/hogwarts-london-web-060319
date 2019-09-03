import React from 'react'

const ShowMoreDetails = (props) => {
    return(
        <div className="moreDetails">
            <h2>{props.hog.specialty}</h2>
            <h2>{props.hog.weight}</h2>
            <h2>{props.hog.greased === true ? "Greased" : "Not Greased"}</h2>
        </div>
    )
}

export default ShowMoreDetails;