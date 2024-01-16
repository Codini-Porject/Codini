import  Link  from 'next/link';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
      <div className="polygon-parent">
            <img className="group-item" alt="" src="/Clogo.png" />
            <b className="totc">TOTC</b>
          </div>
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul>
              <li>CODINI</li>
              <li>Team</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>CONTACT</h5>
            <p className="contact">codini@school.com</p>
            <p className="contact">+216 502 392 59</p>
            <p className="contact">+216 969 767 04</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 Copyright">
        <div className="copyright">
          <p>&copy;2024 Copyright CODINI digital school</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
