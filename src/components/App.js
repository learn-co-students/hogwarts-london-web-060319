import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigHolder from './PigHolder'
import Filter from './Filter'
import hogs from '../porkers_data';





class App extends Component {
  

  state = {
      filterOptions: ['all', 'greased', 'ungreased'],
      filterType: 'all',
      sortOptions: ['default', 'weight', 'name'],
      sortType: 'default'
  }

  setSortType = (sortType) => this.setState({sortType})
  setFilterType = (filterType) => this.setState({filterType})
  
  filterHogs = () => hogs.filter(hog => {
    if(this.state.filterType === 'all') return true;
    if(this.state.filterType === 'greased') return hog.greased;
    if(this.state.filterType === 'ungreased') return !hog.greased;
  })

  sortHogs = (filteredHogs) => filteredHogs.sort((hogA, hogB) => {
    if(this.state.sortType === 'default') return 0;
    if(this.state.sortType === 'weight') {
      return hogB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] -
        hogA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    };
    if(this.state.sortType === 'name'){
      return hogA.name.localeCompare(hogB.name)
    }
  })
  
  render() {

    const filteredHogs = this.filterHogs()
    const sortedHogs = this.sortHogs(filteredHogs)

    return (
      <div className="App">
          < Nav />
          <div>Click a Pig for more Info!</div>
          <Filter setFilterType={this.setFilterType} filterType={this.state.filterType} filterOptions={this.state.filterOptions} setSortType={this.setSortType} filterType={this.state.sortType} sortOptions={this.state.sortOptions}/>
          <PigHolder hogs={sortedHogs}/>
      </div>
    )
  }
}

export default App;
