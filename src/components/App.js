import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import FilterHogs from "./FilterHogs";

class App extends Component {
  state = {
    hogs: hogs,
    greasedOptions: ["all", "greased", "ungreased"], 
    filteredHogs:[]
  };

  handleFilter=(type)=>{
    if (type==="greased"){
      this.setState({
        filteredHogs:this.state.hogs.filter(hog=>hog.greased==true)
      }) 
    }else if (type==="ungreased"){
      this.setState({ 
        filteredHogs:this.state.hogs.filter(hog=>hog.greased==false)
      }) 
    }else{
      hogs
    }
}
   

 

  render() {
    const { hogs,greasedOptions,greasedFilter } = this.state;
    return (
      <div className="App">
        <Nav />
        <HogContainer hogs={hogs} />
        <FilterHogs options={greasedOptions} filter= {greasedFilter} handle={this.handleFilter} performSearch={this.performSearch}/>
      </div>
    );
  }
}

export default App;
