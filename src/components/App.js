import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import FilterSort from "./FilterSort";

const weightKey =
  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

class App extends Component {
  state = {
    filterOptions: ["All", "Greased", "Ungreased"],
    filterChoice: "All",
    sortOptions: ["Default", "By Name", "By Weight"],
    sortChoice: "Default"
  };

  changeFilterChoice = newChoice => this.setState({ filterChoice: newChoice });
  changeSortChoice = newChoice => this.setState({ sortChoice: newChoice });

  filterHogs = () =>
    hogs.filter(hog => {
      if (this.state.filterChoice === "All") return true;
      if (this.state.filterChoice === "Greased") return hog.greased;
      if (this.state.filterChoice === "Ungreased") return !hog.greased;
    });

  sortHogs = filteredHogs =>
    filteredHogs.sort((hogA, hogB) => {
      if (this.state.sortChoice === "Default") return 0;
      if (this.state.sortChoice === "By Weight") {
        return (
          hogA[weightKey] - hogB[weightKey]
        );
      }
      if (this.state.sortChoice === "By Name") {
        return hogA.name.localeCompare(hogB.name);
      }
    });

  render() {
    const filteredHogs = this.filterHogs();
    const sortedHogs = this.sortHogs(filteredHogs);

    return (
      <div className="App">
        <Nav />
        <FilterSort
          filterOptions={this.state.filterOptions}
          filterChoice={this.state.filterChoice}
          changeFilterChoice={this.changeFilterChoice}
          sortOptions={this.state.sortOptions}
          sortChoice={this.state.sortChoice}
          changeSortChoice={this.changeSortChoice}
        />
        <HogsContainer hogs={sortedHogs} />
      </div>
    );
  }
}

export default App;
