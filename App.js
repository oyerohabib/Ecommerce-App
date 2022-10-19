import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AuthNavigator from "./app/navigation/AuthNavigator";

import Button from "./app/components/Button";
import myTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

function Tweets({ navigation }) {
  return (
    <View style={{ padding: 10 }}>
      <Text>Tweets</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate("TweetDetails")}
      />
    </View>
  );
}

function TweetDetails({ navigation }) {
  return (
    <View>
      <Text>TweetDetails</Text>
      <Button title="Previous" onPress={() => navigation.navigate("Tweets")} />
    </View>
  );
}

const Feed = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text>Feed Update</Text>
      <Button title="new feeds" />
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TweetNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer theme={myTheme}>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "gray" },
          headerTintColor: "white",
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Tweets"
          component={Tweets}
          options={{
            headerStyle: { backgroundColor: "green" },
            headerTintColor: "red",
            headerShown: true,
          }}
        />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
      </Stack.Navigator> */}
      {/* <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={TweetNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator> */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
