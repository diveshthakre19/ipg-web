import React from 'react';
import TitleTag from '../ui-components/title-tag';
import BranchListDev from '../components/branch-lists';
function Gallery(props) {
    return (
        <div>
            <TitleTag title="Gallery" subTitle="Indian Packeras Group Image Gallery" />
            <section id="content" className='p-5'>
                <div className='container'>
                    
                </div>
            </section>  
            <BranchListDev/>
        </div>
    );
}
export default Gallery;