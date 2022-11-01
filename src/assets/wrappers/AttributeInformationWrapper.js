import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 1px solid var(--grey);
  width: 350px;
  height: 130px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 30%), 0 6px 20px 0 rgb(0 0 0 / 28%);
  .header {
    width: 100%;
    background-color: var(--darkBlue);
    button {
      background-color: transparent;
      border: 0;
      color: var(--white);
    }
  }
  .headerLink {
    font-size: 18px;
    text-decoration: underline;
    color: var(--blue);
    text-transform: uppercase;
    padding: 8px 16px;
  }
  .attributeInformation {
    font-size: 14px;
    padding: 8px 16px;
    font-weight: 200;
    color: var(--blue);
    line-height: 1.25;
  }
  @media (max-width: 769px) {
  }
`;

export default Wrapper;
