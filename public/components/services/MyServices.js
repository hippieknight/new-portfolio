import styled from "@emotion/styled";
import { useEffect } from "react";
import { IsElementInViewport } from "../../utils/CheckElementInViewport";
import { MdManageAccounts } from "react-icons/md";
import { CgWebsite, CgDisplayFlex } from "react-icons/cg";
import { TbHelicopterLanding } from "react-icons/tb";
import ServiceCard from "../common/card/ServiceCard";

const MyServices = () => {
  useEffect(() => {
    const section = document.getElementById("service");

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
    <ServiceWrap id="service">
      <SectionTitle>My Services</SectionTitle>
      <ContentWrap>
        {dataServices.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </ContentWrap>
    </ServiceWrap>
  );
};

export default MyServices;

const dataServices = [
  {
    id: 1,
    title: "Landing Page",
    description: "Create attractive landing pages for your websites.",
    icon: <TbHelicopterLanding />,
  },
  {
    id: 2,
    title: "Web App Development",
    description:
      "Making e-commerce websites, article websites and other web apps.",
    icon: <CgWebsite />,
  },
  {
    id: 3,
    title: "Web Backoffice Development",
    description: "Web backoffice for managing web apps easily.",
    icon: <MdManageAccounts />,
  },
  {
    id: 4,
    title: "Responsive Design",
    description:
      "Make your web app friendly with all devices with responsive designs.",
    icon: <CgDisplayFlex />,
  },
];

const ServiceWrap = styled.div`
  padding: 40px 16px;

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

const ContentWrap = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 40px;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    margin-top: 60px;
  }
`;
