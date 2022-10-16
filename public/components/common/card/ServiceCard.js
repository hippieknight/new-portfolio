import styled from "@emotion/styled";

export default function ServiceCard({ title, description, icon }) {
  return (
    <Wrap>
      <IconWrap>{icon}</IconWrap>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;
const IconWrap = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff9000;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  svg {
    width: 70px;
    height: 70px;
    color: #fff;
  }
`;
const Title = styled.p`
  font-size: 24px;
  margin-bottom: 12px;
`;
const Desc = styled.p`
  opacity: 0.7;
`;
