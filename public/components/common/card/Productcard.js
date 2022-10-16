import styled from "@emotion/styled";
import { BsArrowRight } from "react-icons/bs";

export default function ProductCard({ name, time, link, imgUrl }) {
  return (
    <Wrap>
      <ImgWrap>
        <Img src={imgUrl} alt="my-works" />
        <p>{time}</p>
      </ImgWrap>
      <Name>{name}</Name>
      <ViewButton href={link} type="content">
        View Detail
        <BsArrowRight />
      </ViewButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: #fff;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: 0 20px;
  }
`;
const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;

  p {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #c4c4c4;
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 700;
    border-bottom-left-radius: 8px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 245px;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 700;
  margin-bottom: 8px;
`;

const ViewButton = styled.a`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #ff9000;
  color: #fff;

  &:hover {
    svg {
      transform: translateX(5px);
    }
  }
`;
