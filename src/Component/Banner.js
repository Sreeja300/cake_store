import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import cake from "../Images/cake.jpeg";
import Home from "../Page/Home";
import Sidebar from "./Sidebar";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

const BannerContents = styled.div`
  max-height: 100%;
  width: 100vw;
  text-transform: uppercase;
  height: calc(100vh -80px);
  padding: 0rem calc((100vw - 1300px) / 2);
`;
const BannerItems = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding: 0 2rem;
  width: 650px;
  text-transform: uppercase;
  line-height: 1;
`;
const BannerContainer = styled.div`
  background-position: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${cake});
  overflow-x: hidden;
  overflow-y: hidden;
`;
const BannerH1 = styled.h1`
  font-size: 1.5rem;
`;
const BannerP = styled.p`
  font-size: 1rem;
`;
const BannerButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  background-color: yellowgreen;
  color: white;
  transition: 0.2s ease-in-out;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: hotpink;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;
function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openSidebar = () => {
    if(isCartOpen){
      setIsCartOpen(!isCartOpen)
       setIsOpen(!isOpen);
    }else{
      setIsOpen(!isOpen);
    }
   
 
  };

  
  const openCartSidebar = () => {
    if(isOpen){
      setIsOpen(!isOpen)
       setIsCartOpen(!isCartOpen);
    }else{
      setIsCartOpen(!isCartOpen);
    }
    
  };
  return (
    <>
      <BannerContainer>
        <Navbar
          openSidebar={openSidebar}
          isOpen={isOpen}
          openCartSidebar={openCartSidebar}
          isCartOpen={isCartOpen}
        />
        <Home />
        <Sidebar openSidebar={openSidebar} isOpen={isOpen} />
        <CartSidebar
          openCartSidebar={openCartSidebar}
          isCartOpen={isCartOpen}
        />
        <BannerContents>
          <BannerItems>
            <BannerH1>Greatest Cakes Ever!!</BannerH1>
            <BannerP>Ready-in no time!!</BannerP>
            <BannerButton>Buy Now</BannerButton>
          </BannerItems>
        </BannerContents>
      </BannerContainer>
    </>
  );
}
export default Banner;
