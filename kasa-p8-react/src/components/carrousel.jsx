// ex: database.id.image
// import database from "../database.json";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { useState } from "react";

// image url is use
function Carrousel(prop) {
  // hook use state
  // "imageIndex" is the variable of the hook containing the state 0
  // "setImageIndex" is the function allowing the modification of the stae of "imageIndex"
  const [imageIndex, setImageIndex] = useState(0);

  // function activated by right arrow event handler
  // uses "setImageIndex" to modify the state of "imageIndex" var
  // takes into parameter "index" variable to interact with the data of "imageIndex"
  // if index is equal to the end of the prop length, we return to the first index of the object
  // otherwise we just increase to the next index
  function showNextImage() {
    setImageIndex((index) => {
      if (index === prop.length) return 0;
      return index + 1;
    });
  }

  // if index is equal to 0 we want to loop all the way around to get to the last index
  // otherwise we just reduce to the previous index
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return prop.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div className="carrousel">
        {/* carrousel img */}
        <img className="carrousel_img" src={prop[imageIndex]} alt="" />
        {/* bouton right */}
        <button onClick={showNextImage} className="arrow arrow_right">
          <img src={arrow_right} alt="" />
        </button>
        {/* bouton left */}
        <button onClick={showPrevImage} className="arrow arrow_left">
          <img src={arrow_left} alt="" />
        </button>
        <p className="carrousel_counter">
          {[imageIndex]} / {prop.length}
        </p>
      </div>
    </>
  );
}

// pictures need to match id of current page route, you can do this as a prop directly in the fiche logement page

export default Carrousel;
