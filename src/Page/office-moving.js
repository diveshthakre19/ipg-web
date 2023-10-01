import React from "react";
import LeftImagePeragraph from "../ui-components/left-image-peragraph";
import GlobalData from "../globalData";
import TitleTag from "../ui-components/title-tag";
import BranchListDev from '../components/branch-lists';
function OfficeMoving(params) {
    return (
        <>
            <TitleTag title="Office Shifting" subTitle="" />
            <LeftImagePeragraph data={GlobalData.servicesList.OfficeShifting} />
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container clearfix">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-7 center">
                                <div class="heading-block">
                                    <h3 class="nott mb-3 fw-semibold ls0">How can shift your Office ?</h3>
                                    <span class="text-black-50">India Packers and Movers Group working with professional packers team. And and safely pack your valuable goods.</span>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <img src="../img/Packing.jpg" alt="Pack your house furniture & Home item, kitchen Item." />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Pack your office furniture & electronics item and decoration Item</h3>
                                        <p class="mb-2">We are first of all furniture,electronics item, decoration item,books, documents etc.</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>Marking on all office item</h3>
                                        <p class="mb-2">After packing we are marking the all home item like Uparrow, Not wight up side</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="../img/marking.png" alt="Marking on goods item/decoration item/ furniture for safely load & Unload." />
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6">
                                        <img src="../img/Loaders carrying armchair and boxes in new house.jpg" alt="Sefely Load All Item in vehicle." />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Sefely Load All Item in vehicle.</h3>
                                        <p class="mb-2">After marketing we are load item in vehicle and safely and systematicily store the all goods items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <BranchListDev />
        </>
    );
}
export default OfficeMoving;