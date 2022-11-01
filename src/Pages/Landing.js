import Header from "../Components/Header";
import ProjectAttributes from "../Components/ProjectAttributes";
import Video from "../Components/Video";
import ContactInfo from "../Components/ContactInfo";
import FormContainer from "../Components/FormContainer";
import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/LandingWrapper";
const Landing = () => {
  return (
    <Wrapper>
      <Header />
      <Video />
      <ProjectAttributes />
      <ContactInfo />
      <FormContainer />
    </Wrapper>
  );
};

export default Landing;
