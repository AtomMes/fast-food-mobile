import { View, Text } from "react-native";
import React from "react";
import Product from "./Product";
import { styled } from "styled-components/native";

interface Props {
  related: Items;
}

const RelatedText = styled.Text`
  text-align: center;
  color: #35b8be;
  border-top-color: #35b8be;
  border-top-width: 0.5px;
  font-size: 40px;
  font-weight: 700;
  padding: 20px 0;
`;

const RelatedWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const RelatedItems = ({ related }: Props) => {
  return (
    <View style={{ padding: 25 }}>
      <RelatedText>Related Items</RelatedText>
      <RelatedWrapper>
        {related.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </RelatedWrapper>
    </View>
  );
};

export default RelatedItems;
