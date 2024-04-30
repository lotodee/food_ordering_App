import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes:PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

const {addItem} = useCart();

const {items} = useCart();
  const { id } = useLocalSearchParams();
const router = useRouter();


  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <Text>Product not found</Text>;
  }

  const addToCart = () =>{
   router.push('/cart')
if(!product){
  return;
}

addItem(product , selectedSize)


    console.warn('Adding to Cart , size' , selectedSize)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${product.name}` }} />

      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

  

<Text style={styles.title}>${product.name}</Text>  
<Text style={styles.price}>${product.price}</Text>

     

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
   
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
   
  }

});

export default ProductDetailsScreen;
