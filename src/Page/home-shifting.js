import React from 'react';
import TitleTag from '../ui-components/title-tag';
import LeftImagePeragraph from '../ui-components/left-image-peragraph';
import GlobalData from '../globalData'
import HomeShiftingPricing from '../components/home-shifting-pricing';
function HomeShifting(props) {
    return (
        <div>
            <TitleTag title="HomeShifting" subTitle="Make your house shifting easy" />
            <LeftImagePeragraph data={GlobalData.servicesList.HomeShifting} />
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container clearfix">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-7 center">
                                <div class="heading-block">
                                    <h3 class="nott mb-3 fw-semibold ls0">How can shift your house ?</h3>
                                    <span class="text-black-50">India Packers and Movers Group working with professional packers team. And and safely pack your valuable goods.</span>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <img src="../img/Packing.jpg" alt="Pack your house furniture & Home item, kitchen Item." />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Pack your house furniture & Home item, kitchen Item.</h3>
                                        <p class="mb-2">We are first of all pack your house furniture,Home item, kitchen Item and decoration item for safety purpose</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>Marking on goods item/decoration item/ furniture for safely load & Unload.</h3>
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
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container clearfix">
                         <HomeShiftingPricing/>
                    </div>
                </div>
            </section>
            
           </div>
          
    );
}
export default HomeShifting;