import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer'

class App extends Component {
  
  state = {
    hogs: [],
    toggleGreased: false,
    sortOption: ""
  }

  handleToggle = () => {
    this.setState({toggleGreased: !this.state.toggleGreased})
  }

  filterAndSortHogs = () => {
    if (this.state.toggleGreased === true) {
      return this.state.hogs.filter(hog => hog.greased === true)
    } else if (this.state.sortOption === 'weight') {
      return this.state.hogs.sort((a, b) => a.weight - b.weight)
    } else if (this.state.sortOption === 'name') {
      return this.state.hogs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }
    else {
      return this.state.hogs
    }
  }

  componentDidMount(){
    this.setState({ hogs: hogs })
  }

  render() {
    return (
      <div className="App">
          <Nav handleToggle={this.handleToggle}/>
          <HogsContainer hogData={this.filterAndSortHogs()}/>
      </div>
    )
  }
}

export default App;
