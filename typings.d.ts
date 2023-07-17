type Button = {
  name: string;
  id: number;
  isSelected: boolean;
};

type Buttons = Button[];

type Item = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  types: number[];
  price: number;
  count?: number;
};

type Items = Item[];

type RootStackParamList = {
  Home: undefined;
  Tabs: undefined;
  FullProduct: { id: number };
  About: undefined;
};

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tabs">;
};
