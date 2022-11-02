import Wrapper from "../assets/wrappers/ProjectAttributeWrappers";
import AttributeButton from "./AttributeButton";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_ATTRIBUTES } from "../queries";
const ProjectAttributes = () => {
  const result = useQuery(ALL_ATTRIBUTES);
  const [attributes, setAttributes] = useState([]);
  useEffect(() => {
    result.data && setAttributes(result.data.allAttributes);
  }, [result]);

  return (
    <Wrapper>
      <section className="multipleButtonsContainer">
        {attributes &&
          attributes.map((item, index) => {
            return (
              <AttributeButton
                key={index}
                link={item.link}
                description={item.description}
              />
            );
          })}
      </section>
    </Wrapper>
  );
};

export default ProjectAttributes;
