import styled from "@emotion/styled";
import { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IsElementInViewport } from "../../utils/CheckElementInViewport";
import { GiSuitcase } from "react-icons/gi";

const MyResume = () => {
  useEffect(() => {
    const section = document.getElementById("resume");
    const elements = section.children;

    const TriggerAnimation = () => {
      for (let i = 0; i < elements.length; i++) {
        if (IsElementInViewport(elements[i])) {
          elements[i].classList.add("animation-start");
        }
      }
    };

    const RemoveAnimation = () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("animation-start");
      }
    };
    window.addEventListener("scroll", TriggerAnimation);

    return () => {
      window.removeEventListener("scroll", RemoveAnimation);
    };
  }, []);

  return (
    <ResumeWrapper id="resume">
      <SectionTitle>My Resume</SectionTitle>
      <ExperienceWrap>
        <Title>WORK EXPERIENCE</Title>
        {roadMap.map((item) => (
          <WorkWrap
            key={item.id}
            id={item.id}
            className={`${item.id % 2 === 0 ? "reverse" : ""}`}
          >
            <IconWrap>{item.icon}</IconWrap>
            <InfoWrap>
              <JobTitle>{item.position}</JobTitle>
              <Time>{item.time}</Time>
              <Company>{item.activity}</Company>
              <Desc>{item.description}</Desc>
            </InfoWrap>
          </WorkWrap>
        ))}
      </ExperienceWrap>
    </ResumeWrapper>
  );
};

export default MyResume;

const roadMap = [
  {
    id: 1,
    position: "Student",
    activity: "VNUHCM - University of Science",
    description:
      "I studied 4 years about Information System in my university until I found out that I love working with UI than system. I graduated with the GPA is 3.2/4.",
    time: "Sep 2018 - Nov 2022",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    position: "Front-end Developer",
    activity: "SENS VN",
    description:
      "My career started here. Everybody is helpful so I improved my skills day by day. I joined many useful projects, had chance to access new technologies like Remixjs, Stitches, tRPC,... I worked here 2 years after decided to move on with new challenges.",
    time: "Mar 2022 - Dec 2023",
    icon: <GiSuitcase />,
  },
  {
    id: 3,
    position: "Front-end Developer",
    activity: "WALA ICT VN",
    description:
      "In this company, I mainly work with Reactjs and Nextjs on CMS projects.",
    time: "Dec 2023 - Current",
    icon: <GiSuitcase />,
  },
];

const ResumeWrapper = styled.div`
  padding: 40px 16px;
  background-color: #f9f9f9;
  color: #000;

  .animation-start {
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
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1024px) {
    padding: 60px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

const ExperienceWrap = styled.div`
  margin-top: 40px;
`;

const Title = styled.p`
  width: fit-content;
  font-size: 18px;
  padding: 2px 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  background-color: #e6e6e6;
  border-radius: 4px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const InfoWrap = styled.div`
  p {
    margin-bottom: 8px;
  }
  @media (max-width: 767px) {
    flex: 1;
  }
  @media (min-width: 768px) {
    width: calc(50% - 24px - 22.5px);
  }
`;

const WorkWrap = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  margin-top: 40px;

  &:before {
    position: absolute;
    content: "";
    left: 22px;
    top: 45px;
    width: 2px;
    height: calc(100% - 5px);
    background-color: #e6e6e6;

    @media (min-width: 768px) {
      left: calc(100% / 2 - 1px);
    }
  }

  &:first-of-type::after {
    position: absolute;
    content: "";
    left: 22px;
    top: -40px;
    width: 2px;
    height: 40px;
    background-color: #e6e6e6;

    @media (min-width: 768px) {
      left: calc(100% / 2 - 1px);
    }
  }

  &:last-of-type::before {
    height: calc(100% - 40px);
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    &.reverse {
      flex-direction: row-reverse;
      justify-content: flex-end;

      & div:last-of-type {
        text-align: right;
      }
    }
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #ff9000;
  color: #fff;
  border-radius: 50px;
  svg {
    width: 60%;
    height: 60%;
  }
`;
const JobTitle = styled.p`
  font-size: 24px;
`;
const Time = styled.p`
  color: #bfbfbf;
`;
const Company = styled.p`
  font-weight: 700;
`;
const Desc = styled.p`
  font-size: 14px;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
