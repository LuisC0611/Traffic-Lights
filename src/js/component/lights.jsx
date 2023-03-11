import React from "react";

const Light = (props) => {
  return (
    <div className={`light ${props.color} btn ${props.isSelected}`} id={props.id} onClick={props.handleClick}></div>
  );
};

export default Light;
