import React from 'react'
import styled from 'styled-components';

const ProductCard = (props) => {
    const {item,addItem}=props;
    return (
        <Cart>
            <ProductImage src={item.img} alt="image of cake"/>
            <ProductInfo>
                <ProductTitle>
                    {item.name}
                </ProductTitle>
                <ProductDesc>
                    {item.desc}
                </ProductDesc>
                <ProductPrice>
                    ${item.price}
                </ProductPrice>
                <ProductButton onClick={() =>  addItem(item)}>
                    {item.Button}
                </ProductButton>
                
            </ProductInfo>
        </Cart>
    )
}

export default ProductCard;

const Cart= styled.div`
color:green;
margin:0 2rem;
width: 300px;

`;
const ProductImage= styled.img`
min-width:300px;
max-width: 100%;
height:300px;
box-shadow:8px 8px #fdc500;

`;
const ProductInfo= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align:center;
`;
const ProductDesc = styled.p`
color: orange;
`;
const ProductButton = styled.button`
font-size: 1rem;
padding:1rem 4rem;
color: burlywood;
background: black;
border-radius: 30px;
border: none;
&:hover{
    cursor: pointer;
    transition: .2s ease-in-out;
    color: red;
    background-color: hotpink;
}
    
`;
const ProductTitle =styled.h2`
`;
const ProductPrice = styled.p`
font-size: 1rem;
color: blue;
`;


