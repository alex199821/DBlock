import styled from "styled-components";

const Wrapper = styled.section`
  background-color: var(--blue);
  .multipleButtonsContainer {
    width: 90%;
    background-color: var(--blue);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 25px;
    row-gap: 15px;
    margin: auto;
    .attributeButtonContainer {
      display: flex;
      width: calc(100% / 3);
      justify-content: space-around;
      background-color: green;
      .attributeButtonAndDescription {
        display: flex;
        align-items: flex-start;
        .attributeButton {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          width: 230px;
          align-items: center;
          background-color: transparent;
          text-transform: uppercase;
          text-decoration: underline;
          color: var(--white);
          border: 0;
          font-size: 21px;
          font-weight: 600;
          cursor: pointer;
          .arrowButtonIcon {
            width: 35px;
            height: auto;
            color: var(--white);
            stroke-linecap: "sharp";
            stroke-linejoin: "sharp";
            stroke-width: 1;
          }
        }
        .attributeInformationContainer {
          position: absolute;
          align-items: flex-start;
          background-color: red;
          display: flex;
          justify-content: flex-start;
          width: 300px;
          height: 150px;
          opacity: 0.3;
          /* margin-left: 3vw; */
        }
      }
    }
  }
  @media (max-width: 769px) {
    background-color: var(--white);
    .multipleButtonsContainer {
      display: flex;
      flex-direction: row;
      background-color: var(--white);
      width: 100%;
      .attributeButtonContainer {
        width: 50%;
        justify-content: center;
        .attributeButton {
          font-size: 13px;
          width: 150px;
          color: var(--blue);
          .arrowButtonIcon {
            width: 25px;
            color: var(--blue);
          }
        }
      }
    }
  }
`;

export default Wrapper;
