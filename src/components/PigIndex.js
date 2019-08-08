import React from 'react'
import PigTile from './PigTile'
import FilterPig from './FilterPig';

class PigIndex extends React.Component {
    state = {
        filter: false,
        sort_name: false,
        sort_weight: false

    }

    mapPigs = () => {
        const st_filter = this.state.filter
        const st_sname = this.state.sort_name
        const st_sweight = this.state.sort_weight

        const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        const greasedList = this.props.pigList.filter(pig => { return pig.greased === true })

        const sortByName = (array) => {
            
            const sorted = array.sort(function(a, b) {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0
        });

        return sorted.map(pig => {
            return <PigTile pig={pig}/>
        })
        }

        const sortByWeight = (array) => {
            const sorted = array.sort(function(a, b) {
                return a[weight] - b[weight];
            });
            return sorted.reverse().map(pig => {
                return <PigTile pig={pig}/>
            })
        }

        if (st_filter === true) {
        
            if (st_sname === true) {
                sortByName(greasedList)
                
            } else if (st_sweight === true) {
                sortByWeight(greasedList)
            }

            return greasedList.map(pig => {
                return <PigTile pig={pig}/>
            })
                
        }

        if (st_sname === true) {
            sortByName(this.props.pigList)
        } else if (st_sweight === true) {
            sortByWeight(this.props.pigList)
        }

        return this.props.pigList.map(pig => {
            return <PigTile pig={pig}/>
        })
        
    }

    filterHandler = () => {
        this.setState({
            filter: !this.state.filter
        })
      }

    sortHandler = (event) => {
        const setter = event.target.value
        console.log(`${setter}`)
        if (setter === "name") {
            console.log(`name`)
            this.setState({
                sort_name: true,
                sort_weight: false
            })
        } else if ( setter === "weight") {
            console.log(`weight`)
            this.setState({
                sort_name: false,
                sort_weight: true
            })
        } else {
            this.setState({
                sort_name: false,
                sort_weight: false
            })
        }

    }

    render() {

        return (
            <div>
                <FilterPig filterHandler={this.filterHandler} filterState={this.state.filter} sortHandler={this.sortHandler}/>
                {this.mapPigs()}
            </div>
        )
    }
}

export default PigIndex