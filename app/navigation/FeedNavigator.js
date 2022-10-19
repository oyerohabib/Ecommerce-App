import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Listing from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen
        name="ListingDetailsScreen"
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
