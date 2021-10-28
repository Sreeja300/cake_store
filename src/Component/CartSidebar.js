import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiMailCloseLine } from "react-icons/ri";
import { useCart } from "react-use-cart";

const CartSidebar = (props) => {
  const { isCartOpen, openCartSidebar } = props;
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <CartbarContainer isCartOpen={isCartOpen}>
      <RiMailCloseLine onClick={openCartSidebar} />
      <CartMenu>
        {isEmpty ? (
          <CartH1>Your cart is empty</CartH1>
        ) : (
          <CartItems>
            <TotalQty>
              Total Quanity:<span>{totalUniqueItems} </span>
            </TotalQty>
            <CartItem>
              Total Item:<span>{totalItems}</span>
            </CartItem>
            <CartTotal>
              <Totalprice>
                Total Price:<span>${cartTotal}</span>
              </Totalprice>
              <CartButton onClick={() => emptyCart()}>clear Cart</CartButton>
            </CartTotal>
          </CartItems>
        )}
      </CartMenu>
      {items.map((item, index) => {
        return (
          <CartMenu key={index} length={items.length}>
            <CartItem>
              <ItemName>{item.name}</ItemName>
              <CartBtn
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </CartBtn>
              <CartQTY>{item.quantity}</CartQTY>
              <CartBtn
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </CartBtn>
              <CartBtn onClick={() => removeItem(item.id)}>Remove</CartBtn>
              <Itemprice>${item.price * item.quantity}</Itemprice>
            </CartItem>
          </CartMenu>
        );
      })}
      <CartButtonWrapper>
        <CartCheckout>You are ready to checkout!</CartCheckout>
      </CartButtonWrapper>
    </CartbarContainer>
  );
};

export default CartSidebar;

const CartbarContainer = styled.div`
  position: fixed;
  width: 350px;
  z-index: 999;
  height: 100%;
  background-color: indianred;
  align-items: center;
  display: grid;
  top: 0;
  left: ${({ isCartOpen }) => (isCartOpen ? "0" : "-1000px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
const CartMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat((${({ length }) => (length > 0 ? length : 0)}));
  text-align: center;
  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(5, 60px);
  }
`;
const CartH1 = styled.h1`
  display: flex;

  justify-content: center;
  align-items: center;
  text-decoration-style: wavy;
  color: blue;
  position: relative;
`;
const CartItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  text-align: center;
  /* list-style: none;
  text-decoration: none;
  &:hover{color: "blue"}; */
`;
const TotalQty = styled.h5`
  margin-left: 10px;
`;
const CartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: blueviolet;
  &:hover {
    color: yellowgreen;
  }
`;
const Totalprice = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
`;
const CartButton = styled.div`
  padding: 0.3rem, 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background-color: lightsteelblue;
`;
const ItemName = styled.h3`
  font-size: 16px;
  font-weight: bolder;
  width: 100%;
  max-width: 100px;
`;
const Ibutton = styled.button`
  padding: 0.3rem, 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background-color: lightsteelblue;
`;
const CartQTY = styled.h6``;
const CartBtn = styled.button``;

const Itemprice = styled.h5`
  margin-left: 10px;
  width: 100%;
  max-width: 70px;
`;
const CartTotal = styled.div`
  text-align: center;
  font-weight: bold;
  span {
    color: turquoise;
  }
`;

const CartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CartCheckout = styled.button`
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