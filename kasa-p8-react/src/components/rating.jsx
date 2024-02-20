import star_active from "../assets/star_selected.png";
// import star_inactive from "../assets/star-inactive.png";

function Ratings() {
  // const [rating, setRating] = useState(0);

  // const index = [prop.rating];

  // create function that that uses state function, that takes in account the prop and shows, stars in function of the stae or index

  return (
    <>
      <div className="ratings">
        {[...Array(5)].map((star) => {
          return <img key={star} src={star_active} alt="" />;
        })}
      </div>
    </>
  );
}

export default Ratings;
