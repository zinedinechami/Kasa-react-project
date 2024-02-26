import "./profile.css";

export default function Profile(prop) {
  return (
    <>
      <div className="profile">
        <h2>{prop.profile_name}</h2>
        <img src={prop.profile_img} alt="" />
      </div>
    </>
  );
}
