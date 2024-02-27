// ex: database.id.image
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { useState } from "react";

export default function Carrousel({ pictures }) {
  const [imageIndex, setImageIndex] = useState(0);

  // if index is equal to the end of the prop length - 1 because array is indexed on 0, we return to the first index of the object to return to the first index
  // else we just increase to the next index
  const showNextImage = () => {
    setImageIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
  };

  // if index is equal to 0 we want to loop all the way around to get to the last index
  // else we just reduce to the previous index
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

// TODO: and make arrows and counter dissapear if there is only one image
