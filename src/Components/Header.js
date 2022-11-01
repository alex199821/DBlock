import Wrapper from "../assets/wrappers/HeaderWrapper";
import { FiArrowDownLeft } from "react-icons/fi";

const Header = () => {
  return (
    <Wrapper>
      <section className="headerButtonsContainer">
        <div className="buttonContainer">
          <button className="languageButton">EN</button>|
          <button className="languageButton">GE</button>
        </div>
        <div className="buttonContainer">
          <button className="arrowButton">
            <FiArrowDownLeft className="arrowButtonIcon" />
          </button>
        </div>
      </section>
      <section className="headerTextContainer">
        <h1>D BLOCK</h1>
        <h2>COLLABORATIVE WORKSPACE</h2>
      </section>
    </Wrapper>
  );
};
export default Header;
