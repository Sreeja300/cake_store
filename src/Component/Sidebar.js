import React from 'react';
import styled from "styled-components";
import {RiMailCloseLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const Sidebar = (props) => {
    const {
        isOpen,openSidebar
    }= props;
    return (
        <SidebarContainer isOpen={isOpen} onClick={openSidebar}>
            <RiMailCloseLine    />
            <SidebarMenu>
                <SidebarLink to="/">
                    Cakes
                </SidebarLink>
                <SidebarLink to="/">
                    Pasteries
                </SidebarLink>
                <SidebarLink to="/">
                    Cake Combo
                </SidebarLink>
                <SidebarLink to="/">
                    Brownies
                </SidebarLink>
                <SidebarLink to="/">
                    Dryfruit Cake
                </SidebarLink>
                <SidebarLink to="/">
                    Fruit Cakes
                </SidebarLink>
                <SidebarButtonWrapper>
                    <SidebarCheckout>
                        Check-out Now
                    </SidebarCheckout>
                </SidebarButtonWrapper>
            </SidebarMenu>
        </SidebarContainer>

    )
}
export default Sidebar;

const SidebarContainer = styled.div`
position: fixed;
width: 350px;
z-index: 999;
height: 100%;
background-color: indianred;
align-items: center;
display: grid;
top:0;
right: ${({isOpen})=>(isOpen ? "0":"-1000px")};
@media screen and (max-width:400px){
    width:100%
}
`;
const SidebarMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
@media screen and (max-width:400px){
    grid-template-rows:repeat(5,60px)
}
`;
const SidebarLink =styled(Link)`
display: flex;
justify-content: center;
align-items: center;
list-style:none;
text-decoration:none;
color:#ff9000;
font-size:1.5rem;
&:hover{color:brown;cursor:pointer;}
`;
const SidebarCheckout = styled(Link)`
background-color: coral;
white-space: nowrap;
padding: 16px 64px;
border-radius: 20px;
border:none;
color:green;
text-decoration:none;
font-size:16px;
&:hover{color:brown;cursor:pointer; transition: .2s ease-in-out}
`;
const SidebarButtonWrapper = styled.div`
display: flex;
justify-content: center;
`;
