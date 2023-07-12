import React from "react";
import { FlatList, View } from "react-native";
import Product from "./Product";

interface Props {
  food: Items;
}

const Products = ({ food }: Props) => {
  const renderItem = ({ item }: { item: Item }) => <Product item={item} />;

  return (
    <View>
      <FlatList
        key={"_"}
        data={food}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id.toString()}
        style={{
          display: "flex",
        }}
        contentContainerStyle={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      />
    </View>
  );
};

export default Products;
