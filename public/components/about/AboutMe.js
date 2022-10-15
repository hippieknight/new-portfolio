import { useEffect } from "react";
import styled from "@emotion/styled";
import { SocialContact } from "../common/SocialContact";
import { IsElementInViewport } from "../../utils/CheckElementInViewport";

const AboutMe = () => {
  useEffect(() => {
    const section = document.getElementById("about-me");

    const TriggerAnimation = () => {
      if (IsElementInViewport(section)) {
        section.classList.add("animation-start");
      }
    };

    const RemoveAnimation = () => {
      section.classList.remove("animation-start");
    };
    window.addEventListener("scroll", TriggerAnimation);

    return () => {
      window.removeEventListener("scroll", RemoveAnimation);
    };
  }, []);

  return (
    <AboutWrapper id="about-me">
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <InformationWrapper id="info">
          {selfInfomation.map((item) => (
            <div key={item.id}>
              <Label>{item.label}:</Label>
              <Info>{item.value}</Info>
            </div>
          ))}
        </InformationWrapper>
        <IntroductionContent id="intro">
          <h2>Hello there.</h2>
          <p>
            {`I'm Nhat Hiep Tran, thanks for visiting my portfolio. I've graduated
            from VNUHCM - University of Science with a bachelor degree of
            Information System with the GPA is 3.2/4. I'm a FrontEnd Developer
            and I'd like to work with Reactjs and Remix - a React-based
            framework. I'd like styled components too and I also can work with
            responsive design.`}
            <br />
            <br />
            {`I had worked for my ex-company for a year before deciding to
            explore new challenges for myself. I've got more than a year of
            experience in front-end development and I also got knowledge about
            database.`}
            <br />
            <br />
            In my free time, I like playing football or taking photos, sometimes
            I play guitar, expore new knowledge and write blog. You can know
            more about me through my social medias below.
          </p>
          <SocialContact />
        </IntroductionContent>
      </ContentWrapper>
    </AboutWrapper>
  );
};

export default AboutMe;

const selfInfomation = [
  {
    id: 1,
    label: "Full Name",
    value: "Nhat Hiep Tran",
  },
  {
    id: 2,
    label: "Phone Number",
    value: "(+84) 984 523 175",
  },
  {
    id: 3,
    label: "Email",
    value: "hiepsimattroi1807@gmail.com",
  },
  {
    id: 4,
    label: "Address",
    value: "113/4 Street 8, Linh Trung ward, Thu Duc distric, Ho Chi Minh city",
  },
];

const AboutWrapper = styled.div`
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.animation-start {
    @keyframes slideUp {
      from {
        opacity: 0;
        margin-top: 150px;
      }
      to {
        opacity: 1;
      }
    }
    animation: slideUp 1.5s;
  }

  @media (min-width: 768px) {
    padding: 40px 32px;
  }

  @media (min-width: 1024px) {
    padding: 60px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
    margin-top: 60px;
    gap: 40px;
    align-items: start;
  }
`;

const InformationWrapper = styled.div`
  display: grid;
  gap: 16px;

  div {
    display: flex;
    justify-content: start;
    font-size: 16px;

    & > * {
      flex: 1;
    }
  }
`;

const Label = styled.p`
  font-weight: 700;
`;
const Info = styled.p`
  color: #8c8b8b;
  word-break: break-word;
`;

const IntroductionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  h2 {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  p {
    color: #8c8b8b;
  }
`;
