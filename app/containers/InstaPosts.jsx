import React from "react";
// import  Link  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Astpost1 from '../containers/Instaposts/Ist_post/1a.png';
import Astpost2 from '../containers/Instaposts/Ist_post/1b.png';
import Astpost3 from '../containers/Instaposts/Ist_post/1c.png';
import Bstpost1 from '../containers/Instaposts/2nd_post/ig 1a.png';
import Bstpost2 from '../containers/Instaposts/2nd_post/ig 1b.png';
import Bstpost3 from '../containers/Instaposts/2nd_post/ig 1c.png';
import Cstpost1 from '../containers/Instaposts/3rd_post/1a (1).png';
import Cstpost2 from '../containers/Instaposts/3rd_post/1b (1).png';
import Cstpost3 from '../containers/Instaposts/3rd_post/1c (1).png';

const InstaPosts = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper text-white"
      >
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/Cw0eSf3BVL6/">
            <Image src={Astpost1} alt="1st post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/Cwzv-c9hijM/">
            <Image src={Astpost2} alt="1st post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CwzcDRVutfj/">
            <Image src={Astpost3} alt="1st post C" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/Cxx4N2Mhip-/">
            <Image src={Bstpost1} alt="2nd post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/Cxx3uepB8Jd/">
            <Image src={Bstpost2} alt="2nd post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CxvRjKiheI3/">
            <Image src={Bstpost3} alt="2nd post C" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="">
            <Image src={Cstpost1} alt="3rd post A" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/Cy05x2FhaxJ/">
            <Image src={Cstpost2} alt="3rd post B" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="text-green-300">
          <a href="https://www.instagram.com/p/CyyYl1YhdtF/">
            <Image src={Cstpost3} alt="3rd post C" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default InstaPosts;
