import Wrapper from "../assets/wrappers/FormContainerWrapper";
import Form from "./Form";
const FormContainer = () => {
  //This is lower part of page which includes Image and form on desktop and only form on mobile version
  return (
    <Wrapper>
      <section className="imageContainer">
        <img
          src="https://dblock.com/wp-content/uploads/2022/08/Untitledtable-1-768x636.png"
          alt="DBlock Design Attribute"
        />
      </section>
      <Form />
    </Wrapper>
  );
};
export default FormContainer;
