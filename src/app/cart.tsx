import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { CartContext, useCart } from '../providers/CartProvider'
import { useContext } from 'react'
import { Product } from '../types'
import CartListItem from '../components/CartListItem'
import Button from '../components/Button'
export default function cartScreen() {



const { items , total }  = useCart()

  return (
    <>
    

    <View style={{padding:10}}>
      <FlatList
      data={items}
      renderItem={({item})=> <CartListItem cartItem={item}/>}
      contentContainerStyle={{gap:10}}
      
      />
      <Text
      style={{marginTop:20,fontSize:20,fontWeight:'500'}}
      >${total}</Text>
      <Button text='Checkout'/>
  
    </View> 
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  )
}