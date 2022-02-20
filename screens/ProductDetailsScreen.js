import React from "react";
import styles from "../assets/Style";
import { Text, View, ScrollView, Image,Button } from 'react-native';
import { PRODUCTS,CART } from "../data/dummy-data";

export default function ProductDetailsScreen({ route,navigation }) {

  let ShippingPrice=10;
  const { productId } = route.params;
  const currProduct = PRODUCTS.find(product => product.id === productId);
  const addToCart = (product) =>{
    CART.push(product)
    alert('Add');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <Button onPress={() => navigation.navigate('ShoppingCart')} title="Cart"/>
        <Image source={{ uri: currProduct.img }} style={styles.image} />
        <View style={styles.form}>
          <Text style={styles.title}>{currProduct.title}</Text>
          <Text style={styles.txt}><b>Description: </b>{currProduct.description}</Text>
          <Text><b>Size And Weight:</b> {currProduct.sizeAndWeight}</Text>
          <Text><b>Opnions: </b>{currProduct.opinion}</Text>
          <Text><b>Shipping price: </b>{ShippingPrice}$</Text>
          <Text style={styles.priceTxt}>Final price: {currProduct.price+ShippingPrice}$</Text>
         </View>
          <Button onPress={()=>addToCart(currProduct)} title="Add to cart"/>
    </ScrollView>
    </View>
  );
}


