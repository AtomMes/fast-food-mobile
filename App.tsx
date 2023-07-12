import React from "react";
import Navigation from "./components/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        
          <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
