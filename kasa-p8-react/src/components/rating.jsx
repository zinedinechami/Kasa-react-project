import star_active from "../assets/star_selected.png";
// import star_inactive from "../assets/star-inactive.png";

function Ratings() {
  const range = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="ratings">
        {range.map((star) => {
          return <img key={star} src={star_active} alt="" />;
        })}
      </div>
    </>
  );
}

export default Ratings;
