import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import styles from "../styles/Slider.module.css";

 const Slider = () => {
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
        <SwiperSlide>
          <div className={styles.newsCard}>
            <div className={styles.topBar}>
              <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              <div className={styles.heading}>
                <p>#02lsdf02rl</p>
                <h2>Title for the News. It will look something like this!</h2>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                Description for the News. It will look something like this! and
                this will go on and on and on and on and on and.... on and on
                and on. Yeah, This will go on and on and on and on and on
                and.... on and on and on.....{" "}
              </p>
            </div>
            <div className={styles.footer}>
              <a href="#">Read More</a>
              <div>
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.newsCard}>
            <div className={styles.topBar}>
              <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              <div className={styles.heading}>
                <p>#02lsdf02rl</p>
                <h2>Title for the News. It will look something like this!</h2>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                Description for the News. It will look something like this! and
                this will go on and on and on and on and on and.... on and on
                and on. Yeah, This will go on and on and on and on and on
                and.... on and on and on.....{" "}
              </p>
            </div>
            <div className={styles.footer}>
              <a href="#">Read More</a>
              <div>
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.newsCard}>
            <div className={styles.topBar}>
              <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              <div className={styles.heading}>
                <p>#02lsdf02rl</p>
                <h2>Title for the News. It will look something like this!</h2>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                Description for the News. It will look something like this! and
                this will go on and on and on and on and on and.... on and on
                and on. Yeah, This will go on and on and on and on and on
                and.... on and on and on.....{" "}
              </p>
            </div>
            <div className={styles.footer}>
              <a href="#">Read More</a>
              <div>
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.newsCard}>
            <div className={styles.topBar}>
              <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              <div className={styles.heading}>
                <p>#02lsdf02rl</p>
                <h2>Title for the News. It will look something like this!</h2>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                Description for the News. It will look something like this! and
                this will go on and on and on and on and on and.... on and on
                and on. Yeah, This will go on and on and on and on and on
                and.... on and on and on.....{" "}
              </p>
            </div>
            <div className={styles.footer}>
              <a href="#">Read More</a>
              <div>
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.newsCard}>
            <div className={styles.topBar}>
              <img src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
              <div className={styles.heading}>
                <p>#02lsdf02rl</p>
                <h2>Title for the News. It will look something like this!</h2>
              </div>
            </div>
            <div className={styles.content}>
              <p>
                Description for the News. It will look something like this! and
                this will go on and on and on and on and on and.... on and on
                and on. Yeah, This will go on and on and on and on and on
                and.... on and on and on.....{" "}
              </p>
            </div>
            <div className={styles.footer}>
              <a href="#">Read More</a>
              <div>
                <img src="" />
                <img src="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;