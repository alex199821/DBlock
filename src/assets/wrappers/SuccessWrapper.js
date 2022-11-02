import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 70vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .imageContainer {
    background-color: var(--blue);
    margin-bottom: 15px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .checkMarkIcon {
    color: white;
    width: 100%;
    height: auto;
  }
  .successLabel {
    color: var(--blue);
    margin-top: 10px;
    font-size: 22px;
    font-weight: 700;
  }
  @media (max-width: 769px) {
    .imageContainer {
      img {
        height: 50%;
      }
    }
  }
`;
export default Wrapper;
