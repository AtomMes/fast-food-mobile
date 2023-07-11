import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../../screens/HomeScreen";
import CartScreen from "../../screens/CartScreen";
import AboutUsScreen from "../../screens/AboutUs";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { setItems } from "../../redux/itemsSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("items");
        if (storedItems) {
          dispatch(setItems(JSON.parse(storedItems)));
        } else {
          const { data } = await axios.get(
            "https://634ef267df22c2af7b475a0f.mockapi.io/items"
          );
          dispatch(setItems(data));
          AsyncStorage.setItem("items", JSON.stringify(data));
        }
      } catch (error) {
        console.log("Error fetching or storing data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "shopping-cart";
          } else if (route.name === "About") {
            iconName = "info";
          }

          return (
            <Icon
              name={iconName}
              size={size}
              color={focused ? "#35b8be" : "gray"}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#35b8be",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutUsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
