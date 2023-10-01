import React, { useState, useEffect } from 'react';
import VCard from "../ui-components/vcard";
import TitleTag from "../ui-components/title-tag";
import Table from 'react-bootstrap/Table';
import Enquiry from "../ui-components/enquiry";
import HomeShiftingPricing from "../components/home-shifting-pricing";
import CarBikePricing from "../components/car-bike-pricing";
import ServiceSection from "../ui-components/service-section";
import { Helmet } from "react-helmet";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
function PackersMovers(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const apiUrl = 'https://admin.indianpackersgroup.com/api-lpg/api.php?id=' + props.code;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                console.log(responseData.data);
                setData(responseData.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });

    }, []);
    return (
        <>
            <TitleTag title="Indian Packers group" subTitle="We are providing best solution for House hold shift all india" />
            {data.map(data =>
                <div>
                    <Helmet>
                        <title>IPG Packers And Movers {data.Location}</title>
                        <meta name="description" content={`IPG- Indian Packers Group is a leading Top Packers and movers,Best Packers and movers that has proved their strong presence in entire country, and has been in the trade of packing and moving from decades. We <strong>{data.Keyword}</strong> have a well-structured and trained team of employees who has expertise in packing each and every item as per the quality and nature of material.`} />
                        <meta name="keywords" content={`top packers and movers,best packers and movers,near by packers and movers,packers and movers`} />
                        <meta property="og:title" content={data.companyName} />
                        <meta property="og:description" content={`IPG- Indian Packers Group is a leading Top Packers and movers,Best Packers and movers that has proved their strong presence in entire country, and has been in the trade of packing and moving from decades. We <strong>{data.Keyword}</strong> have a well-structured and trained team of employees who has expertise in packing each and every item as per the quality and nature of material.`} />
                    </Helmet>
                    <VCard branchData={data} />
                    <section id="content" className='p-5'>
                        <div className="row">
                            <div className="col-md-7">
                                <h3>Branch Profile</h3>
                                <Table striped bordered hover size="sm" responsive>
                                    <tr>
                                        <td>Branch Code: </td>
                                        <th>IPG{data.BranchCode}</th>
                                    </tr>
                                    <tr>
                                        <td>Company Name: </td>
                                        <th>{data.companyName}</th>
                                    </tr>
                                    <tr>
                                        <td>Owner: </td>
                                        <th>{data.OwnerName}</th>
                                    </tr>
                                    <tr>
                                        <td>Mobile Number: </td>
                                        <th>{data.MobileNumber}</th>
                                    </tr>
                                    <tr>
                                        <td>WhatsApp Number: </td>
                                        <th>{data.WhatsappNumber}</th>
                                    </tr>
                                    <tr>
                                        <td>Location: </td>
                                        <th>{data.Location}</th>
                                    </tr>
                                    <tr>
                                        <td>Website: </td>
                                        <th>{data.Website}</th>
                                    </tr>
                                    <tr>
                                        <td>Mail Id: </td>
                                        <th>{data.Email}</th>
                                    </tr>
                                    <tr>
                                        <td>GST No.: </td>
                                        <th>{data.GstNo}</th>
                                    </tr>

                                </Table>
                                <label style={{ fontSize: 25, color: '#f5650e' }}>Why Choose ? IPG- Indian Packers Group</label>
                                <p>IPG- Indian Packers Group is a leading <strong> Top Packers and movers ${data.Location}</strong>, <strong> Best Packers and movers ${data.Location}</strong> that has proved their strong presence in entire country, and has been in the trade of packing and moving from decades. We <strong>{data.Keyword}</strong> have a well-structured and trained team of employees who has expertise in packing each and every item as per the quality and nature of material.
                                </p>
                            </div>
                            <div className="col-md-5" style={{ position: 'static' }}>
                                <h3 style={{ textAlign: 'center' }}>Get FREE QUOTES in a minute</h3>
                                <Enquiry />
                            </div>
                        </div>

                    </section>
                    <div className="fixfooter">
                        <div className="row">
                            <div className="col" style={{ backgroundColor: '#516ff5', textAlign: 'center', padding: 10 }}>
                                <a style={{ color: "white" }} href={`https://wa.me/91${data.WhatsappNumber}?text=Welcome to IPG - Indian Packers Group! Your trusted partner for all your packing and moving needs. We're here to make your relocation experience smooth and hassle-free.`} >WhatsApp Now</a>
                            </div>
                            <div className="col" style={{ backgroundColor: '#29b34e', textAlign: 'center', padding: 10 }}>
                                <a style={{ color: "white" }} href={`tel:${data.MobileNumber}`} >Just Call Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {data.length > 0 &&
                <div class="section section-features bg-transparent p-0 clearfix" style={{ marginTop: 100 }}>
                    <div class="container clearfix">
                        {/* <HowWork/> */}
                        <ServiceSection />
                        <HomeShiftingPricing />
                        <CarBikePricing />
                    </div>
                </div>
            }
            {data.length === 0 &&
                <>
                    <div className='container' style={{ pedding: 100 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Please Wait.....</Card.Title>
                                <Card.Text>
                                <Spinner animation="border" variant="success" />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                      
                    </div>
                </>
            }


        </>
    );
}
export default PackersMovers;