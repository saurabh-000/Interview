import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import LargeListScreen from "../Screens/LargeListScreen";
import ProductListScreen from "../Screens/ProductListScreen";
import CartScreen from "../Screens/CartScreen";
import UserDetailsScreen from "../Screens/UserDetailsScreen";
export type RootStackParamList = {
  Home: undefined;
  LargeList: undefined;
  ProductList:undefined;
  Cart:undefined;
  UserDetails:undefined;
};
const Stack=createNativeStackNavigator<RootStackParamList>()
const RootNavigation= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name="LargeList"
        component={LargeListScreen}
      />

      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
      />

      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;