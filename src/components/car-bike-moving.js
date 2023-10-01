import React from "react";
function CarBikeMoving() {
    return (
        <>
            <div class="form-widget">
                <div class="form-result"></div>
                <form class="row home-moving-form position-relative mb-0" method="post">
                    <div class="form-process">
                        <div class="css3-spinner">
                            <div class="css3-spinner-scaler"></div>
                        </div>
                    </div>
                    <div class="col-12 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><img src="demos/movers/images/baggage.png" height="18" alt="baggage Icon" /></span>
                            <select class="required form-select valid" name="others-moving-form-service" id="others-moving-form-service">
                                <option value="" disabled="" selected="">-- Select--</option>
                                <option value="Bike">Bike</option>
                                <option value="Car">Car</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-truck1"></i></span>
                            <input type="text" name="home-moving-form-location-from" id="home-moving-form-location-from" class="form-control required" value="" placeholder="Location From" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-map"></i></span>
                            <input type="text" name="home-moving-form-location-to" id="home-moving-form-location-to" class="form-control required" value="" placeholder="Location To" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-user"></i></span>
                            <input type="text" name="home-moving-form-name" id="home-moving-form-name" class="form-control required" value="" placeholder="Your Full Name" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-envelope"></i></span>
                            <input type="email" name="home-moving-form-email" id="home-moving-form-email" class="form-control required" value="" placeholder="Your Email" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-call-out"></i></span>
                            <input type="text" name="home-moving-form-phone" id="home-moving-form-phone" class="form-control required" value="" placeholder="Your Phone Number" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-calendar"></i></span>
                            <input type="date" class="form-control home-date required" name="home-moving-form-date" id="home-moving-form-date" value="" placeholder="Your Date" />
                        </div>
                    </div>
                    <div class="col-12 d-none">
                        <input type="text" id="home-moving-form-botcheck" name="home-moving-form-botcheck" value="" />
                    </div>
                    <div class="col-12">
                        <button type="submit" name="home-moving-form-submit" class="btn bg-color text-white fw-medium w-100 py-2 mt-2">Contact Us</button>
                    </div>
                    <input type="hidden" name="prefix" value="home-moving-form-" />
                    <input type="hidden" name="subject" value="Home Moving Request" />
                    <input type="hidden" name="html_title" value="Home Moving" />
                </form>
            </div>
        </>
    );
}
export default CarBikeMoving;