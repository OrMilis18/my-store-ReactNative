import React from "react";
import styles from "../assets/Style";
import { Text, View, Image,Button,TextInput } from 'react-native';
import { CART } from "../data/dummy-data";
export default function ThanksScreen({ route,navigation }) {
  return (
    <View style={styles.form}>
        <Text style={styles.title}>Thanks for buying!</Text>
        <Image source={{ uri: "https://www.cleanwateraction.org/sites/default/files/images/blog/Thank%20you%202020.png" }} style={styles.image} />
        <Button onPress={() => navigation.navigate('Pc Store') }title="Go back to  the store"/>
    </View>
  );
}


