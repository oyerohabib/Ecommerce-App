import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
