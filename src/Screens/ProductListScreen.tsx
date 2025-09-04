import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/RootNavigation";
import { addToCart } from "../Redux/store/slices/cartSlice";

const mockProducts = [
  { 
    id: "1",
    name: "Apple",
    price: 120 },
  { 
    id: "2",
    name: "Banana",
    price: 100
   },
  { 
    id: "3", 
    name: "Cabbage", 
    price: 90 
   },
   { 
    id: "4",
    name: "Water",
    price: 20 },
  { 
    id: "5",
    name: "Coke",
    price: 95
   },
  { 
    id: "6", 
    name: "Pizza", 
    price: 299 
   },
];

type ProductListProps = NativeStackScreenProps<RootStackParamList, "ProductList">;

const ProductListScreen=({navigation}:ProductListProps)=> {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity style={{padding:10,borderRadius:5,backgroundColor:'orange',marginHorizontal:5}} onPress={() => navigation.navigate("Cart")} >
        <Text>Go to cart</Text>
      </TouchableOpacity>

      <FlatList
        data={mockProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              marginVertical: 6,
              borderWidth: 1,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text>Price: ${item.price}</Text>
            <TouchableOpacity onPress={() => dispatch(addToCart(item))} style={{backgroundColor:'black',padding:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white'}}>
                    Add to Cart
                </Text>
            </TouchableOpacity>
              
          </View>
        )}
      />
    </View>
  );
}
export default ProductListScreen