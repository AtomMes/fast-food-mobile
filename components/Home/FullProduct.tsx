import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { styled } from "styled-components/native";
import { addToCart } from "../../redux/itemsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import RelatedItems from "./RelatedItems";

type FullProductRouteProp = RouteProp<RootStackParamList, "FullProduct">;

interface Props {
  route: FullProductRouteProp;
}

type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

const Wrapper = styled.View`
  display: flex;
  align-self: center;
  width: 100%;
  max-height: 70%;
  padding: 25px;
`;

const Header = styled.View`
  position: relative;
  display: flex;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 10;
`;

const StyledImage = styled(Image)`
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 1 / 1;
  min-height: 250px;
  max-height: 100%;
  border-radius: 15px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Price = styled.Text`
  color: #35b8be;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 15px;
  border-bottom-color: #35b8be;
  border-bottom-width: 0.5px;
`;

const Description = styled.Text`
  margin-top: 15px;
  font-size: 16px;
`;

const AdditionalInfo = styled.Text`
  margin: 5px 0;
  font-size: 16px;
`;

const AddToCartButton = styled.TouchableOpacity`
  margin-top: 35px;
  align-self: flex-start;
`;

const AddToCartView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #35b8be;
  padding: 0 10px;
  height: 30px;
  border-radius: 3px;
`;

const CountView = styled.View`
  display: flex;
  justify-content: center;
  border-radius: 9999px;
  margin-right: 5px;
  align-items: center;
  background-color: white;
  width: 23px;
  height: 23px;
`;

const CountText = styled.Text`
  color: #35b8be;
`;

const AddToCartText = styled.Text`
  color: white;
`;

const FullProduct = ({ route }: Props) => {
  const { id } = route.params;
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.itemsSlice);
  const item: Item = items[id];
  const [related, setRelated] = React.useState<Items>([]);

  React.useEffect(() => {
    AsyncStorage.setItem("items", JSON.stringify(items));
    setRelated(items.filter((i: Item) => i.types.includes(item.types[1])));
  }, [items]);

  const navigation = useNavigation<ProductScreenNavigationProp>();

  if (!item) return <></>;

  return (
    <ScrollView>
      <Wrapper>
        <Header>
          <BackButton onPress={() => navigation.navigate("HomeScreen")}>
            <Icon name="arrow-left" size={20} color="#35b8be" />
          </BackButton>
          <StyledImage source={{ uri: item.imageUrl }} />
        </Header>
        <Title>{item.name}</Title>
        <Price>$ {item.price}.00 USD</Price>

        <Description>
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
          expetendis in mei. Mei an pericula euripidis, hinc partem ei est.;
        </Description>
        <AdditionalInfo>
          Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt
          vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis
          urbanitas. Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex
          error omnium interpretaris pro, alia illum ea vim.
        </AdditionalInfo>

        <AddToCartButton onPress={() => dispatch(addToCart(item.id))}>
          <AddToCartView>
            {item.count ? (
              <CountView>
                <CountText>{item.count}</CountText>
              </CountView>
            ) : null}
            <AddToCartText>Add to cart</AddToCartText>
          </AddToCartView>
        </AddToCartButton>
        <RelatedItems related={related} />
      </Wrapper>
    </ScrollView>
  );
};

export default FullProduct;
