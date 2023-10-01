import React from 'react';
import TitleTag from '../ui-components/title-tag';
import GlobalData from '../globalData'
import ServiceList from '../ui-components/service-list';
import LeftImagePeragraph from '../ui-components/left-image-peragraph';
import BranchListDev from '../components/branch-lists';
function Services(props) {
    return (
        <div>
            <TitleTag title="Service" subTitle="We are providing multiple services" />
            <LeftImagePeragraph data={GlobalData.serviceAbout} />
            <ServiceList/>
            <BranchListDev />
        </div>

    );
}
export default Services;