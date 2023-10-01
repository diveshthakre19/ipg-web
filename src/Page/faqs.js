import React from 'react';
import TitleTag from '../ui-components/title-tag';
import Faq from 'react-faq-component';
import GlobalData from '../globalData'
import BranchListDev from '../components/branch-lists';
function Faqs(props) {
    return (
        <div>
            <TitleTag title="Faqs" subTitle="If you have any quotation about moving" />
            <section id="content" className='p-5'>
                <div className='container'>
                <Faq data={GlobalData.faq}/>
                </div>
            </section>
            <BranchListDev/>
        </div>

    );
}
export default Faqs;