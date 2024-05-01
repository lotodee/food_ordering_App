import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Colors from "@/src/constants/Colors";
import * as ImagePicker from 'expo-image-picker';
const CreateProductScreen = () => {
const [name , setName] = useState('');
const [price , setPrice] = useState('');
const [errors, setErrors] =useState('');


const [image, setImage] = useState<string | null>(null);

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};



const validateInput = () =>{
    setErrors('')
    if(!name){
        setErrors('Name is required');
        return false;
    }
    if(!price){
        setErrors('Price is required');
        return false;
    }
    if(isNaN(parseFloat(price))){
        setErrors('Price is not a number');
        return false
    }
    return true;
}

const resetFields =()=>{
    setName('');
    setPrice('');
}

    const onCreate =()=>{
        if(!validateInput()){
            return;
        }
        console.warn('creating product' , price , name )
        
        //saving in the database
        resetFields()
    }
  return (
    <View style={styles.container}>
        <Image source={{uri: image || defaultPizzaImage}} style={styles.image}/>

        <Text onPress={pickImage} style={styles.textButton}>Select Image</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="Name" style={styles.input}
      value={name}
      onChangeText={setName}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        placeholder="$9.99"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
<Text style={{color:'red'}}>{errors}</Text>
      <Button
      text="Create"
      onPress={onCreate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  image:{
    width:'50%',
    aspectRatio:1,
   alignSelf:'center'
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  textButton:{
 alignSelf:'center',
 fontWeight:'bold',
 color:Colors.light.tint,
 marginVertical:10

  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;
