import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  width: calc(100% / 3);
  justify-content: space-around;
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

    .informationShowHideContainer {
      display: none;
    }
    .attributeButton:focus + .informationShowHideContainer {
      display: flex;
      position: absolute;
    }
  }

  @media (max-width: 769px) {
    width: 50%;
    justify-content: center;
    .attributeButtonAndDescription {
      .attributeButton {
        font-size: 13px;
        width: 150px;
        color: var(--blue);
        .arrowButtonIcon {
          width: 25px;
          color: var(--blue);
        }
      }
      .attributeButton:focus + .informationShowHideContainer {
        display: flex;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        overflow: auto;
      }
    }
  }
`;

export default Wrapper;
