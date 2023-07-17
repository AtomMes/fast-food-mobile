import { RouteProp, useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";



type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ["HomeScreen", "About"]
>;

const Header = () => {
  const navigation = useNavigation<ProductScreenNavigationProp>();

  return (
    <SafeAreaView
      style={{ width: "100%", zIndex:100, height: 90, backgroundColor: "white" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 40,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            style={{ width: 31, height: 40, padding: 10 }}
            source={require("../assets/mainLogo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>

          <Icon name="info-circle" size={25} color="gray" />
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Header;
