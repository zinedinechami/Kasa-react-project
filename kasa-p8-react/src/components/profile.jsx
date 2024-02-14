function Profile(prop) {
  return (
    <>
      <div className="profile_container">
        <img src={prop.pfp} alt="" />
        <p>{prop.name}</p>
      </div>
    </>
  );
}

export default Profile;
