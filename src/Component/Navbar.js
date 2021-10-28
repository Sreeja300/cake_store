import React from "react";
import { GiStairsCake } from "react-icons/gi";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";
/*import {FaPizzaSlice} from "react-icons/fa";      <GiStairsCake  color = "red" size = "35px" />*/

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  font-weight: 700;
  overflow-x: hidden;

`;
const Bars = styled(GiStairsCake)`
  color: red;
  position: absolute;
  left: -65px;
  width: 50px;
  height: 30px;
`;
const Carts=styled(AiOutlineShoppingCart)`
color:red;
position: absolute;
width: 50px;
height: 30px;
margin-left:-10px;
`;
const NavLink = styled(Link)`
  display: flex;
  color: blue;
  font-size: 4rem;
  cursor: pointer;
  text-decoration: none;
`;
const Navicon = styled.div`
  margin-top: 5vmin;
  display: flex;
  position: absolute;
  right: 50px;
  top: 40px;
  margin-left: 50px;
`;
const P = styled.p`
display: flex;
  font-weight: bold;
  transform: translate(-175%, 100%);
  align-items: flex-start;
  color:palegoldenrod;
  margin-left: 0.5rem;
`;
const User =styled(FaUserCircle)`
color:red;
position: absolute;
width: 50px;
height: 30px;
margin-left:30px;
&:hover{
    cursor: pointer;
    transition: .2s ease-in-out;

}
`;
const Navbar = (props) => {
   const {openSidebar,openCartSidebar} = props;
  return (
    <Nav>
      <NavLink to={"/"}>The Cake Factory</NavLink>
      <Navicon>
        <P>Menu</P>
        <Bars onClick={openSidebar} />
        <P>Cart</P>
        <Carts onClick={openCartSidebar}/>
         <AiOutlineShoppingCart/>
         <User/>
         <P>Login</P>
         {/* <FaUserCircle/> */}

      </Navicon>
    </Nav>
  );
};

export default Navbar;
