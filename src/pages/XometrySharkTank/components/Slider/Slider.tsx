import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import styles from "./Slider.module.css";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import "swiper/css";

type SomeItemType = {
  schoolName: string;
  schoolLogo: string;
  projectImg: string;
  description: string;
  link: string;
};

type SliderProps = {
  items: SomeItemType[];
};

const goToLink = (link: string) => {
  window.location.href = link;
};

const Card = ({ item }: { item: SomeItemType }) => (
  <>
    <div className={styles.cardDiv} onClick={() => goToLink(item.link)}>
      <div className={styles.schoolDiv}>
        <h3 style={{ fontSize: "25px" }}>{item.schoolName}</h3>
        <img src={item.schoolLogo} />
      </div>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={item.projectImg} />
      </div>
      <div className={styles.descriptionDiv}></div>
      <h3>{item.description}</h3>
      <h4 className={styles.readMore}>Read More →</h4>
    </div>
  </>
);

export default function Slider({ items }: SliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideNext = () => swiperRef.current?.slideNext();
  const slidePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className={styles.sliderDiv}>
      <button onClick={slidePrev} className={styles.button}>
        <img src={arrowLeft}></img>
      </button>

      <Swiper
        loop={true}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={slideNext} className={styles.button}>
        <img src={arrowRight}></img>
      </button>
    </div>
  );
}
