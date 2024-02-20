import star_active from "../assets/star_selected.png";
// import star_inactive from "../assets/star-inactive.png";

function Ratings() {
  return (
    <>
      <div className="ratings">
        <img src={star_active} alt="" />
        <img src={star_active} alt="" />
        <img src={star_active} alt="" />
        <img src={star_active} alt="" />
        <img src={star_active} alt="" />
      </div>
    </>
  );
}

export default Ratings;
