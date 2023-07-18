import React from "react";
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/itemsSlice";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-color: rgba(53, 184, 190, 0.35);
  border-width: 0.5px;
  border-style: solid;
  border-radius: 6px;
  width: 48%;
  min-width: 46%;
  padding: 25px;
  margin-bottom: 16px;
`;

const StyledImage = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  text-align: center;
`;

const Price = styled.Text`
  text-align: center;
  margin-bottom: 8px;
`;

const AddToCartButton = styled.TouchableOpacity`
  margin-top: 5px;
`;

const AddToCartView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #35b8be;
  padding: 0 10px;
  height: 30px;
  border-radius: 3px;
`;

const CountView = styled.View`
  display: flex;
  justify-content: center;
  border-radius: 9999px;
  margin-right: 5px;
  align-items: center;
  background-color: white;
  width: 23px;
  height: 23px;
`;

const CountText = styled.Text`
  color: #35b8be;
`;

const AddToCartText = styled.Text`
  color: white;
`;

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "FullProduct"
>;

interface Props {
  item: Item;
}

const Product = ({ item }: Props) => {
  const dispatch = useDispatch();

  const navigation = useNavigation<ProductScreenNavigationProp>();

  const handleProductPress = () => {
    navigation.navigate("FullProduct", { id: item.id });
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleProductPress}>
        <StyledImage source={{ uri: item.imageUrl }} />
      </TouchableOpacity>

      <Title>{item.name}</Title>
      <Price>$ {item.price}.00 USD</Price>
      <AddToCartButton onPress={() => dispatch(addToCart(item.id))}>
        <AddToCartView>
          {item.count && item.count >= 1 ? (
            <CountView>
              <CountText>{item.count}</CountText>
            </CountView>
          ) : null}
          <AddToCartText>Add to cart</AddToCartText>
        </AddToCartView>
      </AddToCartButton>
    </Container>
  );
};

export default Product;
