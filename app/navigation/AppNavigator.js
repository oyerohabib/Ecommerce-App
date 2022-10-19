import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditButton from "./ListingEditButton";

const Tabs = createBottomTabNavigator();

export default AppNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="ListingsScreen"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ListingEditScreen"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <ListingEditButton
              onPress={() => navigation.navigate("ListingEditScreen")}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
