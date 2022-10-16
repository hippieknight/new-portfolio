import styled from "@emotion/styled";
import { SocialContact } from "../common/SocialContact";

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <Wrapper>
        <Avatar src="../images/avatar.jpg" />
        <Name>- Nhat Hiep Tran -</Name>
        <Position>Front-end Developer</Position>
        <SocialContact />
      </Wrapper>
    </IntroductionWrapper>
  );
};

export default Introduction;

const IntroductionWrapper = styled.div`
  height: 100vh;
  color: #fff;
  background-color: rgba(255, 144, 0, 0.9);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.7s ease-in;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;

const Name = styled.h2`
  margin: 24px;
  font-size: 30px;
  font-weight: 300;
  font-family: Kaushan Script;
  transform: rotate(-7deg);
  letter-spacing: 0.1em;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;
const Position = styled.p`
  font-size: 14px;
  font-weight: 500;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
