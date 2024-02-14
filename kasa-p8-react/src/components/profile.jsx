import example_img from "../assets/example.jpg";

function Profile() {
  return (
    <>
      <div className="profile">
        <h2>name</h2>
        <img src={example_img} alt="" />
      </div>
    </>
  );
}

export default Profile;
