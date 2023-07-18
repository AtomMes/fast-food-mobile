import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import {
  Text
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { styled } from "styled-components/native";
import CartEmpty from "../components/Cart/CartEmpty";
import CartItem from "../components/Cart/CartItem";
import {
  setItems
} from "../redux/itemsSlice";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

const Container = styled.View`
  flex: 1;
  margin-top: 25px;
`;

const ItemsContainer = styled.View`
  display: flex;
  row-gap: 10px;
  width: 100%;
  flex: 1;
  padding: 0 25px;
`;

const SubtotalContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CheckoutButton = styled.TouchableOpacity`
  width: 100%;
`;

const CheckoutButtonView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #35b8be;
  border-color: #35b8be;
  border-radius: 5px;
  height: 40px;
`;

const CheckoutInfo = styled.View`
  padding: 15px 25px;
  border-top-color: gray;
  border-top-width: 0.5px;
`;

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
    cartItems.length ? checkout() : navigation.navigate("HomeScreen");
  };

  return (
    <Container>
      <ItemsContainer>
        {cartItems.length ? (
          cartItems.map((item: Item) => <CartItem key={item.id} item={item} />)
        ) : (
          <CartEmpty />
        )}
      </ItemsContainer>
      <Spinner
        visible={loading}
        animation="fade"
        size={60}
        textContent="Ordering"
        textStyle={{ color: "white" }}
      />
      <CheckoutInfo>
        {cartItems.length ? (
          <SubtotalContainer>
            <Text style={{ fontSize: 18 }}>Subtotal ({cartItems.length})</Text>
            <Text style={{ fontSize: 18 }}>${totalPrice}.00 USD</Text>
          </SubtotalContainer>
        ) : (
          <></>
        )}
        <CheckoutButton onPress={handlePress}>
          <CheckoutButtonView>
            <Text
              style={{
                fontSize: 15,
                color: "white",
              }}
            >
              {cartItems.length ? "  Checkout" : "Go to the order page"}
            </Text>
          </CheckoutButtonView>
        </CheckoutButton>
      </CheckoutInfo>
    </Container>
  );
};

export default CartScreen;
