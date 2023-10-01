import React from "react";
import { Link } from "react-router-dom";
import BranchList from "../branchlist";
import './style/serviceStyle.css'
function MoveText(params) {

    return (
        <>
            <div className="marquee">
                <marquee>
                {BranchList.branchs.map(data =>
                           <Link to={"/" + data.Keyword}>
                             Packers And Movers {data.city} {data.mobileNumber} |
                       </Link>
                 )}
                 </marquee>
            </div>
        </>
    );
}
export default MoveText;