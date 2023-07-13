import { View, Text, ScrollView } from "react-native";
import React from "react";
import Buttons from "./Buttons";
import { useAppSelector } from "../../redux/redux-hooks";
import Products from "./Products";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [buttons, setButtons] = React.useState([
    {
      name: "Full Menu",
      id: 0,
      isSelected: false,
    },
    {
      name: "Burgers",
      id: 1,
      isSelected: false,
    },
    {
      name: "Sides",
      id: 2,
      isSelected: false,
    },
    {
      name: "Drinks",
      id: 3,
      isSelected: false,
    },
  ]);

  const [selectedButton, setSelectedButton] = React.useState(0);

  const { items }: { items: Items } = useAppSelector(
    (state) => state.itemsSlice
  );

  const [food, setFood] = React.useState(items);
  const [loading, setLoading] = React.useState(true);

  const handleClick = (id: number) => {
    setSelectedButton(id);
  };

  React.useEffect(() => {
    setFood(items.filter((item: Item) => item.types.includes(selectedButton)));
    setButtons(
      buttons.map((button) => {
        if (selectedButton === button.id) {
          return { ...button, isSelected: true };
        } else {
          return { ...button, isSelected: false };
        }
      })
    );
  }, [selectedButton]);

  React.useEffect(() => {
    setFood(items);
  }, []);
  React.useEffect(() => {
    if (items.length) {
      setFood(
        items.filter((item: Item) => item.types.includes(selectedButton))
      );
      AsyncStorage.setItem("items", JSON.stringify(items));
      setLoading(false);
    }
  }, [items]);

  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
      <ScrollView>
        <Buttons buttons={buttons} handleClick={handleClick} />
        <Products food={food} />
      </ScrollView>
    </View>
  );
};

export default Home;
