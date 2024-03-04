import "./banner.css";

export default function Banner(prop) {
  return (
    <>
      <div className="banner">
        <img src={prop.banner_image} alt="" />
        <h1>{prop.banner_title}</h1>
      </div>
    </>
  );
}
