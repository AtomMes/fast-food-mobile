import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { addToCart } from "../../redux/itemsSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Product from "./Product";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

type FullProductRouteProp = RouteProp<RootStackParamList, "FullProduct">;

interface Props {
  route: FullProductRouteProp;
}

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;
const FullProduct = ({ route }: Props) => {
  const { id } = route.params;
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.itemsSlice);
  const item: Item = items[id];
  const [related, setRelated] = React.useState<Items>([]);

  React.useEffect(() => {
    AsyncStorage.setItem("items", JSON.stringify(items));
    setRelated(items.filter((i: Item) => i.types.includes(item.types[1])));
  }, [items]);

  const navigation = useNavigation<ProductScreenNavigationProp>();

  return (
      <ScrollView>
        <View
          style={{
            display: "flex",
            alignSelf: "center",
            width: "100%",
            padding: 25,
          }}
        >
          <View style={{ position: "relative" }}>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                zIndex: 10,
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Icon name="arrow-left" size={20} color="#35b8be" />
            </TouchableOpacity>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: "100%",
                height: 350,
                borderRadius: 15,
                marginBottom: 10,
              }}
            />
          </View>
          <Text style={{ fontSize: 30, fontWeight: "600", marginBottom: 5 }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: "#35b8be",
              fontSize: 20,
              fontWeight: "500",
              paddingBottom: 15,
              borderBottomColor: "#35b8be",
              borderBottomWidth: 0.5,
            }}
          >
            $ {item.price}.00 USD
          </Text>

          <Text style={{ marginTop: 15, fontSize: 16 }}>
            Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
            expetendis in mei. Mei an pericula euripidis, hinc partem ei est.;
          </Text>
          <Text style={{ marginVertical: 5, fontSize: 16 }}>
            Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt
            vix at, vel pertinax sensibus id, error epicurei mea et. Mea
            facilisis urbanitas. Vis ei rationibus definiebas, eu qui purto zril
            laoreet. Ex error omnium interpretaris pro, alia illum ea vim.
          </Text>

          <TouchableOpacity
            onPress={() => dispatch(addToCart(item.id))}
            style={{ marginTop: 35, alignSelf: "flex-start"}}
          >
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

        <View style={{ padding: 25 }}>
          <Text
            style={{
              textAlign: "center",
              color: "#35b8be",
              borderTopColor: "#35b8be",
              borderTopWidth: 0.5,
              fontSize: 40,
              fontWeight: "700",
              paddingVertical: 20,
            }}
          >
            Related Items
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {related.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
  );
};

export default FullProduct;
