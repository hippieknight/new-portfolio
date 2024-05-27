import styled from "@emotion/styled";
import { useEffect } from "react";
import Slider from "react-slick";
import { IsElementInViewport } from "../../utils/CheckElementInViewport";
import ProductCard from "../common/card/Productcard";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const myWorks = [
  {
    id: 1,
    name: "My porfolio",
    time: "Nov 2022",
    link: "https://nhathiep.vercel.app/",
    imgUrl: "../images/works/portfolio2.PNG",
  },
  {
    id: 2,
    name: "GovInsider",
    time: "Mar 2022",
    link: "https://govinsider.asia/intl-en",
    imgUrl: "../images/works/govinsider.PNG",
  },
  {
    id: 3,
    name: "Fleamint",
    time: "Jul 2022",
    link: "https://fleamint.com/",
    imgUrl: "../images/works/fleamint.PNG",
  },
  {
    id: 4,
    name: "Tech Vio",
    time: "Nov 2022",
    link: "https://tech-vio.vercel.app/",
    imgUrl: "../images/works/techvio.PNG",
  },
  {
    id: 5,
    name: "Coffee shop",
    time: "Feb 2022",
    link: "https://nhathiep-isme.github.io/Coffee-shop/",
    imgUrl: "../images/works/coffee-shop.PNG",
  },
  {
    id: 6,
    name: "Search Github users",
    time: "Feb 2022",
    link: "https://nhathiep-searchgithubuser.netlify.app/",
    imgUrl: "../images/works/github.PNG",
  },
];

const MyWorks = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  useEffect(() => {
    const section = document.getElementById("work");

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
    <WorkWrap id="work">
      <SectionTitle>My Works</SectionTitle>
      <SubTitle>{`I've got myself some projects, let's find out!`}</SubTitle>
      <Slider {...settings}>
        {myWorks.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Slider>
    </WorkWrap>
  );
};

export default MyWorks;

const WorkWrap = styled.div`
  padding: 40px 16px;
  background-color: #ff9000;
  color: #fff;

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
  margin-bottom: 16px;
`;

const SubTitle = styled.p`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 40px;
  font-size: 22px;
  text-align: center;
  color: #e6e6e6;
`;
