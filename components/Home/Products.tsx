import React from "react";
import { FlatList, ScrollView, View, Text, Image } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { addToCart } from "../../redux/itemsSlice";
import Product from "./Product";
import { TouchableOpacity } from "react-native-gesture-handler";

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
