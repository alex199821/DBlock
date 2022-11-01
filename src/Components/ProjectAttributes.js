import Wrapper from "../assets/wrappers/ProjectAttributeWrappers";
import { FiArrowDownLeft } from "react-icons/fi";
import { info } from "../utils/data";
import AttributeButton from "./AttributeButton";
const ProjectAttributes = () => {
  return (
    <Wrapper>
      <section className="multipleButtonsContainer">
        {info.map((item, index) => {
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
