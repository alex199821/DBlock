import Wrapper from "../assets/wrappers/ContatWrapper";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Wrapper>
      <section className="contactContainer">
        <h3>14, M. KOSTAVA ST.TBILISI, 0108, GEORGIA WELCOME@DBLOCK.COM</h3>
      </section>
      <section className="contactContainer social">
        <a href={"https://facebook.com"}>
          <FaFacebookF className="facebookIcon" />
        </a>
        <a href={"https://facebook.com"}>
          <FiInstagram className="instagramIcon" />
        </a>
      </section>
    </Wrapper>
  );
};
export default ContactInfo;
