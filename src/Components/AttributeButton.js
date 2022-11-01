import { FiArrowDownLeft } from "react-icons/fi";
import Wrapper from "../assets/wrappers/AttributeButtonWrapper";
import AttributeInformationContainer from "./AttributeInformationContainer";
import { useEffect, useState } from "react";

const AttributeButton = ({ link, description }) => {
  return (
    <Wrapper>
      <div className="attributeButtonAndDescription">
        <button className="attributeButton">
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
