import React from "react";
import BottomNavigation from "./components/navigation/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView> //flexi momenty dzem knopkeqi,(web em qashel dra hma), heto contenty qashely, redux, u tenc...
  );
}

export default App;
