import React from "react";
import { useState, useEffect } from "react";
import Light from "./lights.jsx";
import { colors } from "../colors.js";
import CycleButton from "./cyclebutton.jsx";

const TrafficLight = () => {
  //State initialization
  const [selected, setSelected] = useState("");
  const [clicked, setClicked] = useState(-1);

  //Pass ID onClick
  const handleClick = (e) => setSelected(e.target.id);

  //Create array of colors from colors file
  const colorsArr = colors.map((item) => item.color);

  //Change the value of selected to a value in the colors array when click is changed
  useEffect(() => {
    setSelected(colorsArr[clicked]);
  }, [clicked]);

  //Repeatedly click button
  const cycleHandler = () => clicked === colorsArr.length-1 ? setClicked(0) : setClicked(() => clicked + 1);

  return (
    <>
      <div>selected: {selected}</div>
      <div className="traffic-light-BG d-flex flex-column">
        {colors.map((item, index) => (
          <Light
            key={index}
            handleClick={handleClick}
            id={item.color}
            color={item.color}
            isSelected={selected === item.color ? "is-selected" : ""}
          />
        ))}
      </div>
      <CycleButton handleClick={cycleHandler} name="Cycle Light" />
    </>
  );
};

export default TrafficLight;