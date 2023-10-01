import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import HomeMoving from '../components/home-moving';
function Enquiry(props) {

    return (
        <>
            <Card>
                <Card.Header>Get Free Quotes</Card.Header>
                <Card.Body>
                    <Card.Title>Get 5 % discount Shifting</Card.Title>
                    <Card.Text>
                        <HomeMoving />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>

    );
}
export default Enquiry;
