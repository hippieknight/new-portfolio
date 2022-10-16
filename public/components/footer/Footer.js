import styled from "@emotion/styled";
import { SocialContact } from "../common/SocialContact";

export default function Footer() {
  return (
    <FooterWrap>
      <p>Made by NhatHiepisme with love.</p>
      <SocialContact />
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  padding: 40px 0;
  text-align: center;
  background-color: #ff9000;
`;
