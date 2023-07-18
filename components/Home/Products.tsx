import React from "react";
import { FlatList, View } from "react-native";
import Product from "./Product";
import { styled } from "styled-components/native";

interface Props {
  food: Items;
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Products = ({ food }: Props) => {
  return (
    <View>
      <Container>
        {food.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
    </View>
  );
};

export default Products;
