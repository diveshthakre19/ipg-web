import React from 'react';
import MenuList from '../menu';
import GlobalData from '../globalData';
function Footer(props) {
    return (
        <div>
          <div class="section dark pt-0 mb-0 bg-color">
                <svg viewBox="0 0 1960 206.8" class="bg-white">
                    <path class="svg-themecolor" style={{opacity:0.2}} d="M0,142.8A2337.49,2337.49,0,0,1,297.5,56.3C569.33-3.53,783.89.22,849.5,2.3c215.78,6.86,382.12,45.39,503.25,73.45,158.87,36.8,283.09,79.13,458.75,54.55A816.49,816.49,0,0,0,1983,86.8v110H0Z"></path>
                    <path class="svg-themecolor" d="M.5,152.8s498-177,849-150,1031,238,1134,94v110H.5Z"></path>
                </svg>
                <div class="container">
                    <div class="row align-items-center justify-content-center center my-4">
                        <div class="col-sm-8">
                            <div class="heading-block border-bottom-0 mb-4">
                                <h2 class="fw-semibold ls0 nott mb-3" style={{fontSize: 44,lineHeight:1.3}}>Do you need packers and movers then call today</h2>
                                <p>We do the shifting of your home and office easily and efficiently.</p>
                            </div>
                            <a href={`tel:${GlobalData.companydetails.contactNumber}`} class="button button-white button-light button-rounded fw-medium m-0">Just Call Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="footer" className="bg-transparent border-0">
                <div className="container">
                    <div className="footer-widgets-wrap pb-4 clearfix">
                        <div className="row">
                        <div className="col-lg-3 col-md-3 col-6">
                                <div className="widget clearfix">
                                    <h3 className="ls0 mb-4 nott">IPG - Indian Packers Group</h3>
                                    <p>{GlobalData.companydetails.description}</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="widget clearfix">
                                    <h4 className="ls0 mb-4 nott">Service</h4>
                                    <ul className="list-unstyled iconlist ms-0">
                                        {MenuList.service.map(data =>
                                            <li className="mb-2"><a href={data.url}>{data.label}</a></li>
                                        )}
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6">
                                <div className="widget clearfix">
                                    <h4 className="ls0 mb-4 nott">Support</h4>
                                    <ul className="list-unstyled iconlist ms-0">
                                    {MenuList.companyInfo.map(data =>
                                            <li className="mb-2"><a href={data.url}>{data.label}</a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 text-md-end">
                                <div className="widget clearfix">
                                    <div>
                                  
                            <b>Head Office:</b><br />
                            {GlobalData.companydetails.HeadOffice}<br />
                            <a href={`mailto:${GlobalData.companydetails.emailId}`}>{`${GlobalData.companydetails.emailId}`}</a><br />
                                        <div className="d-flex justify-content-md-end">
                                            <a href={GlobalData.companydetails.socialMedia.facebook} className="social-icon si-small si-facebook" title="Facebook">
                                                <i className="icon-facebook"></i>
                                                <i className="icon-facebook"></i>
                                            </a>
                                            <a href={GlobalData.companydetails.socialMedia.instagram} className="social-icon si-small si-instagram" title="instagram">
                                                <i className="icon-instagram"></i>
                                                <i className="icon-instagram"></i>
                                            </a>
                                            <a href={GlobalData.companydetails.socialMedia.youtube} className="social-icon si-small si-youtube" title="youtube">
                                                <i className="icon-youtube"></i>
                                                <i className="icon-youtube"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row' style={{backgroundColor:"#ddd",padding:10,}}>
                        <div className='col-lg-3 col-md-3'>
                            <strong style={{display:'block'}}>Ro. East</strong>
                            {GlobalData.companydetails.RoEast}
                            </div>
                            <div className='col-md-3 col-lg-3'>
                            <strong style={{display:'block'}}>Ro. West</strong>
                            {GlobalData.companydetails.RoWest}
                            </div>
                            <div className='col-md-3 col-lg-3'>
                            <strong style={{display:'block'}}>Ro. South</strong>
                            {GlobalData.companydetails.RoSouth}
                            </div>
                            <div className='col-md-3 col-lg-3'>
                            <strong style={{display:'block'}}>Ro. North</strong>
                            {GlobalData.companydetails.RoNorth}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="copyrights" className="bg-transparent">
                    <div className="container clearfix">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6 text-black-50">
                                Copyrights &IPG -Indian Packers Group; 2023 All Rights Reserved by <a href='https://www.owntechy.in/'>Owntechy</a>.
                            </div>
                            <div className="col-md-6 d-md-flex flex-md-column align-items-md-end mt-4 mt-md-0">
                                <div className="copyrights-menu copyright-links text-black-50 clearfix">
                                    <a href="/about-us">About</a>/<a href="/service">Service</a>/<a href="/faqs">FAQs</a>/<a href="/contact-us">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;