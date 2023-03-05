import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import apple from "../assets/images/Icon-Mac.svg"
import lenovo from "../assets/images/lenovo-red.svg"
import msi from "../assets/images/icons8-msi.svg"
import sony from "../assets/images/cdnlogo.com_sony.svg"
import bg from "../assets/images/banner-bg.png"
import dell from "../assets/images/icons8-dell.svg"
import hp from "../assets/images/icons8-hp.svg"

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Our Brands</h1>
          <p className="text-lg py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={apple} alt="" />
                  {/*<h1 className="font-bold text-xl my-2">Apple</h1>*/}
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={lenovo} alt="" />
                  {/*<h1 className="font-bold text-xl my-2">Frontend </h1>*/}
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={msi} alt="" />
                  {/*<h1 className="font-bold text-2xl my-2">React.js</h1>*/}
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={sony} alt="" />
                  {/*<h1 className="font-bold text-2xl my-2">Javascript</h1>*/}
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={dell} alt="" />
                  {/*<h1 className="font-bold text-2xl my-2">Tailwind</h1>*/}
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={hp} alt="" />
                  {/*<h1 className="font-bold text-2xl my-2">Tailwind</h1>*/}
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={hp} alt="" />
                  {/*<h1 className="font-bold text-2xl my-2">Tailwind</h1>*/}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
