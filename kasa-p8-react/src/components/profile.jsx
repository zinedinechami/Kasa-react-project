// import example_img from "../assets/example.jpg";

function Profile(prop) {
  return (
    <>
      <div className="profile">
        <h2>{prop.profile_name}</h2>
        <img src={prop.profile_img} alt="" />
      </div>
    </>
  );
}

export default Profile;
