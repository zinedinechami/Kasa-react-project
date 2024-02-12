import { useState } from "react";

function Collapse(prop) {
  // hook use state objet containing the current value state variable "isActive"
  // the function "setIsActive" allowing the update of the state
  // the intial state of "isActive" is false
  const [open, openActive] = useState(false);

  return (
    <div className="collapse_container">
      <button
        className="collapse"
        // event handler on collapse button executing the "openActive" function
        // toggles the value of "open" between true and false
        // "toggleOpen" is the parameter of the function which holds the previous value/state of "open"
        // logical NOT operator "!" negates the value in result toggeling "false" to "true" and "true" to "false"
        onClick={() => openActive((toggleOpen) => !toggleOpen)}
      >
        <div>{prop.title}</div>
        {/* <div>{isActive ? "-" : "+"}</div> */}
      </button>
      {/* if "open" value is true, the output will be the div containing the content of the collapse*/}
      {open && <div className="collapse_content">{prop.content}</div>}
    </div>
  );
}

export default Collapse;
