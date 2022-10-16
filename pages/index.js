import styled from "@emotion/styled";
import AboutMe from "../public/components/about/AboutMe";
import HireMe from "../public/components/hire-me/HireMe";
import Introduction from "../public/components/introduction/Introduction";
import MyResume from "../public/components/resume/MyResume";
import MyServices from "../public/components/services/MyServices";
import MySkills from "../public/components/skills/MySkills";

export default function Home() {
  return (
    <AppWrapper>
      <Introduction />
      <AboutMe />
      <MyResume />
      <MySkills />
      <MyServices />
      <HireMe />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-image: url("../images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
`;
