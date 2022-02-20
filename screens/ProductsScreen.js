import React from "react";
import {FlatList, View,Text ,Button} from "react-native";
import { PRODUCTS } from "../data/dummy-data";
import styles from "../assets/Style";
import ProductsGridTile from "../components/ProductsGridTile";

const ProductsScreen = ({ route,navigation }) => {
  const { categoryId } = route.params;
  const displayedProducts = PRODUCTS.filter(product => product.categoryId.indexOf(categoryId) >= 0);
 let numOfProducts = displayedProducts.length;
  const renderGridItem = ({ item }) => {
    
    return (
      <ProductsGridTile
        title={item.title}
        img={item.img}
        price={item.price}
        description={item.description}
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

  return (
    <View style={styles.form}>
      <View style={styles.button} ><Button onPress={() => navigation.navigate('ShoppingCart')} title="Cart"/></View>
      <Text style={styles.txt}>{numOfProducts} products founds...</Text>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={displayedProducts}
      renderItem={renderGridItem}
      numColumns={2}
    />
    </View>
  );
};

ProductsScreen.navigationOptions = {
  headerTitle: "ProductDetails",
};


export default ProductsScreen;
