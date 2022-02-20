import React from "react";
import styles from "../assets/Style"
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from "react-native";
import { CART } from "../data/dummy-data";

// in Text -> change to props.title
const CartGridTile = (props) => {
  const remove = (product) =>{
    CART.pop(product)
    alert('Removed!');
  }
  return (
    <View style={styles.productGridItem}>
        <TouchableOpacity style={styles.productGridItem} onPress={props.onSelect}>
            <Text style={styles.title} numberOfLines={1}>
                {props.title}
            </Text>
            <ImageBackground style={styles.image} source={{ uri: props.img }}/>
        </TouchableOpacity>
        <Text>{props.description}</Text>
        <Text style={styles.priceTxt}>Price:{props.price}$</Text>
        <Button onPress={()=>remove(props.product)} color={"red"} title="Remove"/>
    </View>
  );
};


export default CartGridTile;