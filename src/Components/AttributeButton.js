import { FiArrowDownLeft } from "react-icons/fi";
import Wrapper from "../assets/wrappers/AttributeButtonWrapper";
import AttributeInformationContainer from "./AttributeInformationContainer";
import React, { useRef } from "react";

const AttributeButton = ({ link, description }) => {
  //Used in handleClick
  const input = useRef(null);

  //Some of devices dont understand CSS :focus preprocessor so there is necessity for such function
  const handleClick = () => {
    console.log("Focusing");
    input.current.focus();
  };
  return (
    <Wrapper>
      <div className="attributeButtonAndDescription">
        <button ref={input} className="attributeButton" onClick={handleClick}>
          <FiArrowDownLeft className="arrowButtonIcon" />
          {link}
        </button>
        <div className="informationShowHideContainer">
          <AttributeInformationContainer
            link={link}
            description={description}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default AttributeButton;
