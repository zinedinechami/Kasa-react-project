function Profile(prop) {
  return (
    <>
      <div className="profile">
        <img src={prop.pfp} alt="" />
        <p>{prop.name}</p>
      </div>
    </>
  );
}

export default Profile;
