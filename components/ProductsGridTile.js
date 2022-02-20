import React, { useRef } from "react";
import styles from "../assets/Style"
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Button } from "react-native";
import { CART } from "../data/dummy-data";

const ProductsGridTile = (props) => {
  const addToCart = (product) =>{
    CART.push(product)
    alert('Add');
  }
  return (
    <View style={styles.productGridItem}>
        <TouchableOpacity style={styles.productGridItem} onPress={props.onSelect}>
            <Text style={styles.title} numberOfLines={1}>
                {props.title}
            </Text>
            <ImageBackground style={styles.container} source={{ uri: props.img }}/>
        </TouchableOpacity>
        <Text>{props.description}</Text>
        <Text style={styles.priceTxt}>Price:{props.price}$</Text>
        <Button onPress={()=>addToCart(props.product)} title="Add to cart"/>
    </View>
  );
};


export default ProductsGridTile;