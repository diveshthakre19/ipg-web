import React from "react";
import globalData from '../globalData';
function ServiceList() {
    return (
        <>
        <div class="clear"></div>
            <div class="section section-features bg-transparent p-0 clearfix" style={{marginTop:100}}>
                <div class="container clearfix">
                    <div class="row col-mb-50 col-mb-lg-80">
                    {globalData.service.map(data =>
                        <div class="col-md-4">
                            <div class="feature-box media-box">
                                <div class="fbox-icon position-relative mb-4" >
                                    <i class={data.icon}></i>
                                </div>
                                <div class="fbox-content">
                                    <h4 class="fw-semibold"><a href={data.url}>{data.label}</a></h4>
                                    <p class="text-muted" style={{textAlign:'justify'}}>{data.details}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ServiceList;