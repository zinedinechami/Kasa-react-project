import star_active from "./star_selected.png";
import star_inactive from "./star_inactive.png";
import "./rating.css";

export default function Ratings({ rating }) {
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
