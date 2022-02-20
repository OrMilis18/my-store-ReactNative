import React from "react";
import { Platform } from "react-native";
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screens:
import CategoriesScreen from "../screens/CategoriesScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import PaymentScreen from "../screens/PaymentScreen";
import ThanksScreen from "../screens/ThanksScreen";
const Stack = createNativeStackNavigator();

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: (Platform.OS = "android"
              ? "orange"
              : "white"),
          },
          headerTintColor: (Platform.OS = "ios"
            ? "white"
            : "orange"),
        }}
      >
        <Stack.Screen name="Pc Store" component={CategoriesScreen} />
        <Stack.Screen
          name="Product"
          component={ProductsScreen}
          options={({ route }) => ({ title: route.params.CategoryTitle })}
        />
        <Stack.Screen 
        name="ProductDetails" 
        component={ProductDetailsScreen}
        options={({ route }) => ({ title: route.params.ProductName })}
         />
         <Stack.Screen 
        name="ShoppingCart" 
        component={ShoppingCartScreen}
         />
         <Stack.Screen 
        name="Payment" 
        component={PaymentScreen}
         />
        <Stack.Screen 
        name="Thanks" 
        component={ThanksScreen}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}