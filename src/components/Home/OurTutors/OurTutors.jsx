import React, { use } from "react";
import 'swiper/css'
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OurTutorCart from './OurTutorCart';
import Container from "../../Shared/Container";

const OurTutors = ({toutorsPromise}) => {
    const tutorsdata = use(toutorsPromise);
    // console.log(tutorsdata);
    return (
        <div className="py-15">
          <Container>
              <div className="text-container text-[#0b2b5c] text-center p-5">
                <h1 className="text-3xl font-bold m-5">Why Choose Our Tutors</h1>
                <p className="text-sm my-5 ">Our tutors are carefully selected for their expertise, teaching experience, and dedication to student growth. <br /> Each tutor provides personalized guidance, clear explanations, and structured lessons tailored to individual needs. <br /> We focus on building confidence, improving exam performance, and ensuring a supportive learning environment for every student.</p>
              </div>
                <Swiper
                  effect={"coverflow"}
                  loop={true}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                  }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {
                    tutorsdata.map(tutor=><SwiperSlide><OurTutorCart tutor={tutor}></OurTutorCart></SwiperSlide>)
                  }
                </Swiper>
                </Container>
            </div>
    );
};

export default OurTutors;