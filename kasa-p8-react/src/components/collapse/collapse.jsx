import { useState } from "react";
import collapse_arrow from "./collapse_arrow.png";
import "./collapse.css";

export default function Collapse(prop) {
  const [open, openActive] = useState(false);

  return (
    <div className="collapse_container">
      <button onClick={() => openActive((toggleOpen) => !toggleOpen)}>
        <div>{prop.title}</div>
        <div className="collapse_arrows">
          <img src={collapse_arrow} alt="" />
        </div>
      </button>

      {open && <div className="collapse_content">{prop.content}</div>}
    </div>
  );
}
