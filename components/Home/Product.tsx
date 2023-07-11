import React from "react";
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";
import { addToCart } from "../../redux/itemsSlice";

interface Props {
  item: Item;
}

const Product = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderColor: "rgba(53, 184, 190, 0.35)",
        borderWidth: 0.5,
        borderStyle: "solid",
        borderRadius: 6,
        width: "48%",
        minWidth:'46%',
        padding: 25,
        marginBottom: 16,
      }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={{ width: 110, height: 110, borderRadius: 15, marginBottom: 10 }}
      />

      <Text style={{ textAlign: "center" }}>{item.name}a</Text>
      <Text style={{ textAlign: "center" }}>$ {item.price}.00 USD</Text>

      <Text style={{ marginBottom: 8 }}>{item.description}</Text>

      <TouchableOpacity onPress={() => dispatch(addToCart(item.id))}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#35b8be",
            paddingHorizontal: 8,
            height: 35,
            borderRadius: 3,
          }}
        >
          {item.count && (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: 9999,
                marginRight: 5,
                alignItems: "center",
                backgroundColor: "white",
                width: 23,
                height: 23,
              }}
            >
              <Text style={{ color: "#35b8be" }}>{item.count}</Text>
            </View>
          )}
          <Text style={{ color: "white" }}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
