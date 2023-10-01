import React from 'react';
import TitleTag from '../ui-components/title-tag';
import globalData from '../globalData'
import LeftImagePeragraph from '../ui-components/left-image-peragraph';
import CenterPeragraph from '../ui-components/center-peragraph';
import RightImagePeragraph from '../ui-components/right-image-peragraph';
import BranchListDev from '../components/branch-lists';
import {Helmet} from "react-helmet";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
function AboutUs(props) {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | IPG Packers And Movers</title>
                {/* <meta name="description" content={"description"}/>
                <meta name="keywords" content={"keyword"}/>
                <meta property="og:title" content={"og:title"}/>
                <meta property="og:description" content={"og:description"}/> */}
            </Helmet>
            <TitleTag title="About us" subTitle="know about company profile" />
            <LeftImagePeragraph data={globalData.aboutus.why} />
            <CenterPeragraph data={globalData.aboutus.more} />
            <RightImagePeragraph data={globalData.aboutus.mission} />
            <LeftImagePeragraph data={globalData.aboutus.vision} />
            <BranchListDev/>
            <FloatingWhatsApp avatar={globalData.companydetails.logo} phoneNumber={`91${globalData.companydetails.contactNumber}`} accountName="Indian Packers Group" />
        </div>

    );
}
export default AboutUs;