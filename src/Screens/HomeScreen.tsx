import { useNavigation } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { RootStackParamList } from "../Navigation/RootNavigation";
import { HomeProps } from "../Types/Types";

const HomeScreen=({navigation}:HomeProps)=>{
    return(
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('ProductList')} style={{backgroundColor:'grey',padding:20,margin:20,borderRadius:10,}}>
                <Text style={{color:'white'}}>Product List Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
export default HomeScreen