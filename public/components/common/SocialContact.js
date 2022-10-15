import styled from "@emotion/styled";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { ImBlogger2 } from "react-icons/im";

export const SocialContact = () => {
  return (
    <Wrapper>
      <a
        href="https://www.facebook.com/nhat.hiep.148"
        type="content"
        target="_blank"
      >
        <BsFacebook />
      </a>
      <a href="https://www.linkedin.com/feed/" type="content" target="_blank">
        <BsLinkedin />
      </a>
      <a href="" type="content">
        <ImBlogger2 />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 24px;
  & > * {
    width: 26px;
    height: 26px;
    & > svg {
      width: 100%;
      height: 100%;
    }
    &:not(:last-of-type) {
      margin-right: 16px;
    }
  }
`;
