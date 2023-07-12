import React from "react";
import { FlatList, View } from "react-native";
import Product from "./Product";

interface Props {
  food: Items;
}

const Products = ({ food }: Props) => {

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {food.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Products;
