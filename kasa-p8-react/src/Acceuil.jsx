import React, { useState, useEffect } from "react";
import acceuil_header_img from "./assets/accueil_header_img.png";
import database from "./database.json";
import Card from "./components/card";
import Banner from "./components/banner";
import Footer from "./components/footer";

function Acceuil() {
  return (
    <>
      <Banner
        banner_image={acceuil_header_img}
        banner_title={"Chez Vous, partout et ailleurs"}
      />
      {/* <div className="acceuil__header">
        <img src={acceuil_header_img} alt="" />
        <h1>Chez Vous, partout et ailleurs</h1>{" "}
      </div> */}
      <section className="accueil__location">
        <div className="accueil__location--container">
          {/* json fetch */}
          {database.map((database) => {
            return (
              <article>
                <img src={database.cover} alt="" />
                <p>{database.title}</p>
              </article>
            );
          })}
          {/* <Card cover={database.cover} title={database.title} /> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

// TODO: integrate components

export default Acceuil;
