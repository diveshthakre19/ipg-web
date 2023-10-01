import React from 'react';
import TitleTag from '../ui-components/title-tag';
import GlobalData from '../globalData'
import LeftImagePeragraph from '../ui-components/left-image-peragraph';
import ServiceSection from '../ui-components/service-section';
import Slider from "react-slick";
import ProductCard from "../ui-components/productCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Transportation(props) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <TitleTag title="Transportation Service" subTitle="IPG- most trusted packers and movers group all India. We are connecting trusted transportation service" />
            <LeftImagePeragraph data={GlobalData.servicesList.transportation} />
            <section class="we-offer-area text-center bg-gray" style={{marginLeft:50,marginRight:50}}>
        <div class="container" >
        <h2>We are use for transport services</h2>
        <Slider {...settings}>
          {GlobalData.transportationVehicle.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.imgSrc} title={slide.title} />
              </div>
            );
          })}
        </Slider>
        </div>
        </section>
        <ServiceSection/>
      </div>
    );
}
export default Transportation;