import styled from "@emotion/styled";

const HireMe = () => {
  return (
    <HireWrap>
      <SectionTitle>Hire Me!</SectionTitle>
      <Subtitle>
        {`If you feel interested about me and you're looking for a candidate for
        the position of Frontend developer. You can contact me so that we have chance to work together ^^.`}
      </Subtitle>
      <ContactButton href="mailto:hiepsimattroi1807@gmail.com">
        Contact me
      </ContactButton>
    </HireWrap>
  );
};

export default HireMe;

const HireWrap = styled.div`
  padding: 40px 16px;
  text-align: center;
  background-color: #ff9000;
  color: #fff;

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
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  max-width: 70%;
  margin: 0 auto 40px;
`;

const ContactButton = styled.a`
  font-weight: bold;
  background-color: #fff;
  color: #000;
  padding: 12px 32px;
  border-radius: 50px;
  border: none;
`;
