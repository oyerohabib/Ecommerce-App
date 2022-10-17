import React, { useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import { StyleSheet } from "react-native";
import ImageInput from "./app/components/ImageInput";
import * as ImagePicker from "expo-image-picker";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  return <ListingEditScreen />;
  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  // return (
  //   <Screen style={styles.container}>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={(uri) => {
  //         handleAdd(uri);
  //       }}
  //       onRemoveImage={(uri) => {
  //         handleRemove(uri);
  //       }}
  //     />
  //   </Screen>
  // );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
