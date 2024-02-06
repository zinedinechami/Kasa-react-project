import kasa_logo_footer from "../assets/kasa_logo_footer.png";

function Footer() {
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

export default Footer;
