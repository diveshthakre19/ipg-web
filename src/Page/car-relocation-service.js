import React from "react";
import LeftImagePeragraph from "../ui-components/left-image-peragraph";
import TitleTag from "../ui-components/title-tag";
import GlobalData from "../globalData";
function CarRelocationService(params) {
    return(
        <>
        <TitleTag title="Car & Bike Relocation Service" subTitle="We are providing best solution for car & bike relocation service all india" />
            <LeftImagePeragraph data={GlobalData.servicesList.carAndBikeRelocation} />
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container clearfix">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-7 center">
                                <div class="heading-block">
                                    <h3 class="nott mb-3 fw-semibold ls0">How can move your vehicle all India?</h3>
                                    <span class="text-black-50">We are multiple option for car & bike relocation service all India</span>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <img src="../img/car-checking.png" alt="We are check all vehicle info" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>We are check all vehicle info</h3>
                                        <p class="mb-2">Before car & bike relocation we are check car & bike condition and white the all inforation and also check car bike document like insurance,RC,other document</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>Then load your vehicle on transportation the move your vehicle</h3>
                                        <p class="mb-2">We are safely loading vehicle and transportation vehicle</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="../img/car-carrier-service.jpg" alt="Marking on item for safely load & unload" />
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6">
                                        <img src="../img/car-carrierService.png" alt="Sefely delivered your vehicle" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Sefely delivered your vehicle</h3>
                                        <p class="mb-2">We are safely delivered your vehicle on your location </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default CarRelocationService;