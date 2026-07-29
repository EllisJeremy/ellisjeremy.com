import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import styles from "./Slider.module.css";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import "swiper/css";

export type ArticleType = {
  type: string;
  title: string;
  author: string;
  readTime?: string;
  description: string;
  buttonText: string;
  buttonType: 'primary' | 'secondary';
  url: string;
};

type ArticleSliderProps = {
  articles: ArticleType[];
  cardStyles: any; // CSS module styles from ResourcesPage
};

const goToLink = (link: string) => {
  window.location.href = link;
};

const ArticleCard = ({ article, cardStyles }: { article: ArticleType; cardStyles: any }) => (
  <div className={cardStyles.articleCard} onClick={() => goToLink(article.url)}>
    <div className={cardStyles.articleType}>{article.type}</div>
    <h3 className={cardStyles.articleTitle}>{article.title}</h3>
    <div className={cardStyles.articleMeta}>
      <p className={cardStyles.articleAuthor}>{article.author}</p>
      {article.readTime && <p className={cardStyles.articleReadTime}>{article.readTime}</p>}
    </div>
    <p className={cardStyles.articleDescription}>
      {article.description}
    </p>
    <a
      
      target="_blank"
      rel="noopener noreferrer"
      className={article.buttonType === 'primary' ? cardStyles.primaryButton : cardStyles.secondaryButton}
    >
      {article.buttonText}
    </a>
  </div>
);

export default function ArticleSlider({ articles, cardStyles }: ArticleSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const slideNext = () => swiperRef.current?.slideNext();
  const slidePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className={styles.sliderDiv}>
      <button onClick={slidePrev} className={styles.button}>
        <img src={arrowLeft} alt="Previous" />
      </button>

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ flex: 1 }}
      >
        {articles.map((article, i) => (
          <SwiperSlide key={i}>
            <ArticleCard article={article} cardStyles={cardStyles} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={slideNext} className={styles.button}>
        <img src={arrowRight} alt="Next" />
      </button>
    </div>
  );
} 