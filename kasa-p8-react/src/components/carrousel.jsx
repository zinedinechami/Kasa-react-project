// ex: database.id.image
// import database from "../database.json";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { useState } from "react";

// image url is use
function Carrousel(imageUrl) {
  // hook use state
  // "imageIndex" is the variable of the hook containing the state 0
  // "setImageIndex" is the function allowing the modification of the stae of "imageIndex"
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrl.length) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div className="carrousel">
        {/* carrousel img */}
        <img className="carrousel_img" src={imageUrl[imageIndex]} alt="" />
        {/* bouton right */}
        <button onClick={showNextImage} className="arrow arrow_right">
          <img src={arrow_right} alt="" />
        </button>
        {/* bouton left */}
        <button onClick={showPrevImage} className="arrow arrow_left">
          <img src={arrow_left} alt="" />
        </button>
      </div>
    </>
  );
}

// pictures need to match id of current page route, you can do this as a prop directly in the fiche logement page

export default Carrousel;
