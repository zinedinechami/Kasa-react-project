// ex: database.id.image
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";
import { useState } from "react";

// image url is use
function Carrousel(picturesUrl) {
  // ! temporary example array of images, to be replaced by a "prop"
  // const pictures = [
  //   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
  //   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
  //   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
  //   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
  //   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
  // ];

  // hook use state permettant le stockage de valeur et la mise a jour de la valeur stocké
  // "imageIndex" is the variable of the hook containing the state 0
  // "setImageIndex" is the function allowing the modification of the stae of "imageIndex"
  const [imageIndex, setImageIndex] = useState(0);

  // function activated by right arrow event handler
  // uses "setImageIndex" to modify the state of "imageIndex" var
  // takes into parameter "index" variable to interact with the data of "imageIndex"

  // if index is equal to the end of the prop length - 1 because array is indexed on 0, we return to the first index of the object to return to the first index
  // otherwise we just increase to the next index
  function showNextImage() {
    setImageIndex((index) => {
      if (index === picturesUrl.length - 1) return 0;
      return index + 1;
    });
  }

  // if index is equal to 0 we want to loop all the way around to get to the last index
  // otherwise we just reduce to the previous index
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return picturesUrl.length - 1;
      return index - 1;
    });
  }
  return (
    <>
      <div className="carrousel">
        {/* carrousel img */}
        <img className="carrousel_img" src={picturesUrl[imageIndex]} alt="" />
        {/* bouton right */}
        <button onClick={showNextImage} className="arrow arrow_right">
          <img src={arrow_right} alt="" />
        </button>
        {/* bouton left */}
        <button onClick={showPrevImage} className="arrow arrow_left">
          <img src={arrow_left} alt="" />
        </button>
        <p className="carrousel_counter">
          {[imageIndex + 1]} / {picturesUrl.length}
        </p>
      </div>
    </>
  );
}

// TODO: Add Props, and make arrows and counter dissapear if there is only one image

export default Carrousel;
