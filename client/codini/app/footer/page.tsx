
import  Link  from 'next/link';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
       <div className="taswira">
            <img className="group-item" alt="" src="/codinifooter.png" />
          </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <ul>
              <li>CODINI</li>
              <li>Team</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Media Links</h5>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">WhatsApp</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>
          <div className="cont">
            <h5>CONTACT</h5>
            <p className="contact">Technopark ElGhazela</p>
            <p className="contact">contact@CODINI.tn</p>
            <p className="contact">+216 502 392 59</p>
            <p className="contact">+216 234 467 09</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 Copyright">
        <div className="copyright Copyright">
          <p>&copy;2024 Copyright CODINI School</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;