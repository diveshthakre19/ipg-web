import React from "react";
import './style/serviceStyle.css'
import globalData from '../globalData'
function ServiceSection(params) {
    return (
        <>
            <section class="we-offer-area text-center bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="site-heading text-center">
                                <h2>How can <span style={{ backgroundColor: '#8080ff', color: 'white', padding: 2 }}>Help</span> you for shifting</h2>
                                <h4>Reduce the stress of moving and try our full packing service. Our expert movers and packers make sure every item is perfectly packed and delivered safely.</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row our-offer-items less-carousel">
                        {globalData.servicesType.map(data =>
                            <div class="col-md-4 col-sm-6 equal-height">
                                <div class="item">
                                    <img src={data.image} style={{ height: 80, width: 80, marginBottom: 20 }}></img>
                                    <h4>{data.title}</h4>
                                    <p>
                                        {data.details}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
export default ServiceSection;