import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { styled } from "styled-components/native";

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ["HomeScreen", "About"]
>;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const Header = () => {
  const navigation = useNavigation<ProductScreenNavigationProp>();

  return (
    <SafeAreaView
      style={{
        width: "100%",
        zIndex: 100,
        height: 90,
        backgroundColor: "#35b8be",
      }}
    >
      <Wrapper>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Image
            style={{ width: 31, height: 40, padding: 10 }}
            source={require("../assets/mainLogo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Icon name="info-circle" size={25} color="white" />
        </TouchableOpacity>
      </Wrapper>
    </SafeAreaView>
  );
};

export default Header;
