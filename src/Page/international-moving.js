import React from "react";
import LeftImagePeragraph from "../ui-components/left-image-peragraph";
import GlobalData from "../globalData";
import TitleTag from "../ui-components/title-tag";
import BranchListDev from '../components/branch-lists';
function InternationalMoving(params) {
    return (
        <>
            <TitleTag title="International Shifting" subTitle="IPG working with trasted international shifting provider and your item safely delivery on time" />
            <LeftImagePeragraph data={GlobalData.servicesList.internationalMoving} />
            <section id="content">
                <div class="content-wrap pb-0">
                    <div class="container clearfix">
                        <div class="row justify-content-center mb-5">
                            <div class="col-lg-7 center">
                                <div class="heading-block">
                                    <h3 class="nott mb-3 fw-semibold ls0">How can shift item in International ?</h3>
                                    <span class="text-black-50">So by now, you have decided to move to another country for work, growth, or even a bright future. You must be wondering the easiest, stress-free process to accomplish this. Well, international relocation is not as simple as just packing your bags, booking the flight, and just moving. There are hundreds of factors to make the transition during international relocation smooth.</span>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="row align-items-center">
                                    <div class="col-sm-6">
                                        <img src="../img/international-delivery-1.jpg" alt="Deciding the country" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>1. Deciding the country</h3>
                                        <p class="mb-2">Knowing which country you are moving to is only a small and easy part of the entire process. Planning the move to that country and executing it without flaws is harder. Multiple factors such as cost of living, language barriers, culture, climate, and weather conditions influence your decision-making when moving to another country.
Something as simple as adjusting to a cold country when you hail from warmer countries like India takes a lot of effort on your health and the health of the people with you. Therefore, it is essential to conduct thorough research to make sure your decisions are rock solid!
</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>2. Understanding</h3>
                                        <p class="mb-2">If you have decided the country you are planning to relocate to, you need to start the necessary preparations from documents to finding a residence for yourself in the new country. It is advisable not to ship or move everything you own unless you consider them very important. For example, it is not worth shipping a simple table with metal legs weighing 8 pounds and costs only a few bucks to buy new as the cost to ship the item is more than the actual cost of the item. Deciding what to move and when to move is a very crucial part of your relocation process for a seamless and affordable move.
</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="../img/internation-move-2.jpg" alt="Understanding" />
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6">
                                        <img src="../img/internation-packing.jpg" alt="Packing for your international move" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>3. Packing for your international move</h3>
                                        <p class="mb-2">A few important things to consider for a safe and seamless international move are disassembly of household items, safe and reliable packing, choosing the right box size for your belongings, etc. You can always consult your shipping provider for the best options and guidance for a smooth international move.
</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>4. Important documents</h3>
                                        <p class="mb-2">There is a list of documents you need to have on your person before moving to another country with different laws. Always consider visiting the embassy for even the most minor concerns you have regarding your international move. Documents like visas, passports, etc., are the most important of all documents you will need for your move.
</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="../img/internation-document.jpg" alt="Important documents for internation shifting" />
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6">
                                        <img src="../img/find-shiping-company.jpg" alt="Choosing a reliable shipping and moving company" />
                                    </div>
                                    <div class="col-sm-6">
                                        <h3>Choosing a reliable shipping and moving company</h3>
                                        <p class="mb-2">As you start packing for the big move, you should consider using a reliable mover and packer service provider for the utmost safety of your belongings. Movers and packers help you with the disassembly of household goods, packing from your current residence to assembly, and unpacking everything at your new home. The moving process simply becomes easy as the professionals provide door-to-door relocation services with easy customs clearance. They also cut your packing and moving time by half!
</p>
                                    </div>
                                </div>
                                <div class="row align-items-center mt-5">
                                    <div class="col-sm-6 mb-4 mb-sm-0">
                                        <h3>6. Final preparation for your International relocation</h3>
                                        <p class="mb-2">Now, as you have everything on track, you have to double-check your list to make sure you haven’t missed a single item to avoid delays and other inconveniences in the entire international relocation process.
</p>
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="../img/final-perpertion.jpg" alt="Final preparation for your International relocation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>  
            <BranchListDev/>
        </>
    );
}
export default InternationalMoving;