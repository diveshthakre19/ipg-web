import React from "react";
function VCard(props) {
    return (
        <>
            <div class="card text-white" style={{ backgroundColor: '#a387ff' }}>
                <img src="img/banner-Image.jpg" style={{ marginTop: 45 }} className="card-img" alt="..." />
                <div class="card-img-overlay pt-6 p-3" style={{ marginTop: 30 }}>
                    <img src="img/logo.png" style={{ height: '60px' }} />
                    <h2 style={{ fontSize: '3vw', color: 'white', margin: 0 }}>{props.branchData.companyName}</h2>
                    <p style={{ fontSize: '1.5vw', color: 'white', margin: 0 }}><strong>Address:</strong> {props.branchData.Location}</p>
                    <p style={{ fontSize: '1.5vw', color: 'white', margin: 0 }}><strong>Contact Number:</strong>{props.branchData.MobileNumber}</p>
                    <p style={{ fontSize: '1.5vw', color: 'white', margin: 0 }}><strong>Email Id:</strong>{props.branchData.Email}</p>
                </div>
            </div>
        </>
    );
}
export default VCard;