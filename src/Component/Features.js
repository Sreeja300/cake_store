import React from "react";
import styled from "styled-components";
import castlecake from "../Images/castlecake.jpeg";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: blue;
  height: 100vh;
  max-height: 500px;
  padding: 0 1rem;
  /* background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1),
    url(${castlecake})
  ); */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${castlecake});
  background-position: center;
  background-size: cover;
`;
const H1 = styled.h1`
font-size: clamp(3rem, 5vw,5rem);
margin-bottom: -20px;

`;
const P = styled.p`
font-size: clamp(1rem, 5vw,2rem);
margin-bottom: 1rem;
color: goldenrod;

`;
const FeatureButton = styled.div`
font-size: 1.5rem;
padding:0.6rem 3rem;
background-color:yellowgreen;
transition: .2s ease-in-out;
color:#000;
border-radius: 10px;
&:hover
{ cursor: pointer; color:red;transition:.2s ease-in-out;}
`;

const Features = () => {
  return (
    <FeatureContainer>
      <H1>Cake of the day!</H1>
      <P>
        {" "}
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s{" "}
      </P>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Features;
