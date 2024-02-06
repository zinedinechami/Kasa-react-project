function Banner(prop) {
  return (
    <>
      <div className="acceuil__header">
        <img src={prop.banner_image} alt="" />
        <h1>{prop.banner_title}</h1>
      </div>
    </>
  );
}

export default Banner;
