import React from "react";
import Card from "react-bootstrap/Card";
import Products from "./Products";
import "../../assets/css/productcard.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";


const ProductCards = () => {
    const [startIndex, setStartIndex] = useState(0); // State to track the index of the first card visible

    const handleNext = () => {
      const nextIndex = startIndex + 1;
      if (nextIndex <= Products.length - 4) { // Ensure not to exceed the maximum index
        setStartIndex(nextIndex);
      }
    };
  
    const handlePrev = () => {
      const prevIndex = startIndex - 1;
      if (prevIndex >= 0) { // Ensure not to go below 0
        setStartIndex(prevIndex);
      }
    };
  return (
    <div className="row mt-5 mx-auto col-9">
      <div className="d-flex align-items-center mb-3">
        <div className="product-top rounded mr-3"></div>
        <p className="text-danger font-weight-bold">Today's</p>
      </div>
      <div>
      <h1 className="font-weight-bold">Flash Sales</h1>
      <button onClick={handlePrev} ><FaRegArrowAltCircleLeft /></button>
      <button onClick={handleNext}><FaRegArrowAltCircleRight /></button>
      </div>
      {Products.slice(startIndex, startIndex + 4).map((product) => (
        <div key={product.id} className="col-3 mb-4">
          <Card className="border-0">
            <div className="custom-background p-5">
              <Card.Img variant="top" src={product.image} />
              <div className="add-to-cart"><button onClick={handleCart}>Add to cart</button></div>
            </div>
          
            <div className="custom-2 rounded">
              <p className="ml-2">{product.sale}</p>
            </div>
            <Card.Body className="">
              <Card.Title>{product.name}</Card.Title>

              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;