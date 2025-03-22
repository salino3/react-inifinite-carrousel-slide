import { useRef } from "react";
import { Card } from "../card";
import Slider from "react-slick";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { dataCarrousel, DataCarrousel } from "../../data";
// It can go in App.tsx file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import "./carrousel.styles.scss";

export const Carrousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [divRef, dimensions] = useResizeObserver<HTMLDivElement>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: dimensions?.width > 650 ? 2 : 1,
    slidesToScroll: 1,
    swipe: dimensions?.width > 650 ? false : true, // Disables touch swipe
    draggable: false, // Disables mouse drag
    touchMove: dimensions?.width > 650 ? false : true, // Prevents touch movement on mobile devices
    arrows: false, // Hides the default slick 'Slide' arrows
    //* It does not work
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="rootCarrousel">
      <div className="containerCarrousel">
        {dimensions?.width > 650 && (
          <div className="containerBtns">
            <button onClick={() => sliderRef.current?.slickPrev()}>Left</button>
            <button onClick={() => sliderRef.current?.slickNext()}>
              Right
            </button>
          </div>
        )}
        <div ref={divRef} className="carouselWrapper">
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
      </div>
    </div>
  );
};
