import React from "react";
import Table from 'react-bootstrap/Table';
function CarBikePricing(params) {
    return(
        <div>
        <h2>What are the Charges for Car & Bike Transportation Services?</h2>
        <p>In the case of intercity or interstate moves, people often need professional services for vehicle transportation. For example, if you need to move your bike from Delhi to Bangalore, then you cannot drive it yourself. You will look for someone that can transport your bike safely from pune to Bangalore.</p>
        <p>Similarly, it would be extremely difficult to drive a car from one city to another far distant city. Imagine you need to take your car from Patna to Chennai. Would you like to drive the car or hire a professional car transport service? We are pretty sure that you will go with hiring a professional vehicle transportation service.</p>
        <p>The only concern you will have in mind is how much the moving company will charge for transporting the car. But you have nothing to worry about, we will let you know the approximate charges for transporting a car or a bike from one city to another.</p>
        <p>By and large, professional packers and movers or independent transport companies charge by the type of vehicle and the distance between the two cities.</p>
        <p>For example, car transportation charges will range from Rs. 9,000 - 17,000 for a distance of 750 - 1200 km. And the bike transportation costs will range from Rs. 4,500 - 9,000 for 750 - 1200 km distance.</p>
        <p>Below is the price chart that will clearly give you an idea about transporting a vehicle from one city to another based on the distance.</p>
         <h2>Car & Bike Transportation Price</h2>
            <Table striped bordered hover size="sm" responsive>
                  <tbody><tr>
                    <td><strong>Move Type/Distance</strong></td>
                    <td><strong>100 - 350 km</strong></td>
                    <td><strong>350 - 750 km</strong></td>
                    <td><strong>750 - 1200 km</strong></td>
                    <td><strong>1200 - 1700 km</strong></td>
                    <td><strong>1700 - 2300 km</strong></td>
                    <td><strong>2300 - 3000 km</strong></td>
                  </tr>
                  <tr>
                    <td>4-Wheeler (Car) </td>
                    <td>Rs. 5,500 - 11,000 </td>
                    <td>Rs. 7,500 - 14,000 </td>
                    <td>Rs. 9,000 - 17,000 </td>
                    <td>Rs. 11,000 – 20,000 </td>
                    <td>Rs. 13,000 - 23,000 </td>
                    <td>Rs. 15,000 - 26,000 </td>
                  </tr>
                  <tr>
                    <td>2-Wheeler (Bike) </td>
                    <td>Rs. 2,800 - 5,800 </td>
                    <td>Rs. 3,500 – 7,000 </td>
                    <td>Rs. 4,500 - 9,000 </td>
                    <td>Rs. 6,500 - 12,000 </td>
                    <td>Rs. 7,000 - 12,500 </td>
                    <td>Rs. 8,000 - 15,000 </td>
                  </tr>
                </tbody></Table>
        </div>
    );
}
export default CarBikePricing;