import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carosel1 from '../../../assets/images/banner/hero1.jpg'
import carosel2 from '../../../assets/images/banner/hero2.jpg'
import carosel3 from '../../../assets/images/banner/hero3.jpg'
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <Carousel className="" autoPlay={true} infiniteLoop={true}>
      <div className="grid grid-cols-2 gap-8 items-center bg-[#fffafc] px-10">
          <div className="">
            <h1 className="text-2xl md:text-5xl font-bold text-purple-600 leading-tight text-left">
              Find your <span className="text-[#167570]">perfect <br /> tutor</span> easily
            </h1>

            <p className="text-gray-600 m-4 text-sm lg:text-lg text-left">
              Making tutoring easy, fun, and flexible! Now, <br /> students can
              focus on learning and teachers on teaching.
            </p>

            <Link
              to="/dashboard/tutor-form"
              className="btn-primary"
            >
              Get Started →
            </Link>

            <div className="flex items-center gap-3 mt-8">
              <span className="text-yellow-500 text-2xl hidden md:block">⭐</span>
              <p className="text-gray-700 font-medium hidden md:block">
                Over 5 million students have given a 5-star review to their
                tutor
              </p>
            </div>
          </div>
          <img src={carosel1} />
      </div>

    {/* 2nd slide */}
      <div className="grid grid-cols-2 gap-8 items-center bg-[#e8e5dec6] px-10">
        <img src={carosel2} />
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-purple-600 leading-tight text-left">
              Easily <span className="text-[#167570]">communicate</span> <br /> with tutors
            </h1>

            <p className="text-sm text-gray-600 m-4 lg:text-lg text-left">
              Nomo emm epsam voluplatem quia, <br /> voluptas sit aspernatur audit fugit, sed quis conseptuuntur ma.
            </p>

            <Link to='/tutors' className="btn-primary">
              Find a Tutor →
            </Link>

          </div>
      </div>

      {/* 3rd Slide */}
      <div className="grid grid-cols-2 gap-8 items-center bg-[#e8e5dec6] px-10">
        <div>
            <h1 className="text-lg md:text-5xl font-bold text-purple-600 leading-tight text-left">
              Find <span className="text-[#167570]">experienced  <br />tutor</span> by browsing <br />  categories
            </h1>

            <p className="text-gray-600 m-4 text-sm lg:text-lg text-left">
              Making tutoring easy, fun, and flexible! Now, <br /> students can focus
              on learning and teachers on teaching.
            </p>

            <Link to='/tutors' className="btn-primary">
              Find a Tutor →
            </Link>
          </div>

        <img src={carosel3} />
      </div>
    </Carousel>
  );
};

export default HeroSection;
