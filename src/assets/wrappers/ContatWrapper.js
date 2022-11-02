import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 32px 72px;
  .contactContainer {
    display: flex;
    width: 50%;
    h3 {
      color: var(--blue);
      font-size: 21px;
      line-height: 1.5;
      font-weight: 900;
    }
  }
  .social {
    justify-content: flex-end;
    align-items: center;
    column-gap: 30px;
    .instagramIcon {
      color: var(--blue);
      width: auto;
      height: 50px;
    }
    .facebookIcon {
      color: var(--blue);
      width: auto;
      height: 45px;
    }
  }
  @media (max-width: 1020px) {
    padding: 32px 32px;
    .contactContainer {
      h3 {
      font-size: 20px;
    }
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export default Wrapper;
