import React from "react";
import Navigation from "./components/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={styles.container}> */}
        <Provider store={store}>
          <Navigation />
        </Provider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
