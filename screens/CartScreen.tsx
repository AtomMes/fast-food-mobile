import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  addToCart,
  minusFromCart,
  removeFromCart,
  setItems,
} from "../redux/itemsSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useNavigation } from "@react-navigation/native";
import CartItem from "../components/Home/CartItem";

import Spinner from "react-native-loading-spinner-overlay";

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const CartScreen = () => {
  const { items } = useAppSelector((state) => state.itemsSlice);

  const [loading, setLoading] = React.useState<boolean>(false);

  const navigation = useNavigation<ProductScreenNavigationProp>();

  const cartItems = items.filter((item: Item) => item.count && item.count >= 1);

  const totalPrice = cartItems.reduce(
    (sum, obj: Item) => obj.price * obj.count! + sum,
    0
  );

  const dispatch = useAppDispatch();

  const checkout = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://634ef267df22c2af7b475a0f.mockapi.io/items`
    );
    dispatch(setItems(data));
    await AsyncStorage.clear();
    setLoading(false);
  };

  const handlePress = () => {
    cartItems.length ? checkout() : navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 25,
      }}
    >
      <View
        style={{
          display: "flex",
          rowGap: 10,
          width: "100%",
          flex: 1,
          paddingHorizontal: 25,
        }}
      >
        {cartItems.length ? (
          cartItems.map((item: Item) => <CartItem key={item.id} item={item} />)
        ) : (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "600", color: "#757575" }}>
              Cart Is Empty
            </Text>
            <Icon
              name="cart-plus"
              size={150}
              color="#35b8be"
              style={{ marginRight: 5 }}
            />
          </View>
        )}
      </View>
      <Spinner
        visible={loading}
        animation="fade"
        size={60}
        textContent="Ordering"
        textStyle={{ color: "white" }}
      />
      <View
        style={{
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderTopColor: "gray",
          borderTopWidth: 1,
          borderStyle: "solid",
        }}
      >
        {cartItems.length ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Text style={{ fontSize: 18 }}>Subtotal ({cartItems.length})</Text>
            <Text style={{ fontSize: 18 }}>${totalPrice}.00 USD</Text>
          </View>
        ) : (
          <></>
        )}
        <TouchableOpacity onPress={handlePress} style={{ width: "100%" }}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#35b8be",
              borderColor: "#35b8be",
              borderRadius: 5,
              height: 40,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "white",
              }}
            >
              {cartItems.length ? "  Checkout" : "Go to the order page"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
