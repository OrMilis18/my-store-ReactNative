import React from "react";
import {FlatList,View,Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import styles from "../assets/Style";

import CategoriesGridTile from "../components/CategoriesGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoriesGridTile
        title={item.title}
        img={item.img}
        onSelect={() => {
          navigation.navigate("Product", {
            categoryId: item.id,
            CategoryTitle: item.title,
          });
        }}
      />
    );
  };

  return (
    <View>
      <View style={styles.button} ><Button onPress={() => navigation.navigate('ShoppingCart')} title="Cart"/></View>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Product",
};


export default CategoriesScreen;