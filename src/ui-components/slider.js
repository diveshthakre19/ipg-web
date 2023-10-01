import React from 'react';
import '../App.css';
import globalData from '../globalData';
import Enquiry from './enquiry';
import MoveText from '../ui-components/move-text';
function Slider(props) {
    return (
        <div>
            <section id="slider" className="slider-element bg-color sliderSy" style={{paddingTop:40}}>
                <div className="container mt-5" style={{ zIndex: 2 }}>
                    <div className="center">
                        <h2 className="text-white h2 fw-semibold mb-2">Welcome to the IPG Packers and Movers.</h2>
                        <p className="text-white-50">Now make your shifting easy and safe by joining IPG - Indian Packers Group.</p>
                        <a href={`tel:${globalData.companydetails.contactno}`} className="btn btn-success h2 fw-semibold mb-2">{globalData.companydetails.contactNumber}: Just Call Now</a>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-6'>
                            <MoveText/>
                            </div>
                        </div>
                    </div>
                    <div class="row topmargin justify-content-center">
                        <div class="col-lg-6" style={{paddingTop:60}}>
                            <Enquiry/>
                        </div>
                        <div class="col-lg-5 d-none d-lg-flex flex-wrap justify-content-center">
<img src="img/ipg-packers-and-movers-group.png" alt="Image 1" class="d-flex align-self-end ms-5 mt-3" />
</div>
                    </div>
                    
                </div>
            </section>
        </div>

    );
}
export default Slider;