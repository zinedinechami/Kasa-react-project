import kasa_logo_footer from "./kasa_logo_footer.png";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer__content">
          <img src={kasa_logo_footer} alt="kasa_logo_footer" />
          <p> &copy; 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
