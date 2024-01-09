
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-child" />
        <div className="class-technologies-inc">{`© 2021 Class Technologies Inc. `}</div>
        <div className="subscribe-to-get">Subscribe to get our Newsletter</div>
        <div className="group-parent">
          <div className="polygon-parent">
            <img className="group-item" alt="" src="/polygon-2@2x.png" />
            <b className="totc">TOTC</b>
          </div>
          <div className="group-inner" />
          <div className="virtual-class-for">Virtual Class for Zoom</div>
        </div>
        <div className="line-parent">
          <div className="line-div" />
          <div className="group-child1" />
          <div className="careers1">Careers</div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-conditions">{`Terms & Conditions`}</div>
        </div>
        <div className="rectangle-group">
          <div className="rectangle-div" />
          <div className="your-email">Your Email</div>
          <div className="rectangle-container">
            <div className="group-child2" />
            <div className="group-child3" />
            <div className="subscribe">Subscribe</div>
          </div>
        </div>
      </div>
  );
};

export default Footer;