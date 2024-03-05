import arrow_right from "./arrow_right.png";
import arrow_left from "./arrow_left.png";
import "./carrousel.css";
import { useState } from "react";

export default function Carrousel({ pictures }) {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? pictures.length - 1 : index - 1));
  };

  return (
    <>
      <div className="carrousel">
        <img className="carrousel_img" src={pictures[imageIndex]} alt="" />
        {pictures.length > 1 && (
          <div>
            <button onClick={showNextImage} className="arrow arrow_right">
              <img src={arrow_right} alt="" />
            </button>
            <button onClick={showPrevImage} className="arrow arrow_left">
              <img src={arrow_left} alt="" />
            </button>
          </div>
        )}
        {pictures.length > 1 && (
          <p className="carrousel_counter">
            {[imageIndex + 1]} / {pictures.length}
          </p>
        )}
      </div>
    </>
  );
}
