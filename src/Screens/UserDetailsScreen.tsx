import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native";

const UserDetailsScreen=()=>{
    const route=useRoute<any>();
    const {id}=route.params??{};
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:22,fontWeight:700}}>
                User ID {id}
            </Text>
        </View>
    )
}
export default UserDetailsScreen