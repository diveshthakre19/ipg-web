import React from "react";
import LeftImagePeragraph from "../ui-components/left-image-peragraph";
import ServiceSection from "../ui-components/service-section";
import TitleTag from "../ui-components/title-tag";
import GlobalData from "../globalData";
function PackingAndUnpacking(){
    return(
        <>
          <TitleTag title="Packing And Unpacking" subTitle="We are providing packing & unpacking services for customers' valuable goods items and furniture. because goods safety" />
            <LeftImagePeragraph data={GlobalData.servicesList.packingAndUnpacking} />
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container clearfix">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-7 center">
                                <div class="heading-block">
                                    <h3 class="nott mb-3 fw-semibold ls0">How can pack your goods item by IPG ?</h3>
                                    <span class="text-black-50">India Packers and Movers Group working with professional packers team. And and safely pack your valuable goods.</span>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <img src="../img/matiral.jpg" alt="Packing material use according goods item" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Packing material use according goods item</h3>
                                        <p class="mb-2">We are select the packing material for goods according to item weight and size and value</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>Marking on item for safely load & unload</h3>
                                        <p class="mb-2">After packing we are marking the all home item like Uparrow, Not wight up side</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="../img/markting-box-ipg-packers.jpg" alt="Marking on item for safely load & unload" />
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6">
                                        <img src="../img/Loaders carrying armchair and boxes in new house.jpg" alt="Sefely Load & Unload All Item in vehicle." />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Sefely Load & Unload All Item in vehicle.</h3>
                                        <p class="mb-2">After marketing we are load item in vehicle and safely and systematicily store the all goods items</p>
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
export default PackingAndUnpacking;