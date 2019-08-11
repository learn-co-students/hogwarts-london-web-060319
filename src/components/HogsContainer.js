import React from "react";
import HogCard from "./HogCard";

const HogsContainer = props => {
  return (
    <div className="ui grid container">
      {props.hogs.map(hog => {
      return <HogCard key={hog.name} hog={hog} />;
      })}
    </div>
  );
};

export default HogsContainer;
