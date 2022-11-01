import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: var(--primary);
  background-image: url("https://res.cloudinary.com/do8a4tbyb/image/upload/v1667110376/DBlock/Untitled2_pvrfdq.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% auto;
  transition: var(--transition);
  width: 100%;
  height: 48.5vw;
  .headerButtonsContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    .buttonContainer {
      display: flex;
      color: var(--blue);
      font-size: 28px;
      font-weight: 600;
      padding-left: 32px;
      align-items: center;
      .languageButton {
        background-color: transparent;
        border: none;
        color: var(--blue);
        font-size: 28px;
        font-weight: 600;
        cursor: pointer;
      }
      .arrowButton {
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;
        cursor: pointer;
        .arrowButtonIcon {
          width: 100px;
          height: auto;
          border-radius: 0;
          color: var(--blue);
          stroke-linecap: "sharp";
          stroke-linejoin: "sharp";
          stroke-width: 1;
        }
      }
    }
  }
  .headerTextContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    /* margin-top: calc(24vw - 15%); */
    h1 {
      font-family: "loftBold", sans-serif;
      font-size: 52px;
      color: var(--blue);
    }
    h2 {
      color: var(--blue);
      font-size: 32px;
      font-weight: 900;
      text-decoration: underline;
    }
  }
  @media (max-width: 1020px) {
    .headerButtonsContainer {
      display: flex;
      .buttonContainer {
        font-size: 16px;
        padding-left: 8px;
        padding-right: 8px;
        .languageButton {
          font-size: 16px;
          font-weight: 400;
        }
        .arrowButton {
          .arrowButtonIcon {
            width: 30px;
          }
        }
      }
    }
    .headerTextContainer {
      margin-top: 0;
      row-gap: 20px;
      /* margin-top: calc(24vw - 17.5%); */

      h1 {
        font-size: 42px;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
  @media (max-width: 767px) {
    .headerButtonsContainer {
      display: flex;
    }
    .headerTextContainer {
      /* margin-top: calc(24vw - 15%); */
      row-gap: 5px;
      h1 {
        font-size: 18px;
      }
      h2 {
        font-size: 11px;
      }
    }
  }
`;

export default Wrapper;
