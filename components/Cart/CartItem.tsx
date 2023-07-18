import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAppDispatch } from "../../redux/redux-hooks";
import {
  addToCart,
  minusFromCart,
  removeFromCart,
} from "../../redux/itemsSlice";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin-right: 10px;
`;

const ItemDetails = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const ItemName = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 2px;
`;

const RemoveButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RemoveIcon = styled(Icon)`
  margin-right: 5px;
`;

const CountContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const CountText = styled.Text`
  width: 32px;
  height: 32px;
  background-color: #35b8be;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 5px;
  font-size: 16px;
  border-radius: 9999px;
`;

const CountButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

const CountButton = styled.TouchableOpacity`
  background-color: #35b8be;
  width: 22px;
  height: 22px;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding-top: 1px;
`;

const CountChanger = styled.Text`
  background: #35b8be;
  width: 22px;
  height: 22px;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding-top: 1px;
`;

interface Props {
  item: Item;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  if (!item) return <></>;

  return (
    <Container key={item.id}>
      <ItemImage source={{ uri: item.imageUrl }} />
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>$ {item.price}.00 USD</ItemPrice>
        <RemoveButton onPress={() => dispatch(removeFromCart(item.id))}>
          <RemoveIcon name="trash" size={23} color="gray" />
          <Text>Remove</Text>
        </RemoveButton>
      </ItemDetails>
      <CountContainer>
        <CountText>{item.count}</CountText>
        <CountButtonContainer>
          <CountButton onPress={() => dispatch(addToCart(item.id))}>
            <CountChanger>+</CountChanger>
          </CountButton>
          <CountButton onPress={() => dispatch(minusFromCart(item.id))}>
            <CountChanger>-</CountChanger>
          </CountButton>
        </CountButtonContainer>
      </CountContainer>
    </Container>
  );
};

export default CartItem;
