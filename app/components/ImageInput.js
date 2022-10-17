import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import defaultStyles from "../config/styles";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    try {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted) {
        alert("you need to grant permissions");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert(
        "Delete Image",
        "Are you sure you want to Delete this Image",
        [
          {
            text: "Yes",
            onPress: () => onChangeImage(null),
          },
          {
            text: "No",
            onPress: () => console.log("Image Not be deleted"),
          },
        ],
      );
    }
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        quality: 0.5,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("an error occured", error);
    }
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.ImageContainer}>
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.SignleImage} />
          )}
          {!imageUri && (
            <View style={styles.imagePicker}>
              <MaterialCommunityIcons name="camera" size={30} />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  ImageContainer: {
    flexDirection: "row",
  },
  SignleImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 20,
  },
  imagePicker: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: defaultStyles.colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageInput;
