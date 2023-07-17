import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useAppDispatch } from "../../redux/redux-hooks";
import { addToCart, minusFromCart, removeFromCart } from "../../redux/itemsSlice";

interface Props {
  item: Item;
}

const CartItem = ({ item }: Props) => {

   const dispatch = useAppDispatch()

   if(!item) return <></>

  return (
    <View
      key={item.id}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
          marginRight: 10,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            marginBottom: 10,
            marginTop: 2,
          }}
        >
          $ {item.price}.00 USD
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(removeFromCart(item.id))}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            name="trash"
            size={23}
            color="gray"
            style={{ marginRight: 5 }}
          />
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            width: 32,
            height: 32,
            backgroundColor: "#35b8be",
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: 5,
            fontSize: 16,
            borderRadius: 9999,
          }}
        >
          {item.count}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <TouchableOpacity onPress={() => dispatch(addToCart(item.id))}>
            <Text
              style={{
                backgroundColor: "#35b8be",
                width: 22,
                height: 22,
                color: "white",
                textAlign: "center",
                borderRadius: 6,
                paddingTop: 1,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(minusFromCart(item.id))}>
            <Text
              style={{
                backgroundColor: "#35b8be",
                width: 22,
                height: 22,
                color: "white",
                textAlign: "center",
                borderRadius: 6,
                paddingTop: 1,
              }}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
