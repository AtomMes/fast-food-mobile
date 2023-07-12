import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutUs = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingBottom: 110,
      }}
    >
      <Text>Hello world</Text>
    </SafeAreaView>
  );
};

export default AboutUs;
