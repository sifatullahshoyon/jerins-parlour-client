import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../components/Shared/Container";
import client1 from "../../../assets/images/client-1.png";
import client2 from "../../../assets/images/client-2.png";
import client3 from "../../../assets/images/client-3.png";
import ReactStars from "react-rating-stars-component";

const Testimonials = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-4xl font-bold text-text-color text-center tracking-wide pb-20">
          Testimonials
        </h1>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          data-aos="fade-right"
        >
          <SwiperSlide className="pb-8">
            <div className="md:flex justify-around flex-wrap">
              {/* Review 1 */}
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={client1} alt="client picture" />
                  </div>
                  <div>
                    <h6 className="text-xl text-[#000000] font-Poppins font-semibold">
                      Nash Patrik
                    </h6>
                    <p className="text-base text-[#000000] font-Poppins font-medium -ml-5">
                      CEO, Manpol
                    </p>
                  </div>
                </div>
                <p className="text-base text-text-gray font-Poppins font-normal pt-4 pb-8 leading-7 text-balance">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div className="text-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#FFAC0C"
                    edit={false}
                    classNames="mx-auto"
                  />
                </div>
              </div>
              {/* Review 2 */}
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={client2} alt="client picture" />
                  </div>
                  <div>
                    <h6 className="text-xl text-[#000000] font-Poppins font-semibold">
                      Miriam Barron
                    </h6>
                    <p className="text-base text-[#000000] font-Poppins font-medium -ml-12">
                      CEO, Manpol
                    </p>
                  </div>
                </div>
                <p className="text-base text-text-gray font-Poppins font-normal pt-4 pb-8 leading-7 text-balance">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div className="text-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#FFAC0C"
                    hoverColor={false}
                    edit={false}
                    classNames="mx-auto"
                  />
                </div>
              </div>
              {/* Review 3 */}
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={client3} alt="client picture" />
                  </div>
                  <div>
                    <h6 className="text-xl text-[#000000] font-Poppins font-semibold">
                      Bria Malone
                    </h6>
                    <p className="text-base text-[#000000] font-Poppins font-medium -ml-5">
                      CEO, Manpol
                    </p>
                  </div>
                </div>
                <p className="text-base text-text-gray font-Poppins font-normal pt-4 pb-8 leading-7 text-balance">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div className="text-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#FFAC0C"
                    hoverColor={false}
                    edit={false}
                    classNames="mx-auto"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-around flex-wrap">
              {/* Review 1 */}
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={client1} alt="client picture" />
                  </div>
                  <div>
                    <h6 className="text-xl text-[#000000] font-Poppins font-semibold">
                      Nash Patrik
                    </h6>
                    <p className="text-base text-[#000000] font-Poppins font-medium -ml-5">
                      CEO, Manpol
                    </p>
                  </div>
                </div>
                <p className="text-base text-text-gray font-Poppins font-normal pt-4 pb-8 leading-7 text-balance">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div className="text-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#FFAC0C"
                    hoverColor={false}
                    edit={false}
                    classNames="mx-auto"
                  />
                </div>
              </div>
              {/* Review 2 */}
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={client2} alt="client picture" />
                  </div>
                  <div>
                    <h6 className="text-xl text-[#000000] font-Poppins font-semibold">
                      Miriam Barron
                    </h6>
                    <p className="text-base text-[#000000] font-Poppins font-medium -ml-12">
                      CEO, Manpol
                    </p>
                  </div>
                </div>
                <p className="text-base text-text-gray font-Poppins font-normal pt-4 pb-8 leading-7 text-balance">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div className="text-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#FFAC0C"
                    hoverColor={false}
                    edit={false}
                    classNames="mx-auto"
                  />
                </div>
              </div>
              {/* Review 3 */}
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-16 h-16">
                    <img src={client3} alt="client picture" />
                  </div>
                  <div>
                    <h6 className="text-xl text-[#000000] font-Poppins font-semibold">
                      Bria Malone
                    </h6>
                    <p className="text-base text-[#000000] font-Poppins font-medium -ml-5">
                      CEO, Manpol
                    </p>
                  </div>
                </div>
                <p className="text-base text-text-gray font-Poppins font-normal pt-4 pb-8 leading-7 text-balance">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Purus commodo ipsum <br /> duis laoreet maecenas.
                  Feugiat{" "}
                </p>
                <div className="text-center">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    color="#FFAC0C"
                    hoverColor={false}
                    edit={false}
                    classNames="mx-auto"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonials;
