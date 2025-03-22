import { useRef } from "react";
import { Card } from "../card";
import Slider from "react-slick";
import { dataCarrousel, DataCarrousel } from "../../data";
import "./carrousel.styles.scss";
// It can go in App.tsx file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carrousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="rootCarrousel">
      <div className="containerCarrousel">
        <button onClick={() => sliderRef.current?.slickPrev()}>Left</button>
        <div className="carousel-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {dataCarrousel && dataCarrousel?.length > 0 ? (
              dataCarrousel.map((card: DataCarrousel) => (
                <Card key={card.id} props={card} />
              ))
            ) : (
              <strong>There are no elements</strong>
            )}
          </Slider>
        </div>
        <button onClick={() => sliderRef.current?.slickNext()}>Right</button>
      </div>
    </div>
  );
};
