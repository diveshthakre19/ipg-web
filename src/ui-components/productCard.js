import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = props => {
  return (
    <>
      <Card style={{ width: "inherit" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
