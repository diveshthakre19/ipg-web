import React from 'react';
import Slider from '../ui-components/slider';
import Working from '../ui-components/working';
import ServiceList from '../ui-components/service-list';
import BranchListDev from '../components/branch-lists';
import MoveText from '../ui-components/move-text';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import globalData from '../globalData'
function Home(props) {
    return (
        <div>
            <Slider/>
            <Working/>
            <ServiceList/>
            <BranchListDev />
            <FloatingWhatsApp avatar={globalData.companydetails.logo} phoneNumber={`91${globalData.companydetails.contactNumber}`} accountName="Indian Packers Group" /> 
        </div>

    );
}
export default Home;