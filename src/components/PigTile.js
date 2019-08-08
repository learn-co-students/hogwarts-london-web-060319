import React from 'react'

class PigTile extends React.Component {
    state = {
        small_panel: false
    }

    detailHandler = () => {
        this.setState ({
            small_panel: !this.state.small_panel
        })
    }

    smallPanel = () => {
        const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        const medal = 'highest medal achieved'
        const pig = this.props.pig
        if (this.state.small_panel === true) {
            return (
                <div>
                    <p>{pig.speciality}</p>
                    <p>{`${weight}: ${pig[weight]}`}</p>
                    <p>{`${medal}: ${pig[medal]}`}</p>
                    <br></br>
                </div>
            )
        }
        
    }

    render() {
        const { pig } = this.props
        return (
            <div onClick={() => this.detailHandler()}>
                <div>
                <p>Name: {pig.name}</p>
                <img src={pig.image}></img>
                </div>
                {this.smallPanel()}
            </div>
        )
    }
}

export default PigTile