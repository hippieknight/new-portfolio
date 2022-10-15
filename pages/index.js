import styled from "@emotion/styled";
import { AboutMe } from "../public/components/about/AboutMe";
import { Introduction } from "../public/components/introduction/Introduction";
import { MyResume } from "../public/components/resume/MyResume";

export default function Home() {
  return (
    <AppWrapper>
      <Introduction />
      <AboutMe />
      <MyResume />
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
