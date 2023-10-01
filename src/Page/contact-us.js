import React from "react";
import TitleTag from "../ui-components/title-tag";
import GlobalData from '../globalData'
function ContactUs(params) {
    return (
        <>
            <TitleTag title="Contact us" subTitle="Get more details about your shifting just contact with us" />
            <section id="content" className='p-5'>
                <div class="container">

                    <div class="row">
                        <div class="col-md-8 row">
                            <form>
                                <div className="col-md-10">
                                    <label>Full Name</label>
                                    <input class="form-control" name="name" placeholder="Name..." />
                                </div>
                                <div className="col-md-10">
                                    <label>Mobile Number</label>
                                    <input class="form-control" name="number" placeholder="Mobile Number..." />
                                </div>
                                <div className="col-md-10">
                                    <label>Email</label>
                                    <input class="form-control" name="emailId" placeholder="Email address..." />
                                </div>
                                <div className="col-md-10">
                                    <label>Subject</label>
                                    <input class="form-control" name="subject" placeholder="Subject..." />
                                </div>
                                <div className="col-md-10">
                                    <label>Message</label>
                                    <textarea rows={5} class="form-control" name="message" placeholder="Message..." />
                                </div>
                                <div className="col-md-10" style={{marginTop:10}}>
                                <button type="submit" className="btn btn-success m-0 w-100 button-large">Send</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-4" style={{marginTop:30}}>
                            <b>Customer service:</b> <br />
                            Phone:{GlobalData.companydetails.contactNumber}<br />
                            E-mail: <a href={`mailto:${GlobalData.companydetails.emailId}`}>{`${GlobalData.companydetails.emailId}`}</a><br />
                            <br /><br />
                            <b>Head Office:</b><br />
                            {GlobalData.companydetails.HeadOffice}<br />
                            <a href={`mailto:${GlobalData.companydetails.emailId}`}>{`${GlobalData.companydetails.emailId}`}</a><br />


                            <br /><br />
                            <b>Ro. East</b><br />
                            {GlobalData.companydetails.RoEast}<br /><br />
                            <b>Ro. West</b><br />
                            {GlobalData.companydetails.RoWest}<br /><br />
                            <b>Ro. South</b><br />
                            {GlobalData.companydetails.RoSouth}<br /><br />
                            <b>Ro. North</b><br />
                            {GlobalData.companydetails.RoNorth}<br /><br />
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default ContactUs;