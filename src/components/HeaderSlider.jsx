// 首頁介紹 Slider
import Carousel from 'react-bootstrap/Carousel';

function HeaderSlider() {
  return (
    <Carousel fade interval={3000}>
      <Carousel.Item>
        <div className="slider-bg slider-bg-1 d-flex align-items-center justify-content-center">
          <h2 className="text-white fw-bold">綠行日記 Green Journey</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-bg slider-bg-2 d-flex align-items-center justify-content-center">
          <h2 className="text-white fw-bold">一起實踐 SDG 永續任務</h2>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-bg slider-bg-3 d-flex align-items-center justify-content-center">
          <h2 className="text-white fw-bold">集點換徽章，綠色生活更有趣！</h2>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderSlider;
