// import React from "react";
// import Swiper from "react-id-swiper";
const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <Swiper {...params}>
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/1)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/2)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/3)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/4)",
        }}
      />
      <div
        style={{
          backgroundImage: "url(http://lorempixel.com/600/600/nature/5)",
        }}
      />
    </Swiper>
  );
};
export default CoverflowEffect;
