import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
    customPaging: i => (
      <div
        style={{
          border: "4px transparent solid",
          marginInline: '.5rem',
          outline: '2px solid rgba(255,255,255, .7)',
        }}
      >
      </div>
    )
  };

  return (
    <div style={{ position: 'relative' }}>
      <Slider {...settings}>
        <div className="slider-img-container">
          {/* we can also use img here */}
        </div>
        <div className="slider-img-container">
           {/* we can also use img here */}
        </div>
        <div className="slider-img-container">
           {/* we can also use img here */}
        </div>
        <div className="slider-img-container">
           {/* we can also use img here */}
        </div>
        <div className="slider-img-container">
          {/* we can also use img here */}
        </div>
      </Slider>
      <div className="line"></div>
    </div>
  )
}

export default SliderComponent;