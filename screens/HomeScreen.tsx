import React from "react";
import Home from "../components/Home/Home";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Home />
    </SafeAreaView>
  );
};

export default HomeScreen;
