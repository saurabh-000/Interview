import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import LargeListScreen from "../Screens/LargeListScreen";
import ProductListScreen from "../Screens/ProductListScreen";
import CartScreen from "../Screens/CartScreen";
import UserDetailsScreen from "../Screens/UserDetailsScreen";
import CodeReviewScreen from "../Screens/CodeReviewScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export type RootStackParamList = {
  Home: undefined;
  UserDetails:undefined;
  CodeReview:undefined;
};
export type TabParamList = {
  ProductList: undefined;
  Cart: undefined;
  LargeList: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabView=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="ProductList" component={ProductListScreen}/>
      <Tab.Screen name="Cart" component={CartScreen}/>
      <Tab.Screen name="LargeList" component={LargeListScreen}/>

    </Tab.Navigator>
  )
}
const Stack=createNativeStackNavigator<RootStackParamList>()
const RootNavigation= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabView}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{headerShown:false}}
      />

      <Stack.Screen
        name="CodeReview"
        component={CodeReviewScreen}
        options={{headerShown:false}}
      />
      
    </Stack.Navigator>
  );
};

export default RootNavigation;