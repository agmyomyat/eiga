import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import classes from './Carousel.module.css';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Carousel = () => {
    const pagiantion = {
        // dynamicBullets: true,
        // el: `.${classes['swiper-pagination-bullet']}`,
        bulletClass: `.${classes['swiper-pagination-bullet']}`,
        renderBullet: function (_index, className) {
            return `<span class="${className}"></span>`;
        },
    };

    return (
        <Swiper pagination={pagiantion} className={`mySwiper ${classes['swiper-container']}`}>
            <SwiperSlide className={classes['swiper-slide']}>Slide 1</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 2</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 3</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 4</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 5</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 6</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 7</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 8</SwiperSlide>
            <SwiperSlide className={classes['swiper-slide']}>Slide 9</SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
