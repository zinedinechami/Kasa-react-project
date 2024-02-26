import star_active from "../assets/star_selected.png";
import star_inactive from "../assets/star-inactive.png";

export default function Ratings({ rating }) {
  // static rating component
  // if rating prop is superior or equal to index, return active star, else inactive star
  return (
    <>
      <div className="ratings">
        <img src={rating >= 1 ? star_active : star_inactive} />
        <img src={rating >= 2 ? star_active : star_inactive} />
        <img src={rating >= 3 ? star_active : star_inactive} />
        <img src={rating >= 4 ? star_active : star_inactive} />
        <img src={rating >= 5 ? star_active : star_inactive} />
      </div>
    </>
  );
}
