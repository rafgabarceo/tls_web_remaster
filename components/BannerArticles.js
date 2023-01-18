import BannerArticle from './BannerArticle';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";

import styles from '../styles/Home.module.scss';

export default function BannerArticles({sections}) {
    const bannerArticles = sections.map(section => 
        <SwiperSlide key={`swiperSlide-${section.name}`}>
            <BannerArticle key={`ban-${section.name}`} article={section.articles[0]}/>
        </SwiperSlide>
    );

    return (
        <div className={styles.banner}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false
                }}
                pagination={{
                clickable: true
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{borderRadius: "20px"}}
            >
                {bannerArticles}
            </Swiper>
            <hr className={styles.bannerHr}/>
        </div>
    );
}