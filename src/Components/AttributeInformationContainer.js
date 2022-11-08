import Wrapper from "../assets/wrappers/AttributeInformationWrapper";
const AttributeInformationContainer = ({ setInfoOpen, link, description }) => {
  return (
    <Wrapper>
      <div className="header">
        {/* function to close popup on click*/}
        <button onClick={() => setInfoOpen(false)}>x</button>
      </div>
      <h3 className="headerLink">{link}</h3>
      <p className="attributeInformation">{description}</p>
    </Wrapper>
  );
};

export default AttributeInformationContainer;
