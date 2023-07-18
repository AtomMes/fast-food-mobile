import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const EmptyText = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: #757575;
`;

const CartIcon = styled(Icon)`
  margin-right: 5px;
`;

const CartEmpty = () => {
  return (
    <Container>
      <EmptyText>Cart Is Empty</EmptyText>
      <CartIcon
        name="cart-plus"
        size={150}
        color="#35b8be"
        style={{ marginRight: 5 }}
      />
    </Container>
  );
};

export default CartEmpty;
