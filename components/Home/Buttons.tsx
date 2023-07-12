import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface Props {
  buttons: Buttons;
  handleClick: (arg1: number) => void;
}

const Buttons = ({ buttons, handleClick }: Props) => {
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
          rowGap: 10,
        }}
      >
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.id}
            onPress={() => handleClick(button.id)}
            style={{ width: "49%" }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: button.isSelected ? "#35b8be" : "white",
                borderColor: button.isSelected ? "#35b8be" : "white",
                borderRadius: 9999,
                height: 40,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: button.isSelected ? "white" : "#35b8be",
                }}
              >
                {button.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Buttons;
