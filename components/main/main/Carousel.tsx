import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InputSlider from 'react-input-slider';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const sliderRef = useRef<Slider>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const handleZoomChange = (position: { x: number }) => {
    const newZoomLevel = position.x / 100 + 1;
    setZoomLevel(newZoomLevel);

    if (sliderRef.current && sliderRef.current.innerSlider && sliderRef.current.innerSlider.list) {
      sliderRef.current.innerSlider.list.style.transform = `scale(${newZoomLevel})`;
    }
  };

  return (
    <div className="carousel-container h-auto max-auto">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-container mx-auto">
            <img src={image} alt={`Image ${index + 1}`} className="image-zoomable" />
          </div>
        ))}
      </Slider>
      <div className="zoom-slider">
        <InputSlider
          axis="x"
          x={zoomLevel * 100 - 100}
          xmin={0}
          xmax={100}
          onChange={handleZoomChange}
        />
      </div>
    </div>
  );
};

export default Carousel;
