import styled from "@emotion/styled";

const MySkills = () => {
  return (
    <SectionWrapper>
      <SectionTitle>My Skills</SectionTitle>
      <SubTitle>{`Let's see what tech stacks I can do.`}</SubTitle>
      <AnimationWrap1>
        <SkillWrapper className="primary">
          {techStacks.slice(0, 4).map((item) => (
            <Skill key={item.id}>
              <Image src={item.imgUrl} alt="skill-image" />
              <Name>{item.name}</Name>
            </Skill>
          ))}
        </SkillWrapper>
        <SkillWrapper className="secondary">
          {techStacks.slice(0, 4).map((item) => (
            <Skill key={item.id}>
              <Image src={item.imgUrl} alt="skill-image" />
              <Name>{item.name}</Name>
            </Skill>
          ))}
        </SkillWrapper>
      </AnimationWrap1>
      <AnimationWrap2>
        <SkillWrapper2 className="primary">
          {techStacks.slice(4).map((item) => (
            <Skill key={item.id}>
              <Image src={item.imgUrl} alt="skill-image" />
              <Name>{item.name}</Name>
            </Skill>
          ))}
        </SkillWrapper2>
        <SkillWrapper2 className="secondary">
          {techStacks.slice(4).map((item) => (
            <Skill key={item.id}>
              <Image src={item.imgUrl} alt="skill-image" />
              <Name>{item.name}</Name>
            </Skill>
          ))}
        </SkillWrapper2>
      </AnimationWrap2>
    </SectionWrapper>
  );
};

export default MySkills;
const techStacks = [
  {
    id: 1,
    name: "Reactjs",
    imgUrl: "../images/skills/react.png",
  },
  {
    id: 2,
    name: "Remix",
    imgUrl: "../images/skills/remix.png",
  },
  {
    id: 3,
    name: "JavaScript",
    imgUrl: "../images/skills/js.png",
  },
  {
    id: 4,
    name: "TypeScript",
    imgUrl: "../images/skills/ts.png",
  },
  {
    id: 5,
    name: "Stitches",
    imgUrl: "../images/skills/stitches.jpg",
  },
  {
    id: 6,
    name: "Emotion",
    imgUrl: "../images/skills/emotion.png",
  },
  {
    id: 7,
    name: "SASS",
    imgUrl: "../images/skills/sass.png",
  },
  {
    id: 8,
    name: "Nextjs",
    imgUrl: "../images/skills/next.png",
  },
];

const SectionWrapper = styled.div`
  padding: 40px 0;
  width: 100vw;
  background-color: #ff9000;
  color: #fff;

  @media (min-width: 1024px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
`;

const SubTitle = styled.p`
  padding-left: 16px;
  padding-right: 16px;
  font-size: 22px;
  text-align: center;
  color: #e6e6e6;
`;

const AnimationWrap1 = styled.div`
  position: relative;
  width: 100vw;
  height: 120px;
  margin-top: 40px;
  overflow: hidden;
`;
const AnimationWrap2 = styled.div`
  position: relative;
  width: 100vw;
  height: 120px;
  margin-top: 40px;
  overflow: hidden;
`;

const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: inherit;
  height: inherit;
  position: absolute;
  left: 0%;
  top: 0%;
  @keyframes primary {
    from {
      left: -100%;
    }
    to {
      left: 0%;
    }
  }
  @keyframes secondary {
    from {
      left: 0%;
    }
    to {
      left: 100%;
    }
  }
  &.primary {
    animation: primary 10s linear infinite;
  }

  &.secondary {
    animation: secondary 10s linear infinite;
  }
`;
const SkillWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  width: inherit;
  height: inherit;
  position: absolute;
  left: 0%;
  top: 0%;
  @keyframes primary2 {
    from {
      left: 0%;
    }
    to {
      left: -100%;
    }
  }
  @keyframes secondary2 {
    from {
      left: 100%;
    }
    to {
      left: 0%;
    }
  }
  &.primary {
    animation: primary2 10s linear infinite;
  }

  &.secondary {
    animation: secondary2 10s linear infinite;
  }
`;

const Skill = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 0;
  text-align: center;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  background-color: #fff;
`;
const Name = styled.div``;
