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
    navigation.navigate("FullProduct", { id:item.id });
  };

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
        minWidth: "46%",
        padding: 25,
        marginBottom: 16,
      }}
    >
      <TouchableOpacity onPress={handleProductPress}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 15,
            marginBottom: 10,
          }}
        />
      </TouchableOpacity>

      <Text style={{ textAlign: "center" }}>{item.name}</Text>
      <Text style={{ textAlign: "center", marginBottom:8 }}>$ {item.price}.00 USD</Text>

      {/* <Text style={{ marginBottom: 8 }}>{item.description}</Text> */}

      <TouchableOpacity onPress={() => dispatch(addToCart(item.id))}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#35b8be",
            paddingHorizontal: 10,
            height: 30,
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
