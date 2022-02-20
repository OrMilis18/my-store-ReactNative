import React, { useState } from "react";
import { Text,View,Button,FlatList,TextInput } from "react-native";
import styles from "../assets/Style";
import { CART } from "../data/dummy-data";
import CartGridTile from "../components/CartGridTile";

const ShoppingCartScreen = ({ navigation }) => {

  let finalPrice =  0;
  CART.forEach(element => {
    finalPrice=finalPrice+element.price;
  });
  const[total,setTotal]=useState(finalPrice+10)
  if (CART.length===0) {
    return (
      <Text>shopping cart is Empty!</Text>
    );
  }
  else{
    const renderGridItem = ({ item }) => {
      return (
        <CartGridTile
          title={item.title}
          img={item.img}
          price={item.price}
          onSelect={() => {
            navigation.navigate("ProductDetails", {
              productId: item.id,
              ProductName: item.title,
            });
          }}
          product={item}
        />
      );
    };
    return(
      <View style={styles.form}>
        <Text style={styles.title}>Shopping cart</Text>
        <FlatList
      keyExtractor={(item, index) => item.id}
      data={CART}
      renderItem={renderGridItem}
      numColumns={1}
    />
    <Text>Shipping: 10$</Text>
    <Text style={styles.priceTxt}>Total: {total}$</Text>
    <Text>10%-<TextInput
        onChangeText={(txt)=>{
          if(total==finalPrice+10&&(txt==123456||txt==111111||txt==222222))
          setTotal(total-(total/100*10))}}
        style={styles.input}
        placeholder="Coupon number"
        keyboardType="numeric"
      /></Text>
    <Button onPress={() => navigation.navigate('Payment') } title="Go to payment"/>



      </View>
    );
  }
  };


export default ShoppingCartScreen;
