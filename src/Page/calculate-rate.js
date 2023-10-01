import React from "react";
import TitleTag from "../ui-components/title-tag";
import Enquiry from "../ui-components/enquiry";
import HomeShiftingPricing from "../components/home-shifting-pricing";
import CarBikePricing from "../components/car-bike-pricing";
function CalculateRate(params) {
    return (
        <>
            <TitleTag title="Calculate Shifting Rate" subTitle="Get more details about your shifting just contact with us" />
            <section id="content" className='p-5'>
                <div className="row mb-5 justify-content-md-center">
                    <div className="col-md-5" style={{ position: 'static' }}>
                        <h3 style={{ textAlign: 'center' }}>Get FREE QUOTES in a minute</h3>
                        <Enquiry />
                    </div>
                </div>
                <HomeShiftingPricing />
                <CarBikePricing />
            </section>
        </>
    );
}
export default CalculateRate;