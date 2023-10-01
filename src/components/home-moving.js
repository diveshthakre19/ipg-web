import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
function HomeMoving() {
    const form = useRef();
    const [responseMessage, setResponseMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        from: '',
        to: '',
        shiftingType: '',
        date: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        emailjs.send('service_s5p55la', 'template_wn5fepn', formData,'DSx8EThI6EQMSndzn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const handleDropdownChange = (e) => {
        e.preventDefault();
        const shiftingType = e.target.value;
        setFormData({ ...formData, shiftingType });

    };
    return (
        <>
            <div class="form-widget">
                <div class="form-result">{responseMessage}</div>
                <form ref={form} class="row  mb-0" onSubmit={handleSubmit}>
                    <div class="form-process">
                        <div class="css3-spinner">
                            <div class="css3-spinner-scaler"></div>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-truck1"></i></span>
                            <input type="text" name="from" id="from" value={formData.from}
                                onChange={handleChange} required class="form-control required" placeholder="Location From" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-map"></i></span>
                            <input type="text" name="to" id="to" class="form-control required" value={formData.to}
                                onChange={handleChange} required placeholder="Location To" />
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><img src="demos/movers/images/baggage.png" height="18" alt="baggage Icon" /></span>
                            <select class="form-select" value={formData.shiftingType}
                                onChange={handleDropdownChange} name="shiftingType" id="shiftingType">
                                <option value="0">Shifting Type</option>
                                <option value="1 Bedroom Home or Apartment">1 Bedroom Home or Apartment</option>
                                <option value="2 Bedroom Home or Apartment">2 Bedroom Home or Apartment</option>
                                <option value="3 Bedroom Home or Apartment">3 Bedroom Home or Apartment</option>
                                <option value="4 Bedroom Home">4 Bedroom Home </option>
                                <option value="5+ Bedroom Home">5+ Bedroom Home </option>
                                <option value="Office Space">Office Space </option>
                                <option value="Bike Relocation">Bike Relocation</option>
                                <option value="Car Relocation">Car Relocation</option>
                                <option value="Part Load">Part Load</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-calendar"></i></span>
                            <input type="date" class="form-control home-date required" name="date" id="date" value={formData.date}
                                onChange={handleChange} required placeholder="Your Date" />
                        </div>
                    </div>
                    <div class="col-sm-12 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-user"></i></span>
                            <input type="text" name="name" id="name" class="form-control required" value={formData.name}
                                onChange={handleChange} required placeholder="Your Full Name" />
                        </div>
                    </div>
                    <div class="col-sm-12 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-envelope"></i></span>
                            <input type="email" name="email" id="email" class="form-control required" value={formData.email}
                                onChange={handleChange} required placeholder="Your Email" />
                        </div>
                    </div>
                    <div class="col-sm-12 form-group">
                        <div class="input-group">
                            <span class="input-group-text bg-transparent"><i class="icon-line2-call-out"></i></span>
                            <input type="text" name="mobile" id="mobile" class="form-control required" value={formData.mobile}
                                onChange={handleChange} required placeholder="Your Phone Number" />
                        </div>
                    </div>

                    <div class="col-12">
                        <button type="submit" name="home-moving-form-submit" class="btn bg-color text-white fw-medium w-100 py-2 mt-2">Contact Us</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default HomeMoving;