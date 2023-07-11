import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";

interface Props {
  buttons: Buttons;
  handleClick: (arg1: number) => void;
}

const Buttons = ({ buttons, handleClick }: Props) => {
  const theme = useTheme();

  return (
    <View
      style={{
        padding: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          rowGap:10,
        }}
      >
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.id}
            onPress={() => handleClick(button.id)}
            style={{ width: "49%" }}
          >
            <Button
              mode={button.isSelected ? "contained" : "outlined"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: button.isSelected ? "#35b8be" : "white",
                borderColor: button.isSelected ? "#35b8be" : "white",
                height: 40,
              }}
              labelStyle={{
                fontSize: 16,
                color: button.isSelected ? "white" : "#35b8be",
                textTransform: "capitalize",
                fontWeight: "400",
              }}
            >
              <Text style={{ fontSize: 15 }}>{button.name}</Text>
            </Button>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Buttons;
