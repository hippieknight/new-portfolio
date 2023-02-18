import styled from "@emotion/styled";
import { SocialContact } from "../common/SocialContact";

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <Wrapper>
        <Avatar src="../images/avatar.jpg" />
        <NameWrap>
          <Name>- Nhat Hiep Tran -</Name>
        </NameWrap>
        <PositionWrap>
          <Position>Front-end Developer</Position>
        </PositionWrap>
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

const NameWrap = styled.div`
  width: fit-content;
  margin: 24px;
`;
const Name = styled.h2`
  font-size: 30px;
  font-weight: 300;
  font-family: Kaushan Script;
  overflow: hidden;
  transform: rotate(-7deg);
  letter-spacing: 0.1em;
  white-space: nowrap;
  border-right: 2px solid white;

  @keyframes type {
    from {
      width: 0;
    }
    99.9% {
      border-right: 2px solid white;
    }
    to {
      border-right: none;
      width: 100%;
    }
  }
  @keyframes blink-caret {
    from {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
    to {
      border-color: transparent;
    }
  }

  animation: type 2s steps(18, jump-end) forwards;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;

const PositionWrap = styled.div`
  width: fit-content;
`;
const Position = styled.p`
  opacity: 0;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid white;

  @keyframes type {
    from {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 2px solid white;
    }
    to {
      border-right: none;
      width: 100%;
      opacity: 1;
    }
  }
  animation: type 2s steps(20, jump-end) 2s forwards;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
