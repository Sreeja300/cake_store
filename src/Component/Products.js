import React from "react";
import styled from "styled-components";
import { ProductData } from "../Data";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useCart } from "react-use-cart";


const Products = (props) => {
  const {data}=props
  const {addItem} = useCart()
  const [selected, setSelected] = useState(false)
  

const handleSelect =(item,id) =>{
console.log(item,id);
addItem(item)
selected(true)
}


  return (
    <ProductsContainer>
      <ProductHeading>Choose your Fav!</ProductHeading>
      <ProductWrapper>
        {data.map((item, index) => {
          return <ProductCard item={item}  key={index} handleSelect={handleSelect}  addItem={addItem} />;
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
width:85vw;
min-height: 100vh;
background-color: cadetblue;
padding: 5rem calc((100vw - 1300px)/2);
color: green;
`;
const ProductHeading = styled.h1`
text-align:center;
font-size: clamp(2rem,2.5vw,3rem);
`;
const ProductWrapper = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;

`;
