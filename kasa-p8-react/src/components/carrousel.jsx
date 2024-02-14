// ex: database.id.image
// import database from "../database.json";
import arrow_right from "../assets/arrow_right.png";
import arrow_left from "../assets/arrow_left.png";

// create prop

function Carrousel() {
  return (
    <>
      <div className="carrousel">
        {/* carrousel img */}
        <img className="carrousel_img" src="" alt="" />
        <img className="arrow arrow_right" src={arrow_right} alt="" />
        <img className="arrow arrow_left" src={arrow_left} alt="" />
      </div>
    </>
  );
}

// pictures need to match id of current page route, you can do this as a prop directly in the fiche logement page

// create infinte pages functions

// focus on how the components functions first, use index and all

export default Carrousel;
