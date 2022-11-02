import Wrapper from "../assets/wrappers/HeaderWrapper";
import { FiArrowDownLeft } from "react-icons/fi";
import { useQuery } from "@apollo/client";
import { HEADER } from "../queries";
import React, { useState, useEffect } from "react";
const Header = () => {
  const result = useQuery(HEADER);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    result.data && setHeader(result.data.headerInfo);
  }, [result]);

  if (header) {
    const { name, about } = header;
    return (
      <Wrapper>
        <section className="headerButtonsContainer">
          <div className="buttonContainer">
          </div>
          <div className="buttonContainer">
            <button className="arrowButton">
              <FiArrowDownLeft className="arrowButtonIcon" />
            </button>
          </div>
        </section>
        <section className="headerTextContainer">
          <h1>{name}</h1>
          <h2>{about}</h2>
        </section>
      </Wrapper>
    );
  }
};
export default Header;
