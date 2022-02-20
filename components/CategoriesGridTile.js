import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Style";

// in Text -> change to props.title
const CategoriesGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.categoryGridItem} onPress={props.onSelect}>
        <ImageBackground style={styles.container} source={{ uri: props.img }}>
              <Text style={styles.Ctitle} numberOfLines={1}>
                {props.title}
              </Text>
          </ImageBackground>
    </TouchableOpacity>
  );
};



export default CategoriesGridTile;