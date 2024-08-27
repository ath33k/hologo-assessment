import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import BiologyPng from "./../assets/biology.png";
import ChemistryPng from "./../assets/chemistry.png";
import MathPng from "./../assets/math.png";
import StemPng from "./../assets/stem.png";

const lists = [
  {
    name: "Basics of Math",
    experiences: "113 expericences",
    chips: ["free", "subscribed"],
    image: MathPng,
  },
  {
    name: "Basics of Chemistry",
    experiences: "135 expericences",
    chips: ["free", "subscribed", "new"],
    image: ChemistryPng,
  },
  {
    name: "Basics of STEM",
    experiences: "110 expericences",
    chips: ["free", "subscribed"],
    image: StemPng,
  },
  {
    name: "Basics of Biology",
    experiences: "401 expericences",
    chips: ["free", "subscribed", "new"],
    image: BiologyPng,
  },
];

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-2 bg-red-200 w-full">
      <div className="slider-container p-4 ">
        <Slider {...settings}>
          {lists.map((list, index) => (
            <Card
              key={index}
              name={list.name}
              experiences={list.experiences}
              chips={list.chips}
              image={list.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
