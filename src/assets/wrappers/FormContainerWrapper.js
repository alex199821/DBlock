import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 32px 72px 32px 72px;
  .imageContainer {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 80%;
    }
  }
  @media (max-width: 1020px) {
    padding: 32px 0px 32px 32px;
  }
  @media (max-width: 767px) {
    padding: 0;
    .imageContainer {
      display: none;
    }
  }
`;

export default Wrapper;
