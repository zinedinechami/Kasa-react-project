// ex: database.id.image
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { useState } from "react";

// image url is use
function Carrousel({ pictures }) {
  // hook use state permettant le stockage de valeur et la mise a jour de la valeur stocké
  // "imageIndex" is the variable of the hook containing the state 0
  // "setImageIndex" is the function allowing the modification of the stae of "imageIndex"
  const [imageIndex, setImageIndex] = useState(0);

  // function activated by right arrow event handler
  // uses "setImageIndex" to modify the state of "imageIndex" var
  // takes into parameter "index" variable to interact with the data of "imageIndex"

  // if index is equal to the end of the prop length - 1 because array is indexed on 0, we return to the first index of the object to return to the first index
  // otherwise we just increase to the next index
  const showNextImage = () => {
    setImageIndex((index) => (index === pictures.length - 1 ? 0 : index + 1));
  };

  // if index is equal to 0 we want to loop all the way around to get to the last index
  // otherwise we just reduce to the previous index
  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? pictures.length - 1 : index - 1));
  };

  return (
    <>
      <div className="carrousel">
        <img className="carrousel_img" src={pictures[imageIndex]} alt="" />

        <button onClick={showNextImage} className="arrow arrow_right">
          <img src={arrow_right} alt="" />
        </button>
        <button onClick={showPrevImage} className="arrow arrow_left">
          <img src={arrow_left} alt="" />
        </button>
        <p className="carrousel_counter">
          {[imageIndex + 1]} / {pictures.length}
        </p>
      </div>
    </>
  );
}

// TODO: and make arrows and counter dissapear if there is only one image

export default Carrousel;
