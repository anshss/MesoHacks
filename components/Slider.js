import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import styles from "../styles/News.module.css";
import SingleSlide from "./singleSlide";

const Slider = ({ newsData, increaseUpvote }) => {
  return (
    <div className={styles.sliderPage}>
      <style jsx global>
        {`
          .swiper-slide {
            filter: blur(4px);
          }
          .swiper-slide-active {
            filter: blur(0px);
          }
        `}
      </style>
      <Swiper
        effect={"coverflow"}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.mySwiper}
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            <SingleSlide
              increaseUpvote={increaseUpvote}
              index={index}
              data={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
