import React from 'react';
import TitleTag from '../ui-components/title-tag';
import BranchListDev from '../components/branch-lists';
import { Routes, Route, Switch } from "react-router-dom";
function Branch(props) {
    return (
        <div>
            <TitleTag title="Branches" subTitle="We have more than 100 Branches in India. Like customers can contact us from anywhere" />
            <BranchListDev />
        </div>
    );
}
export default Branch;